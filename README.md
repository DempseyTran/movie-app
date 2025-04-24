# My First React App

This is a simple React application that allows users to search for movies using The Movie Database (TMDB) API. The app features a search bar, movie cards, and a responsive design.

## Features

- Search for movies using TMDB API.
- Display a list of movies with details like title, poster, and description.
- Debounced search to reduce API calls.
- Error handling for API requests.
- Loading indicator while fetching data.
- Display 5 best movies that is search from clients

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Vite**: Fast development build tool.
- **TMDB API**: For fetching movie data.
- **React-use**: For debounce functionality.
- **Appwrite**: BaaS service for saving all searching movie query from clients

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/my-first-react-app.git
   cd my-first-react-app

2. Install dependencies:
```bash
npm install
```
3. Create a .env.local file in the root directory and add your TMDB API key and Some Appwrite key (Appwrite is BaaS for the App) :

```bash
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_MOVIES_DB_ID=your_appwrite_moviedb_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```

4. Start the development server:
```bash
npm run dev
```
5. Open the app in your browser at: http://localhost:5173.


