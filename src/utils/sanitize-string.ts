export const sanitizeString = (input?: string): string => {
  if (!input) return ''

  return input
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '')
    .replace(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~]+/g, '')
    .toLowerCase()
}
