const D = new Date()

const [month, day] = [D.getMonth() + 1, D.getDay() + 1]

let message

if (month !== 12) {
  message = "Nope."
} else if (day === 2) {
  message = "Almost!"
} else if (day >= 3 || day <= 5) {
  message = "YES!!!!!!!!!!!"
}

document.body.innerHTML += `<h1>${message}</h1>`