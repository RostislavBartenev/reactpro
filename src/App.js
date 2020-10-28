import React from 'react'
import cn from 'classnames'

import './custom.css'
import style from './App.modules.scss'

const App = () => {
  return (
    <div className={cn(style.header, 'color')}>
      Yes, we did it. This is App Component
    </div>
  )
}

export default App
