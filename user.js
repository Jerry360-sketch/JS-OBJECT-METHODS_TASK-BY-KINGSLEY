let personalInfo = {
    name: 'jerry',
    address: 'odus',
    dob : 'may',
    age : 23
}

let contactInfo = {
    school: 'unijos',
    dept: 'QS',
    stateOfOrigin: 'Benue',
}

let finalResult = Object.assign(personalInfo , contactInfo)
console.log(finalResult)