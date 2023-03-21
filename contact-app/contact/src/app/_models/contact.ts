import { ContactEmail } from "./email"
import { ContactSocial } from "./social"
// Contact Model
export interface Contact{
    id?: number,
    name: string,
    phone_number: string,
    address: string,
    city_state: string,
    reference: string
}

export interface ContactName {
    id: number,
    name: string
}
export interface ContactDetail{
    id?: number,
    name: string,
    phone_number: string,
    address: string,
    city_state: string,
    reference: string
    emails: ContactEmail[],
    socials: ContactSocial[]
}