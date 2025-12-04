# Posts App

A React application that displays posts with user information in a responsive grid layout.

## Features

- Fetches first 10 posts from DummyJSON API
- Displays 4 posts per row in grid layout
- Shows post title, body, and author's full name
- Responsive design (adapts to mobile/tablet)
- Hover effects on post cards

## APIs Used

- **Posts**: `https://dummyjson.com/posts?limit=10`
- **Users**: `https://dummyjson.com/users`

## Installation

```bash
yarn install
```

## Development

```bash
yarn dev
```

## Build

```bash
yarn build
```

## Project Structure

```
src/
├── PostsGrid.jsx    # Main component
├── PostsGrid.css    # Styles
└── App.jsx          # Root component
```

## Component Details

### PostsGrid
- Fetches posts and users data on mount
- Maps user data for efficient lookup
- Renders posts in responsive grid
- Each card displays: title, body, firstName, lastName
