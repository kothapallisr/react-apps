const user = {
  a: 'one',
  b: 'two',
  a: 'three'
}

console.log(user)

// create a function multiplyByTwo(obj) that multiplies all numeric property values of nums by 2  
let nums = {
  a: 100,
  b: 400,
  title: 'my nums'
}

function multiplyByTwo(obj) {
  for( key in obj) {
    if(typeof obj[key] === "number") {
      obj[key] = obj[key] *2
    }
  }
}
multiplyByTwo(nums)
console.log(nums)