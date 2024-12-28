import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router'
import './index.css'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Github, { githubInfoLoader } from './components/Github.jsx'
import User from './components/User.jsx'
import NotFound from './components/NotFound.jsx'  

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "github",
        loader:githubInfoLoader,
        element: <Github/>
      },
      {
        path: "user/:userId",
        element: <User/>
      },
      {
        path: "*",
        element: <NotFound/>
      }
    ]
  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//       <Route path='' element={<Home/>}/>
//       <Route path='about' element={<About/>}/>
//       <Route path='contact' element={<Contact/>}/>
//       <Route loader={githubInfoLoader} path='github' element={<Github/>}/>
//       <Route path='user/:userId' element={<User/>}/>
//       <Route path='*' element={<NotFound/>}/>
//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
