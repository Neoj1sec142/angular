
export interface Post{
    id: number,
    title: string,
    text: string,
    link?: string,
    comments?: []
    date_created: Date,
    date_modified: Date
}

export interface PostDto{
    author: number,
    title: string,
    text: string,
    link?: string,
}