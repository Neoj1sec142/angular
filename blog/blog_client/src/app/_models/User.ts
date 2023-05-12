export interface UserDto{
    first_name: string,
    last_name: string,
    username: string,
    password: string,
    email: string
}
export interface User{
    id: number,
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    date_joined: Date,
    is_staff: boolean,
}