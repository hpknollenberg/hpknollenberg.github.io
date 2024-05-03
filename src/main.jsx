import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// project styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import About from './About'
import App from './App'
import Contact from './Contact'
import Projects from './Projects'
import Blogs from './Blogs'
import ErrorPage from './ErrorPage'
import Blog7 from './Blogs/blog-7'
import Blog6 from './Blogs/blog-6'
import Blog8 from './Blogs/blog-8'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/blogs',
    element: <Blogs />
  },
  {
    path: '/blog-7',
    element: <Blog7 />
  },
  {
    path: '/blog-6',
    element: <Blog6 />
  },
  {
    path: '/blog-8',
    element: <Blog8 />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
