const technologies = ['HTML', 'CSS', 'Javascript', 'MongoDB', 'Node JS']
const labels = document.querySelector('.labels')

function label(tech) {
  console.log(tech)
  tech.map(name => {
    console.log(name)
    let label = document.createElement('div')
    label.setAttribute('id', name)
    label.textContent = name
    labels.appendChild(label)
  })
  return labels
}

label(technologies)