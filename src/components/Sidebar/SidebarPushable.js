import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import * as customPropTypes from '../lib/customPropTypes';
import { TYPES } from '../lib/META';
import * as childrenUtils from '../lib/childrenUtils';
import getElementType from '../lib/getElementType';
import {getUnhandledProps}  from '../lib/getUnhandledProps';

/**
 * A pushable sub-component for Sidebar.
 */
function SidebarPushable(props) {
  const { className, children, content } = props
  const classes = cx('pushable', className)
  const rest = getUnhandledProps(SidebarPushable, props)
  const ElementType = getElementType(SidebarPushable, props)

  return (
    <ElementType {...rest} className={classes}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
}

SidebarPushable._meta = {
  name: 'SidebarPushable',
  type: TYPES.MODULE,
  parent: 'Sidebar',
}

SidebarPushable.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

export default SidebarPushable
