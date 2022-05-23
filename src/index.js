import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Button = ({ type, text }) => {
  switch (type.toLowerCase()) {
    case 'primary':
      return <button className={styles.primary}>{text}</button>
      break
    case 'default':
      return <button className={styles.default}>{text}</button>
      break
    case 'dashed':
      return <button className={styles.dashed}>{text}</button>
      break
    case 'text':
      return <button className={styles.text}>{text}</button>
      break
    case 'link':
      return <button className={styles.link}>{text}</button>
      break
    default:
      return <button className={styles.default}>{text}</button>
  }
}

Button.defaultProps = {
  type: "default",
  text: "Click"
}
Button.PropTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}
