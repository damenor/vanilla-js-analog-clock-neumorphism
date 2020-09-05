const deg = 6

const body = document.body
const hr = document.querySelector('#hr')
const mn = document.querySelector('#mn')
const sc = document.querySelector('#sc')
const toggle = document.querySelector('.toggle')

toggle.addEventListener('click', () => body.classList.toggle('light'))

setInterval(() => {

  const day = new Date()
  const hh = day.getHours() * 30
  const mm = day.getMinutes() * deg
  const ss = day.getSeconds() * deg

  hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`
  mn.style.transform = `rotateZ(${mm}deg)`
  sc.style.transform = `rotateZ(${ss}deg)`

})
