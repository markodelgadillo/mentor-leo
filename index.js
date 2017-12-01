const technologies = ['HTML', 'CSS', 'Javascript', 'MongoDB', 'NodeJS']
const jobs = [
  'Junior frontend developer - HTML5/CSS3/React',
  'Web developer intern',
  'Full stack developer - Node.js/React',
  'Senior backend developer - PHP/Node.js/mySQL',
  'iOS developer',
  'Android developer'
]

function jobList(jobs) {
  const $jobList = document.querySelector('.job-list')
  $list = document.createElement('ul')
  $list.setAttribute('class', 'job')
  $jobList.appendChild($list)
  jobs.map(job => {
    $job = document.createElement('li')
    $job.textContent = job
    $list.appendChild($job)
  })
  return $list
}

const $labels = document.querySelector('.labels')

function label(tech) {
  tech.map(name => {
    const $label = document.createElement('div')
    $label.setAttribute('id', name.toLowerCase())
    $label.setAttribute('class', 'label')
    $label.textContent = name
    $labels.appendChild($label)
  })
  jobList(jobs)
  return $labels
}

label(technologies)
