const D = new Date()

const [month, day] = [D.getMonth() + 1, D.getDay() + 1]

let message = "Nope"

if (month === 12) {
  if (day === 2) message = "Almost!"
  if (day >= 3 && day <= 5) message = "YES!!!!!!!!"
}

document.body.innerHTML += `<h1>${message}</h1>`
