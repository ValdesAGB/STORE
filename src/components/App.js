import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddNewProduct from '../pages/AddProduct'
import Home from '../pages/Home'
import SignupConfirm from '../pages/SignupConfirm'
import Signup from '../pages/SignupRegister'
import Update from '../pages/Update'
import ViewMore from '../pages/ViewMore/ViewMore'
import {
  AddProductMessageProvider,
  LoadingProvider,
  NewProductProvider,
  ProductsListProvider,
  SearchProvider,
  SignupProvider,
  UpdateProductProvider,
  ViewMoreProvider,
} from '../untils/Context'
import Header from './Header'
import SearchPage from './SearchPage'

function App() {
  return (
    <React.Fragment>
      <SignupProvider>
        <SearchProvider>
          <LoadingProvider>
            <AddProductMessageProvider>
              <NewProductProvider>
                <ProductsListProvider>
                  <ViewMoreProvider>
                    <UpdateProductProvider>
                      <Header />
                      <Routes>
                        <Route path="/" element={<Home />} />
                        {/* <Route path="/signup/register" element={<Signup />} />
                        <Route
                          path="/signup/confirm/:confirmCode"
                          element={<SignupConfirm />}
                        />*/}
                        <Route path={'/search/'} element={<SearchPage />} />
                        <Route path="/newproduct" element={<AddNewProduct />} />
                        <Route
                          path="/viewmore/product/:id"
                          element={<ViewMore />}
                        />
                        <Route
                          path="/update/product/:id"
                          element={<Update />}
                        />
                      </Routes>
                    </UpdateProductProvider>
                  </ViewMoreProvider>
                </ProductsListProvider>
              </NewProductProvider>
            </AddProductMessageProvider>
          </LoadingProvider>
        </SearchProvider>
      </SignupProvider>
    </React.Fragment>
  )
}

export default App
