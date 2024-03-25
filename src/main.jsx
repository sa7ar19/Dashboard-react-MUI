import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Dashboard from './pages/Dashboard/Dashboard';
import Team from './pages/Team/Team';
import Contacts from './pages/Contacts/Contacts'
import Invoices from './pages/Invoices/Invoices'
import Form from './pages/Form/Form'
import Calender from './pages/Calendar/Calendar'
import Bar from './pages/Bar/Bar'
import Pie from './pages/Pie/Pie'
import Line from './pages/Line/Line'
import Geography from './pages/Geography/Geography'
import FAQ from './pages/FAQ/FAQ';
import NotFound from './pages/notFound/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path='team' element={<Team />} />
      <Route path='contacts' element={<Contacts />} />
      <Route path='invoices' element={<Invoices />} />
      <Route path='form' element={<Form />} />
      <Route path='calender' element={<Calender />} />
      <Route path='bar' element={<Bar />} />
      <Route path='faq' element={<FAQ />} />
      <Route path='pie' element={<Pie />} />
      <Route path='line' element={<Line />} />
      <Route path='geography' element={<Geography />} />
      <Route path='*' element={<NotFound />} />

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
