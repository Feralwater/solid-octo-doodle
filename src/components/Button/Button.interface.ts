export interface ButtonProps {
  size: 'large' | 'medium' | 'small'
  color: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
  icon?: 'left' | 'right'
  disabled?: boolean
  type: 'button' | 'submit' | 'reset'
  onClick: () => void
  iconUrl?: string
}
