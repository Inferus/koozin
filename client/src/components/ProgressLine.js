import React from 'react'
import { useSelector } from 'react-redux'

export const ProgressLine = () => {


const progressLine = useSelector(state => state.global.lineClass)
  return (
    <div className={progressLine}></div>
  )
}
