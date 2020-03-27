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