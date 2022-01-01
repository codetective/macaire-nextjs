const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  if (!values.notes) {
    errors.notes = 'Required'
  }
  if (!values.email) {
    errors.notes = 'Required'
  }
  if (!values.phone) {
    errors.notes = 'Required'
  }
  return errors
}
export default validate
