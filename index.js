const btn = document.getElementById("btn")
const inputs = document.querySelectorAll("input")
const input1 = document.querySelector(".input1")
const input2 = document.querySelector(".input2")
const input3 = document.querySelector(".input3")
const input4 = document.querySelector(".input4")
const input5 = document.querySelector(".input5")
const errorText = document.querySelector(".error")


btn.addEventListener('click', (e) => {
  e.preventDefault()

  validate()
})

const validate = () => {
  inputs.forEach(input => {
    console.log(input.value)
  })

  const email = input3.value

  const isEmailValid = (email) => {
    const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regExp.test(email)
  }

  if (input4.value !== input5.value) {
    errorText.style.display = "block"
    errorText.innerText = "Both password input value must be equal"
  } else if (input1.value == "" || input2.value == "" || input3.value == "" || input4.value == "" || input5.value == "") {
    errorText.style.display = "block"
    errorText.innerText = "Please input a value in the empty input field(s)"
  } else if (!isEmailValid(email)) {
    errorText.style.display = "block"
    errorText.innerText = "This is an invalid email address"
  } else {
    errorText.style.display = "none"
  }
}