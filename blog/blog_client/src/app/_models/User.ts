export interface UserDto{
    first_name: string,
    last_name: string,
    username: string,
    password: string,
    email: string
}
export interface User{
    id: number,
    username: string,
    first_name: string,
    last_name: string,
    email: string,
    is_staff: boolean,
    is_superuser: boolean,
    is_active: boolean,
    is_authenticated: boolean
}

export interface AuthUser{
    id: number,
    username: string,
    email: string,
    is_staff: boolean,
    is_superuser: boolean,
    is_active: boolean,
    is_authenticated: boolean
}