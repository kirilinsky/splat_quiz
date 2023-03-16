import { useState } from 'react'
import styles from './style.module.css'

const ScrollToTop = () => {
  const [scrollButton, setScrollButton] = useState(false)

  window.onscroll = function () {
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      setScrollButton(true)
    } else {
      setScrollButton(false)
    }
  }

  if (scrollButton) {
    return (
      <div
        className={styles.scroll}
        onClick={() => {
          setScrollButton(window.scrollTo(0, 0))
        }}
      ></div>
    )
  }
  return null
}

export default ScrollToTop
