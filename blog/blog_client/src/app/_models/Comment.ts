
export interface Comment{
    author: number,
    post: number
    text: string,
    date_created: Date
}

export interface CommentDto{
    id: number,
    author: number,
    post: number
    text: string
}