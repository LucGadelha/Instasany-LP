import React from 'react'
import { twMerge } from 'tailwind-merge'

interface GridContainerProps{
    children: React.ReactNode
    className?: string
}

const GridContainer = ({children, className}:GridContainerProps) => {
  const defaultClass="w-full max-w-grid mx-auto px-3"
  const combinedClasses = twMerge(defaultClass, className)  
  return (
    <div className={combinedClasses}>
      {children}
    </div>
  )
}

export default GridContainer
