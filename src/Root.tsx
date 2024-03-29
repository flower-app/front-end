import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import { PathnameProvider } from './helpers/PathnameContext'
import { AboutUsPage } from './pages/AboutUsPage'
import AuthorizePage from './pages/AuthorizePage/AuthorizePage'
import { CartPage } from './pages/CartPage'
import { CatalogPage } from './pages/CatalogPage'
import CheckOutPage from './pages/CheckOutPage/CheckOutPage'
import { ErrorPage } from './pages/ErrorPage'
import FavoritesPage from './pages/FavoritesPage/FavoritesPage'
import HomePage from './pages/HomePage/HomePage'
import { ProductPage } from './pages/ProductPage'

export default function () {
  return (
    <HashRouter>
      <PathnameProvider>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<HomePage />} />
            <Route path='home' element={<HomePage />} />
            <Route path='catalog'>
              <Route index element={<CatalogPage />} />
              <Route path=':product_name_Id' element={<ProductPage/>} />
            </Route>
            <Route path="about-us" element={<AboutUsPage />} />
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path="cart">
              <Route index element={<CartPage />} />
              <Route path="check-out" element={<CheckOutPage />} />
            </Route>
            <Route path="profile" element={<AuthorizePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </PathnameProvider>
    </HashRouter>
  )
}
