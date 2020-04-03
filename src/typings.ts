import { Product } from "./components/items/itemListCore"

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
    lastName: string
    address: string
    zipCode: any
    city: string
    email: any
    mobile: any
    shippingMethod: string
    shippingCost:any
    deliveryDate:any

    isFirstNameError: boolean
    firstNameError: string
    isLastNameError: boolean
    lastNameError: string
    isAddressError: boolean
    addressError: string
    zipCodeError: string
    isZipCodeError: boolean
    cityError: string
    isCityError: boolean
    emailError: string
    isEmailError: boolean
    isMobileError: boolean
    mobileError: string
    isShippingError: boolean,
    shippingError: string,
}

export interface CustomerPaymentInfo {
    paymentMethod: string
    isPaymentError: boolean,
    paymentErrorText:string,

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