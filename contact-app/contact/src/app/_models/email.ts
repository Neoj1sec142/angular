// Email Model
export const EmailCategoryTypes = ['Work', "Personal", "Job Search", 'Marketing', 'Photography']

export interface ContactEmail{
    id?: number,
    contact: number,
    email: string,
    category: string
}