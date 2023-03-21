// Email Model
export const SocialCategoryTypes = ['Facebook', "Instagram", "Twitter", 'LinkedIN', 'Github', 'Youtube']

export interface ContactSocial{
    contact: number,
    social: string,
    category: string
}