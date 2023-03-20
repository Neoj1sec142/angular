// Email Model
export const EmailCategoryTypes = ['Work', "Personal", "Job Search", 'Marketing', 'Photography']

export interface ContactEmail{
    contact: number,
    email: string,
    category: string
}