import { Product } from "./components/items/itemList";

//For Url path props in React Router in Product component.
export interface RouteMatch {
    path: string
    url: string
    isExact: boolean
    params:{
        id: string
    }
}

export interface CartItem{
    id: number
    nrItems: number
    product: Product
}

export interface CustomerInfo {
    firstName: string
    isFirstNameError: boolean
    firstNameError: string
    lastName: string
    isLastNameError: boolean
    lastNameError: string
    address: string
    isAddressError: boolean
    addressError: string
    zipCode: any
    zipCodeError: string
    isZipCodeError: boolean  
    city: string
    cityError: string
    isCityError: boolean

    email: any
    emailError: string
    isEmailError: boolean

    mobile: any
    isMobileError: boolean
    mobileError: string

    shippingMethod: string
    isShippingError: boolean,
    shippingError: string,
    shippingCost:any
    deliveryDate:any
}

export interface CustomerPaymentInfo {
    paymentMethod: string

    cardOwner:string
    isCardOwnerError: boolean,
    cardOwnerErrorText: string,
    cardNr: any
    isCardNrError: boolean,
    cardNrErrorText: string
    cardExp: any,
    isCardExpError: boolean,
    cardCVC: any,
    isCardCVCError: boolean,
    cardCVCErrorText: string
    cardExpErrorText: string,

    swishNr: any
    isSwishNrError: boolean,
    swishErrorText: string,
    
    emailFaktura:any
    isEmailFakturaError: boolean,
    emailErrorText: string
}