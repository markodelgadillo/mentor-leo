const technologies = ['HTML', 'CSS', 'Javascript', 'MongoDB', 'NodeJS']
const jobs = [
  'Junior frontend developer - HTML5/CSS3/React',
  'Web developer intern',
  'Full stack developer - Node.js/React',
  'Senior backend developer - PHP/Node.js/mySQL',
  'iOS developer',
  'Android developer'
]

const $jobList = document.querySelector('.job-list')
$jobList.textContent = 'TEST'

const $labels = document.querySelector('.labels')

function label(tech) {
  tech.map(name => {
    console.log(name)
    let $label = document.createElement('div')
    $label.setAttribute('id', name.toLowerCase())
    $label.setAttribute('class', 'label')
    $label.textContent = name
    $labels.appendChild($label)
  })
  return $labels
}

label(technologies)
