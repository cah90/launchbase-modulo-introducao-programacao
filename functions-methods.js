const classA = [{
    name: 'Cassia',
    grade: 9
  },

  {
    name: 'Stefaninhu',
    grade: 2
  },

  {
    name: 'Erica',
    grade: 10
  },

  {
    name: 'Cristina',
    grade: 8
  }
]

const classB = [{
    name: 'Lilica',
    grade: 4
  },

  {
    name: 'Crioulo',
    grade: 3
  },

  {
    name: 'Chico',
    grade: 0
  }
]

function calculateAverage(students) {
  let sum = 0
  for (let i = 0; i < students.length; i++) {
    sum += students[i].grade
  }
  const average = (sum / students.length).toFixed(1);
  return average
} 

function sendMessage(average, turma) {
  if (average> 5) {
    console.log(`${turma} average: ${average}. Congratulations.`)
  } else {
    console.log(`${turma} average: ${average}. It is not good enough.`)
  }
}

function markAsFlunked(student){
  student.flunked = false

    if(student.grade < 5) {
      student.flunked = true
    }
}

function sendMessageflunked(student){
  if(student.flunked) {
    console.log(`${student.name} is flunked.`)
  }
}

function studentsflunkeds(students){
  for(let student of students) {
    markAsFlunked(student)
    sendMessageflunked(student)
  }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

studentsflunkeds(classA)
studentsflunkeds(classB)
