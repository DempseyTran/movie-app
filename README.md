# My First React App

This is a simple React application that allows users to search for movies using The Movie Database (TMDB) API. The app features a search bar, movie cards, and a responsive design.

## Features

- Search for movies using TMDB API.
- Display a list of movies with details like title, poster, and description.
- Debounced search to reduce API calls.
- Error handling for API requests.
- Loading indicator while fetching data.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Vite**: Fast development build tool.
- **TMDB API**: For fetching movie data.
- **React-use**: For debounce functionality.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/my-first-react-app.git
   cd my-first-react-app

2. Install dependencies:
```bash
npm install
```
3. Create a .env.local file in the root directory and add your TMDB API key:

```bashVITE_TMDB_API_KEY=your_tmdb_api_key```

4. Start the development server:
```bash
npm run dev
```
5. Open the app in your browser at: http://localhost:5173.

### Project Structure
trending-movie-app/
├── src/
│   ├── components/
│   │   ├── Search.jsx       # Search bar component
│   │   ├── MovieCard.jsx    # Movie card component
│   ├── App.jsx              # Main application file
│   ├── index.jsx            # Entry point
├── public/
│   ├── hero.png             # Hero banner image
├── [.env.local](http://_vscodecontentref_/1)               # Environment variables
├── [package.json](http://_vscodecontentref_/2)             # Project dependencies
├── [vite.config.js](http://_vscodecontentref_/3)           # Vite configuration
└── [README.md](http://_vscodecontentref_/4)                # Project documentation

