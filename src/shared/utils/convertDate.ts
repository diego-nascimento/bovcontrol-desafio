import { format } from 'date-fns'

interface convertDate {
  dateAsString: string
}

export const convertDate = ({dateAsString}:convertDate) => {
  return format(new Date(dateAsString), 'dd/MM/yyyy')
}