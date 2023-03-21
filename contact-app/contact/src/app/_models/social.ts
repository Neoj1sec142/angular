// Email Model
export const SocialCategoryTypes = ['Facebook', "Instagram", "Twitter", 'LinkedIN', 'Github', 'Youtube']

export interface ContactSocial{
    id?: number,
    contact: number,
    social: string,
    category: string
}