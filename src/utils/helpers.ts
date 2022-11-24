/**
 * Get a RGB color from the hexadecimal.
 * @param {string} hex Hex value in the format `#181923`.
 * @public
 */
export const getRgbFromHex = (hex = '') => {
  const hexCode = hex.replace('#', '')

  if (hexCode.length !== 6) return hex

  const rgbHex = hexCode.match(/.{1,2}/g) as RegExpMatchArray

  return [
    parseInt(rgbHex[0], 16),
    parseInt(rgbHex[1], 16),
    parseInt(rgbHex[2], 16),
  ]
}

/**
 * Get lighten or darken color a given Hex color.
 * @param {string} hex Hex value in the format `#181923`.
 * @param {number} magnitude Value which represents the magnitude by which hex should be lightened or darkened
 * @public
 */
export const newShade = (hex: string, magnitude: number) => {
  const hexColor = hex.replace('#', '')

  if (hexColor.length !== 6) return hex

  const decimalColor = parseInt(hexColor, 16)

  let r = (decimalColor >> 16) + magnitude

  if (r > 255) r = 255
  if (r < 0) r = 0

  let g = (decimalColor & 0x0000ff) + magnitude

  if (g > 255) g = 255
  if (g < 0) g = 0

  let b = ((decimalColor >> 8) & 0x00ff) + magnitude

  if (b > 255) b = 255
  if (b < 0) b = 0

  return `#${(g | (b << 8) | (r << 16)).toString(16)}`
}
