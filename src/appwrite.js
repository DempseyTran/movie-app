const DATABASE_ID = import.meta.env.VITE_APPWRITE_MOVIES_DB_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
import { Client, Databases, Query} from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(PROJECT_ID);

const database = new Databases(client);

// 2 params: seacrhTerm and movie
// 1. Search term: The search term that the user entered.
// 2. Movie: The movie object that was clicked on.
export const updateSearchCount = async (searchTerm, movie) => {
    // 1. Use API to check if exists in the database.
    try {
        const response = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.equal('searchTerm', searchTerm),
        ]);
        if (response.documents.length > 0) {
            // If it exists, increment the count by 1.
            const documentId = response.documents[0].$id;
            await database.updateDocument(DATABASE_ID, COLLECTION_ID, documentId, {
                count: response.documents[0].count + 1,
            });
        } else {
            // If not, create a new document with the search term and set the count to 1.
            await database.createDocument(DATABASE_ID, COLLECTION_ID, 'unique()', {
                searchTerm,
                count: 1,
            });
        }
    }
    catch (error) {
        console.error("Error updating search count:", error);
    }
    // 2. If it exists, increment the count by 1.
    // 3. If not, create a new document with the search term and set the count to 1.
}