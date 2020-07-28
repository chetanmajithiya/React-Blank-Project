import React from 'react'
import reactLogo from '../logo.svg'

export const HomeSection = () => {
  const externalLink = 'https://reactjs.org'
  return (
    <header className='App-header'>
      <img src={reactLogo} className='App-logo' alt='logo' />
      <p>
                Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className='App-link'
        href={externalLink}
        target='_blank'
        rel='noopener noreferrer'
      >
                Learn React
      </a>
    </header>
  )
}
