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
}

export interface customerInfo {
    firstName: string
    error: boolean
    firstNameError: string
    lastName: string
    address: string
    zipCode: any
    city: string
    email: string
    mobile: any

    shippingMethod: string
    shippingCost:any
    deliveryDate:any
}