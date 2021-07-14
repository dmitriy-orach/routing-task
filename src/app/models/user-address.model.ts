import { UserGeo } from "./user-geo.model";

export interface UserAddress {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: UserGeo
}