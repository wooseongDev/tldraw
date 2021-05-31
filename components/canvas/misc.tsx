import styled from 'styles'

export const DotCircle = styled('circle', {
  transform: 'scale(var(--scale))',
  fill: '$canvas',
  stroke: '$text',
  strokeWidth: '2',
})

export const ThinLine = styled('line', {
  zStrokeWidth: 1,
})
