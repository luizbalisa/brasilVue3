export function validateEmptyAndLength3(value) {
  if (!value) {
    return '*Este campo é obrigatorio'
  }

  if (value.length < 3) {
    return '*Este precisa de no mínimo 3 caracteres'
  }

  return true
}

export function validateEmptyAndEmail(value) {
  if (!value) {
    return '*Este campo é obrigatorio'
  }
const isValid =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i.test(value)
  if (!isValid) {
    return '*Este campo precisa ser um email'
  }

  return true
}