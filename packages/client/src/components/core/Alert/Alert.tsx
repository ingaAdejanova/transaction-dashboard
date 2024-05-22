import { Alert as MuiAlert } from '@mui/material'

type Props = {
  children: React.ReactNode
  severity: 'success' | 'info' | 'warning' | 'error'
}

export const Alert = ({ children, severity }: Props) => <MuiAlert severity={severity}>{children}</MuiAlert>
