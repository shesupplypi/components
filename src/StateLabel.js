import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import Octicon, {GitMerge, IssueClosed, IssueOpened, IssueReopened} from '@github/octicons-react'
import {colors} from './theme'

const stateColorMap = {
  open: 'green',
  opened: 'green',
  reopened: 'green',
  closed: 'red',
  merged: 'purple'
}

const stateOcticonMap = {
  open: IssueOpened,
  opened: IssueOpened,
  reopened: IssueReopened,
  closed: IssueClosed,
  merged: GitMerge
}

function getOcticon(state) {
  if (!state) {
    return null
  }
  return <Octicon icon={stateOcticonMap[state]} />
}

const getIconComponent = (icon, children) => {
  if (icon && children) {
    return <span className="mr-1">{icon}</span>
  } else if (icon) {
    return <span className="d-flex m-1">{icon}</span>
  }
  return null
}

const StateLabel = ({state, scheme, small, icon, children}) => {
  if (icon !== false) {
    icon = icon || getOcticon(state)
  }

  const color = scheme || stateColorMap[state]
  const styleProps = {}
  if (color === 'yellow') {
    styleProps.style = {backgroundColor: colors.yellow[7]}
  }
  const iconComponent = getIconComponent(icon, children)
  return (
    <span
      className={classnames(
        'State',
        {
          'State--small': small
        },
        color && color !== 'yellow' ? `State--${color}` : null
      )}
      {...styleProps}
    >
      {iconComponent}
      {children}
    </span>
  )
}

StateLabel.propTypes = {
  state: PropTypes.oneOf(Object.keys(stateOcticonMap)),
  scheme: PropTypes.string,
  small: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.node, PropTypes.bool])
}

export default StateLabel