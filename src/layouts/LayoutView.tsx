import React, {ComponentType, ReactNode} from 'react'
import {Outlet} from 'react-router-dom'

interface LayoutComponentProps {
  children: ReactNode;
}

interface LayoutViewProps {
  Component: ComponentType<LayoutComponentProps>;
}

const LayoutView = ({Component}: LayoutViewProps) => {
  return (
    <Component>
      <Outlet />
    </Component>
  )
}

export default LayoutView
