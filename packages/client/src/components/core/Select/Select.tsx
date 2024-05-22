import { Select as MuiSelect, MenuItem, FormControl, InputLabel } from '@mui/material'

type Props = {
  value: any
  id: string
  onChange?: (value: any) => void
  className?: string
  label?: string
  options: { [key: string]: string }[]
}

export const Select = ({ id, value, label, onChange, className, options }: Props) => (
  <FormControl className={className} fullWidth>
    <InputLabel id={id}>{label}</InputLabel>
    <MuiSelect labelId={id} value={value} label={label} onChange={onChange}>
      {options.map((item, index) => (
        <MenuItem key={index} value={item.value}>
          {item.title}
        </MenuItem>
      ))}
    </MuiSelect>
  </FormControl>
)
