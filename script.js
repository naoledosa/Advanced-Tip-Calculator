//get elements bi id
const billTotalInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotal = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {
  let bill = Number(billTotalInput.value)
  let tip =  Number(tipInput.value) / 100
  let tipAmount = bill * tip
  let total = 0
  total = (bill + tipAmount) / numberOfPeople
  perPersonTotal.innerText = `$${total.toFixed(2)}`
  //toFixed method limits the decimal places to a given number
  //.toLocaleString('en-US') is to add comma to numbers
}

const increasePeople = () => {
  numberOfPeopleDiv.innerText = numberOfPeople += 1
  calculateBill()
}

const decreasePeople = () => {
  if(numberOfPeopleDiv.innerText > 1){
    numberOfPeopleDiv.innerText = numberOfPeople -= 1
    calculateBill()
  }
}


