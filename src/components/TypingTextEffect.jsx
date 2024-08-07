import { useState, useEffect, useContext } from 'react'
import { SettingsContext } from '../context/settings'
import '../styles/TypingTextEffect.css'

const TypingTextEffect = ({
  children,
  delay = 0,
  order = 0,
  multiline = false,
  alignText = 'l',
}) => {
  const { language, isAnimationEnabled } = useContext(SettingsContext)
  const [reloadEffect, setReloadEffect] = useState(false)
  const [globalTime] = useState(300) //0.3s
  const [globalDelay] = useState(500) //0.5s
  const timeLetter = 40 //125

  useEffect(() => {
    if (children && isAnimationEnabled) {
      setTimeout(() => setReloadEffect(true), 80)
    }

    return () => {
      setReloadEffect(false)
    }
  }, [children, language, isAnimationEnabled])

  if (!children || !isAnimationEnabled) return children

  if (multiline) {
    const words = children.split(' ')
    const line = words.map((word, index) => {
      const wordLength = word.length + 1
      const timeWord =
        globalTime != 0 ? globalTime / 1000 : (timeLetter * wordLength) / 1000
      const delayPreviousWords = words.reduce((acc, w, i) => {
        if (i < index) return (acc += w.length + 1)
        return acc
      }, 0)
      //prettier-ignore
      const delayWord =
        ((globalDelay * order + delay) + (timeLetter * delayPreviousWords)) / 1000

      const StyleScrambleTextAnimation = {
        width: `${wordLength}ch`,
        animation: `typing ${timeWord}s steps(${wordLength}) ${delayWord}s backwards`,
      }

      return (
        <span
          key={children + index}
          className='scrabletext'
          style={{
            width: `${word.length}ch`,
            margin: alignText == 'r' ? '0 0 0 1ch' : '0 1ch 0 0',
          }}
        >
          <span
            className='scrabletext__text'
            style={reloadEffect ? StyleScrambleTextAnimation : {}}
          >
            {word}
          </span>
        </span>
      )
    })

    return line
  } else {
    const wordLength = children.toString().split('').length
    const StyleScrambleTextAnimation = {
      width: `${wordLength}ch`,
      animation: `typing ${
        globalTime != 0 ? globalTime / 1000 : (timeLetter * wordLength) / 1000
      }s steps(${wordLength}) ${
        (globalDelay * order + delay) / 1000
      }s backwards`,
    }

    return (
      <>
        <span className='scrabletext' style={{ width: `${wordLength}ch` }}>
          <span
            className='scrabletext__text'
            style={reloadEffect ? StyleScrambleTextAnimation : {}}
          >
            {children}
          </span>
        </span>
      </>
    )
  }
}

export default TypingTextEffect
