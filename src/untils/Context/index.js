import { createContext, useState } from 'react'

const savedProductViewMore = localStorage.getItem('savedProductViewMore')
const searchResult = localStorage.getItem('searchResult')
const searchWord = localStorage.getItem('searchWord')

export const AddProductMessageContext = createContext()
export const AddProductMessageProvider = ({ children }) => {
  const [message, setMessage] = useState(' ')
  const toggleAddProductMessage = (AddMessage) => {
    setMessage(AddMessage)
  }

  return (
    <AddProductMessageContext.Provider
      value={{ message, toggleAddProductMessage }}
    >
      {children}
    </AddProductMessageContext.Provider>
  )
}

export const LoadingContext = createContext()
export const LoadingProvider = ({ children }) => {
  const [isDataLoading, setIsDataLoading] = useState(false)

  return (
    <LoadingContext.Provider value={{ isDataLoading, setIsDataLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export const NewProductContext = createContext()
export const NewProductProvider = ({ children }) => {
  const [nameProduct, setNameProduct] = useState('')
  const [descriptionProduct, setDescriptionProduct] = useState('')
  const [priceProduct, setPriceProduct] = useState(0)
  const [coverProduct, setCoverProduct] = useState('')
  const [inStockProduct, setInStockProduct] = useState(undefined)
  const [userID, setUserID] = useState('ezf561ef6848rg4e9rg4s')
  const ProductModel = {
    name: nameProduct,
    description: descriptionProduct,
    price: priceProduct,
    cover: coverProduct,
    inStock: inStockProduct,
    userID: userID,
  }

  return (
    <NewProductContext.Provider
      value={{
        ProductModel,
        inStockProduct,
        setNameProduct,
        setDescriptionProduct,
        setPriceProduct,
        setCoverProduct,
        setInStockProduct,
      }}
    >
      {children}
    </NewProductContext.Provider>
  )
}

export const ProductsListContext = createContext()
export const ProductsListProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const toggleProductList = (productsList) => {
    setProducts(productsList)
  }

  const [errorMessage, setErrorMessage] = useState('')
  const toggleErrorMessage = (error) => {
    setErrorMessage(error)
  }
  return (
    <ProductsListContext.Provider
      value={{ products, toggleProductList, errorMessage, toggleErrorMessage }}
    >
      {children}
    </ProductsListContext.Provider>
  )
}

export const ViewMoreContent = createContext()
export const ViewMoreProvider = ({ children }) => {
  const [product, setProduct] = useState(
    savedProductViewMore ? JSON.parse(savedProductViewMore) : {}
  )
  const toggleProduct = (aboutProduct) => {
    setProduct(aboutProduct)
  }

  return (
    <ViewMoreContent.Provider value={{ product, toggleProduct }}>
      {children}
    </ViewMoreContent.Provider>
  )
}

export const UpdateProductContext = createContext()
export const UpdateProductProvider = ({ children }) => {
  const [nameUpdateProduct, setNameUpdateProduct] = useState(undefined)
  const [descriptionUpdateProduct, setDescriptionUpdateProduct] =
    useState(undefined)
  const [priceUpdateProduct, setPriceUpdateProduct] = useState(undefined)
  const [coverUpdateProduct, setCoverUpdateProduct] = useState(undefined)
  const [inStockUpdateProduct, setInStockUpdateProduct] = useState(undefined)
  const [userID, setUserID] = useState('efefefe')
  const [messageUpdate, setMessageUpdate] = useState(' ')
  const [messageDelete, setMessageDelete] = useState(' ')
  const ProductUpdate = {
    name: nameUpdateProduct,
    description: descriptionUpdateProduct,
    price: priceUpdateProduct,
    cover: coverUpdateProduct,
    inStock: inStockUpdateProduct,
    userID: userID,
  }
  const toggleUpdateMessage = (AddMessage) => {
    setMessageUpdate(AddMessage)
  }

  const toggleDeleteMessage = (DeleteMessage) => {
    setMessageDelete(DeleteMessage)
  }

  return (
    <UpdateProductContext.Provider
      value={{
        nameUpdateProduct,
        descriptionUpdateProduct,
        priceUpdateProduct,
        coverUpdateProduct,
        ProductUpdate,
        inStockUpdateProduct,
        messageUpdate,
        messageDelete,
        setNameUpdateProduct,
        setDescriptionUpdateProduct,
        setPriceUpdateProduct,
        setCoverUpdateProduct,
        setInStockUpdateProduct,
        toggleUpdateMessage,
        toggleDeleteMessage,
      }}
    >
      {children}
    </UpdateProductContext.Provider>
  )
}

export const SearchContext = createContext()
export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState(searchWord ? JSON.parse(searchWord) : '')
  const toggleSearch = (word) => {
    setSearch(word)
  }

  const [productsFind, setProductsFind] = useState(
    searchResult ? JSON.parse(searchResult) : []
  )
  const toggleProductsFind = (productsFind) => {
    setProductsFind(productsFind)
  }

  const [findMessageError, setFindMessageError] = useState('')
  const toggleFindMessageError = (messageFind) => {
    setFindMessageError(messageFind)
  }

  return (
    <SearchContext.Provider
      value={{
        search,
        productsFind,
        findMessageError,
        toggleSearch,
        toggleProductsFind,
        toggleFindMessageError,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

export const SignupContext = createContext()
export const SignupProvider = ({ children }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signupMessage, setSignupMessage] = useState('')

  const toggleSignupMessage = (Message) => {
    setSignupMessage(Message)
  }

  const Identifiant = {
    email: email,
    password: password,
  }

  const [showPassword, setShowPassword] = useState(false)
  const toggleShowPassword = (Password) => {
    setShowPassword(Password)
  }

  const [check, setCheck] = useState('')
  const toggleCheck = (checkMessage) => {
    setCheck(checkMessage)
  }

  return (
    <SignupContext.Provider
      value={{
        check,
        email,
        password,
        showPassword,
        Identifiant,
        signupMessage,
        toggleShowPassword,
        setEmail,
        setPassword,
        toggleSignupMessage,
        toggleCheck,
      }}
    >
      {children}
    </SignupContext.Provider>
  )
}
