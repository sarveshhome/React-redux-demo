# React + Vite

Create project 

`yarn create vite`

### install router

`yarn add react-router-dom`



loader : https://reactrouter.com/upgrading/router-provider


### what is Outlet?

`Outlet is a component from React Router that renders the child routes within a parent route's component. It acts as a placeholder where child routes will be rendered.`

```
// Layout.jsx
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <Header />
      <main className="p-4">
        <Outlet /> {/* Child routes (Home, About, Contact, User) will render here */}
      </main>
      <Footer />
    </>
  )
}
```

In your router setup:

```
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}> {/* Parent Route */}
      <Route index element={<Home/>}/>     {/* Child Route */}
      <Route path='about' element={<About/>}/> {/* Child Route */}
      <Route path='contact' element={<Contact/>}/> {/* Child Route */}
      <Route path='user' element={<User/>}/> {/* Child Route */}
    </Route>
  )
)
```

```
+----------------+
|    Header      |  <- Always visible (from Layout)
+----------------+
|                |
|    <Outlet/>   |  <- This area changes based on route
|    (Home,     |     While Layout stays the same
|     About,    |
|     Contact,  |
|     User)     |
|                |
+----------------+
|    Footer      |  <- Always visible (from Layout)
+----------------+
```

- Benefits of using Outlet:

       - Maintains consistent layout across pages

       - Reduces code duplication

       - Makes it easier to manage shared UI elements

       - Enables nested routing

       - Provides better organization of components



netlify deploy

Deployed to production URL: https://reactrouterwithloader.netlify.app 