import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Hotel from'./routes/hotel.tsx'
import Flights from './routes/flights.tsx'
import Cruises from './routes/cruises.tsx'
import CarRentals from './routes/car-rentals.tsx'
import AboutUs from './routes/about-us.tsx'
import ContactUs from './routes/contact-us.tsx'
import TermsOfUse from './routes/terms-of-use.tsx'
import PrivacyPolicy from './routes/privacy-policy.tsx'

import {createBrowserRouter,
  RouterProvider}  from 'react-router-dom'


  const router = createBrowserRouter([
    {
    path: '/',
    element: <App/> ,
    errorElement: <div>error</div>,
    children: [
      {
      path: '/',
      element: <Hotel/>
    },
    {
      path: '/flights',
      element: <Flights/>
    },
    {
      path: '/carrentals',
      element: <CarRentals/>
    },
    {
      path: '/cruises',
      element: <Cruises/>
    },
  ]
  },
  {
    path: '/aboutus',
    element: <AboutUs/>
  },
  {
    path: '/contactus',
    element: <ContactUs/>
  },
  {path: '/termsofuse',
    element: <TermsOfUse/>
  },
  {
    path: '/privacypolicy',
    element: <PrivacyPolicy/>
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
