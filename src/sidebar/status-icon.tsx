import styled, { keyframes } from 'styled-components/macro'
import { Status } from './lista'
import * as I from '../ui/assets'

export type StatusIconProps = {
  status: Status
  className?: string
}

export function StatusIcon ({ status = 'editing', className }: StatusIconProps) {
  const Comp = {
    saving: Loading,
    saved: I.Check,
    editing: Edit,
  }[status]

  return <Comp className={className} />
}

const Edit = styled(I.Ellipse)`
  margin-right: 2px;
`

const rotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`

const Loading = styled(I.Loading)`
  animation: ${rotation} 1s infinite linear;
`
