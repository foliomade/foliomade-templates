export type TemplateInput = {
  id?: string | null
  title?: string | null
  avatarBase64?: string | null
  firstName?: string | null
  lastName?: string | null
  email?: string | null
  websiteUrl?: string | null
  githubUrl?: string | null
  linkedInUrl?: string | null
  summary?: string | null
  resumeUrl?: string | null
  calendarUrl?: string | null
  roleTitle?: string | null

  experiences?: Array<{
    companyName: string
    title: string
    startDate?: string | null
    endDate?: string | null
    description?: string | null
    bullets?: string[]
    location?: string | null
    techStack?: string | null
  }>

  education?: Array<{
    school: string
    degree?: string | null
    field?: string | null
    startDate?: string | null
    endDate?: string | null
    description?: string | null
  }>

  projects?: Array<{
    name: string
    description?: string | null
    link?: string | null
    techStack?: string | null
  }>

  skills?: Array<{
    name: string
    level?: string | null
    category?: string | null
  }>

  links?: Array<{
    name: string
    url: string
  }>

  certifications?: Array<{
    name: string,
    issuingOrganization: string | null
    issueDate: string | null
    expirationDate: string | null
    credentialId: string | null
    credentialUrl: string | null
  }>

  additionalSections?: Array<{
    title: string
    category: string | null
    content: string | null
  }>

  // Chat/FAQs widget
  enableFaqs?: boolean | null
  faqs?: Array<{ question: string; answer: string }>

  // Theming
  themeColor?: string | null
}
