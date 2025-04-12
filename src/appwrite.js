const DATABASE_ID = import.meta.env.VITE_APPWRITE_MOVIES_DB_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
import { Client } from "appwrite";

const client = new Appwrite();


// 2 params: seacrhTerm and movie
// 1. Search term: The search term that the user entered.
// 2. Movie: The movie object that was clicked on.
export const updateSearchCount = async (searchTerm, movie) => {
    // 1. Use API to check if exists in the database.
    // 2. If it exists, increment the count by 1.
    // 3. If not, create a new document with the search term and set the count to 1.
}