import { ColorPercentage } from 'common/interfaces/color.interface'

export const color: (colorPercentage: ColorPercentage[], percentage: number) => string = (colorPercentage, percentage) => {
  const pct = percentage / 100

  let i = 1

  while (i < colorPercentage.length - 1) {
    if (pct < colorPercentage[i].percentage) {
      break
    }
    i += 1
  }

  const lower = colorPercentage[i - 1]
  const upper = colorPercentage[i]
  const range = upper.percentage - lower.percentage
  const rangePct = (pct - lower.percentage) / range
  const pctLower = 1 - rangePct
  const pctUpper = rangePct
  const newColor = {
    r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
    g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
    b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper),
  }
  return `rgb(${[newColor.r, newColor.g, newColor.b].join(',')})`
}
