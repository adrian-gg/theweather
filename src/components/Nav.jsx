import React, { useContext } from 'react'
import { SettingsContext } from '../context/settings'
import { IoMdMenu, IoMdClose } from 'react-icons/io'
import '../styles/Nav.css'

const Nav = ({ openMenu, setOpenMenu }) => {
  const { language, languages, setLanguage } = useContext(SettingsContext)

  const handleClickToggleMenu = () => {
    window.scrollTo(0, 0)
    setOpenMenu((prevState) => !prevState)
  }

  return (
    <>
      <nav className='menu'>
        <div className='menu__button-open'>
          <button onClick={handleClickToggleMenu}>
            {openMenu ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
        <ul className='language_menu__list'>
          {languages.map(({ name, lang }, i) => {
            return (
              <React.Fragment key={lang}>
                <li
                  key={name + i}
                  className={
                    language == lang
                      ? 'language_menu__item language_menu__item--selected'
                      : 'language_menu__item'
                  }
                  onClick={() => setLanguage(lang)}
                >
                  <button>{name}</button>
                </li>
                {languages.length - 1 != i ? (
                  <span className='language_menu__line'></span>
                ) : (
                  <></>
                )}
              </React.Fragment>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default Nav
