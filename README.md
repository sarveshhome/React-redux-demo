# React and redux demo app

rfc stands for React Functional Component.

It is a shorthand snippet used in VS Code with the ES7+ React/Redux/React-Native snippets extension.

Typing rfc and hitting Tab will auto-generate this code:

```
import React from 'react';

const ComponentName = () => {
  return (
    <div>
      
    </div>
  );
};

export default ComponentName;

```


https://react-redux-demo-theta.vercel.app

https://reactrouterwithloader.netlify.app 


-- Refactor user management components and add pagination, search, and sorting features

- Updated App component to use UserManagementPage
- Created Pagination component for navigating through user pages
- Added SearchBar component for filtering users by name
- Implemented SortableTable component for displaying and sorting user data
- Developed UserTable component to integrate search, sorting, and pagination functionalities
- Introduced useUserData hook for managing user data state and operations
- Created UserManagementPage to encapsulate user management logic
- Added CSS styles for UserTable and its components

### Interview question

 React one. I have pasted two URLs(
 https://dummyjson.com/users 
 https://dummyjson.com/posts ). 
 Display first 10 posts, 4 posts in a row. There is a title, body, and user ID in the post. Using this, you need to get a first name and last name in the user API, and this has to happen on load. Each post card contains a title, body, first name, and last name. You need to fetch only first 10 posts, and 4 posts in a row. You need to fetch only first 10 posts, and 4 posts in a row.
