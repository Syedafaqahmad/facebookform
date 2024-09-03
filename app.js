function Facebook(firsName,lastName,mobileNumberOREmailAddress,newPassword,birthDay,gender,){
    this.Name =firsName,
    this.lastName=lastName,
    this.mobile=mobileNumberOREmailAddress,
    this.new=newPassword,
    this.birthDay=birthDay,
    this.gender=gender
}

let Name = document.getElementById('firstname')
let lastName = document.getElementById('lastname')
let email = document.getElementById('email')
let New = document.getElementById('password')
let birthDay = document.getElementById('birthdate')
let gender = document.getElementsByName('gender')
let btn = document.getElementById('btn')

let name = []
btn.onclick = face 
function face() {
    // let name = [] 
    let facebook =new Facebook()
    let.fname = firstname.value
    let.lastName = lastname.value
    let.mobile = email.value
    let.new = Password.value 
    let.birthDay = birthDay.value
    
    gender.forEach(element => {
        if(element.checked) {
            facebook.GENDER = checked.value
        }
    })
    console.log('facebook')
}