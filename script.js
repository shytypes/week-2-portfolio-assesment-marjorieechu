let form = document.querySelector('form')

const handleFormSubmit = (e) => {
  let firstName = document.querySelector('#firstName').value
  let lastName = document.querySelector('#lastName').value
  let email = document.querySelector('#email').value
  let topic = document.querySelector('#topic').value
  let resultView = document.querySelector('#result-view')

  e.preventDefault()
  const userData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    topic: topic,
  }

  const userDataAsJson = JSON.stringify(userData)

  console.log(userData)
  console.log(
    '================================================================='
  )
  console.log(userDataAsJson)

  resultView.innerHTML = `<p id="response">Thank you ${userData.firstName} for reaching out, I will contact you asap on ${userData.topic}.<p>`
}
form.addEventListener('submit', handleFormSubmit)
