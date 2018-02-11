import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import * as customPropTypes from '../lib/customPropTypes';
import { TYPES } from '../lib/META';
import { useKeyOnly } from "../lib/classNameBuilders";
import * as childrenUtils from '../lib/childrenUtils';
import getElementType from '../lib/getElementType';
import {getUnhandledProps} from '../lib/getUnhandledProps';

/**
 * A pushable sub-component for Sidebar.
 */
function SidebarPusher(props) {
  const { className, dimmed, children, content } = props

  const classes = cx(
    'pusher',
    useKeyOnly(dimmed, 'dimmed'),
    className,
  )
  const rest = getUnhandledProps(SidebarPusher, props)
  const ElementType = getElementType(SidebarPusher, props)

  return (
    <ElementType {...rest} className={classes}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
}

SidebarPusher._meta = {
  name: 'SidebarPusher',
  type: TYPES.MODULE,
  parent: 'Sidebar',
}

SidebarPusher.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,

  /** Controls whether or not the dim is displayed. */
  dimmed: PropTypes.bool,
}

export default SidebarPusher
