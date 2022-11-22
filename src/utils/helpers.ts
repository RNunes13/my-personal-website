/**
 * Get a RGB color from the hexadecimal.
 * @param {string} hex Hex value in the format `#181923`.
 * @public
 */
export const getRgbFromHex = (hex = '') => {
  const hexCode = hex.replace('#', '')

  if (hexCode.length !== 6) {
    throw Error('Only six-digit hex colors are allowed.')
  }

  const rgbHex = hexCode.match(/.{1,2}/g) as RegExpMatchArray

  return [
    parseInt(rgbHex[0], 16),
    parseInt(rgbHex[1], 16),
    parseInt(rgbHex[2], 16),
  ]
}
