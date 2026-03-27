# Message Posting App

A React blog-style application where users can create, view, edit, and delete posts. The app uses React Router for navigation and a JSON server API for persistent post data.

## Features

- Create a new post with title and body
- View all posts on the home feed
- Open single post details page
- Edit existing posts
- Delete posts
- Search input for post discovery
- Responsive header icon based on screen width
- Loading and error states for API fetches

## Tech Stack

- React 19
- React Router DOM 7
- Axios
- date-fns
- React Icons
- Create React App (`react-scripts`)
- JSON Server (local REST API)

## Project Structure

```text
Message_Posting_App/
	public/
	src/
		api/
			posts.js
		context/
			DataContext.js
		hooks/
			useAxiosFetch.js
			useWindowSize.js
		App.js
		Home.js
		Feed.js
		Post.js
		PostPage.js
		NewPost.js
		EditPost.js
		About.js
		Missing.js
		Nav.js
		Header.js
		Footer.js
		db.json
		index.js
		index.css
	package.json
	README.md
```

## Routes

- `/` - Home feed
- `/post` - Create a new post
- `/post/:id` - View a single post
- `/edit/:id` - Edit an existing post
- `/about` - About page
- `*` - 404 fallback page

## API Configuration

The app is configured to use:

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:3500`

Axios base URL is set in `src/api/posts.js`.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/supritR21/Message_Posting_App.git
cd Message_Posting_App
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start JSON Server backend

Option A (global install):

```bash
npm install -g json-server
json-server --watch src/db.json --port 3500
```

Option B (without global install):

```bash
npx json-server --watch src/db.json --port 3500
```

### 4. Start React app

In a second terminal:

```bash
npm start
```

Open `http://localhost:3000` in your browser.

## Available Scripts

### `npm start`

Runs the app in development mode.

### `npm test`

Runs tests in watch mode.

### `npm run build`

Builds the app for production into the `build` folder.

### `npm run eject`

Ejects CRA configuration (irreversible).

## Data Model

Each post in `src/db.json` follows this shape:

```json
{
	"id": "1",
	"title": "Post title",
	"datetime": "February 10, 2025 1:41:16 AM",
	"body": "Post content"
}
```

## Notes

- This project uses Context API (`DataContext`) for shared state.
- There is also an `easy-peasy` store file present, but current app flow uses `DataContext`.
- Ensure JSON Server is running before using create/edit/delete features.

## Author

Suprit Raj

