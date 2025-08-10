import { defaultIcon, iconsMap } from '../utils/iconsMap'

export function Icon({ name, ...props }) {
  const Icon = iconsMap[name] || defaultIcon
  return <Icon {...props} />
}
