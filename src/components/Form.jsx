import { useState, useEffect, useContext } from 'react'
import { SettingsContext } from '../context/settings.jsx'
import TypingTextEffect from './TypingTextEffect.jsx'
import '../styles/Form.css'

const InputField = ({
  id,
  type,
  value,
  onChange,
  label,
  error,
  required = true,
}) => {
  return (
    <fieldset>
      <label htmlFor={id}>
        <TypingTextEffect order={1}>{label}</TypingTextEffect>
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required={required}
        aria-required={required}
        aria-invalid={error ? 'true' : 'false'}
      />
      {error && <span className='error_alert'>{error}</span>}
    </fieldset>
  )
}

const Form = () => {
  const { language, getTranslation } = useContext(SettingsContext)
  const initialFormData = {
    name: '',
    birthdate: '',
    city: '',
    email: '',
    phone: '',
  }
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [isButtonEnabled, setIsButtonEnabled] = useState(false)

  useEffect(() => {
    const allFieldsFilled = Object.values(formData).every(
      (value) => value.trim() !== '',
    )
    setIsButtonEnabled(allFieldsFilled)

    return () => {
      setIsButtonEnabled(false)
    }
  }, [formData, errors, language])

  const validateField = (name, value) => {
    let error = ''
    switch (name) {
      case 'name':
        if (!value.match(/^[a-zA-Z\s]+$/)) error = 'error_name'
        break
      case 'email':
        if (!value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/))
          error = 'error_email'
        break
      case 'birthdate':
        if (!value) error = 'error_birthdate'
        break
      case 'city':
        if (!value.match(/^[a-zA-Z\s]+$/)) error = 'error_city'
        break
      case 'phone':
        if (!value.match(/^\d{9}$/)) error = 'error_phone'
        break
      default:
        break
    }
    return error
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    if (errors[name] != '') {
      setErrors({
        ...errors,
        [name]: '',
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = {}

    Object.keys(formData).forEach((name) => {
      const error = validateField(name, formData[name])
      if (error) {
        validationErrors[name] = error
      }
    })

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setIsButtonEnabled(false)
    } else {
      setErrors({})
      alert(`Form submitted successfully: ${JSON.stringify(formData)}`)
      setFormData(initialFormData)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        id='name'
        type='text'
        value={formData.name}
        onChange={handleChange}
        label={getTranslation('name')}
        error={getTranslation(errors.name)}
      />
      <InputField
        id='email'
        type='email'
        value={formData.email}
        onChange={handleChange}
        label={getTranslation('email')}
        error={getTranslation(errors.email)}
      />
      <InputField
        id='birthdate'
        type='date'
        value={formData.birthdate}
        onChange={handleChange}
        label={getTranslation('birthdate')}
        error={getTranslation(errors.birthdate)}
      />
      <InputField
        id='city'
        type='text'
        value={formData.city}
        onChange={handleChange}
        label={getTranslation('city')}
        error={getTranslation(errors.city)}
      />
      <InputField
        id='phone'
        type='tel'
        value={formData.phone}
        onChange={handleChange}
        label={getTranslation('phone')}
        error={getTranslation(errors.phone)}
      />
      <button type='submit' disabled={!isButtonEnabled}>
        <TypingTextEffect>{getTranslation('send')}</TypingTextEffect>
      </button>
    </form>
  )
}

export default Form
