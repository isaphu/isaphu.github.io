/* //22-FEB-2022 'Control-Flow'


//Exercise #1
const printGroupName = (groupNo) => {
    let groupName;
  
    if(groupNo === 1) {
      groupName = 'Pokki'
    } else if (groupNo === 2) {
      groupName = 'ปาท๋องโก๋'
    } else if (groupNo === 3) {
      groupName = 'ติวกระตุกจิต'
    } else if (groupNo === 4) {
      groupName = 'สี่ไม่ซี้'
    } else if (groupNo === 5) {
      groupName = 'Laugh Tale'
    } else if (groupNo === 6) {
      groupName = 'ซานตา'
    } else if (groupNo === 7) {
      groupName = 'สายลับ เจมส์บอนด์'
    } else if (groupNo === 8) {
      groupName = 'Infinity'
    } else if (groupNo === 10) {
      groupName = 'Ben Ten'
    } else if (groupNo === 11) {
      groupName = 'เต้าหู้'
    } else if (groupNo === 12) {
      groupName = 'แป้งเย็น'
    } else {
      groupName = 'พี่นัน'
    }
    console.log('Your Group Name =', groupName)
  }

  printGroupName(1)

// Exercise #1
//part 1
function businessHours(dayNumber, hourNumber) {

  if((dayNumber >= 1 && dayNumber <= 5) && (hourNumber >= 9 && hourNumber <= 18)) {
    return true
  } else {
    return false
  }
}

console.log(businessHours(1,10))
console.log(businessHours(5,19))
console.log(businessHours(6,13))
console.log(businessHours(7,9))

//part 2
function getDayNumber(janFirstDayNumber, yearDayNumber) {

  if(yearDayNumber % 7 === 0) {
    return janFirstDayNumber;
  } else {
    return (yearDayNumber + janFirstDayNumber - 7) % 7
  }
}

console.log(getDayNumber(6,0))
console.log(getDayNumber(6,1))
console.log(getDayNumber(6,9))
console.log(getDayNumber(6,364))

//part 3
function isBusinessHoursByYearDay(janFirstDayNumber, yearDayNumber,hourNumber) {
  const dayNumber = getDayNumber(janFirstDayNumber, yearDayNumber)
  return businessHours(dayNumber, hourNumber)
}

console.log(isBusinessHoursByYearDay(6,0,19))
console.log(isBusinessHoursByYearDay(6,4,9))
console.log(isBusinessHoursByYearDay(6,0,19))


//23-Feb-2022 Array and loop

//in-class exercise 

cars = [0,1,2,3,4,5,6,7,8,9]

for(let i = 0; i < cars.length; i++) {
  console.log("the number is " + i); 
}

let number = 9;
while(number > 0) {
  console.log('the number is ' + number);
  number -=1
}

// let number = 0;
for(let i = 0; i < 20; i++) {
  if(i % 2 == 0) {
  console.log('the number is ',i)
  }
}

x = 20

while(x > 0) {
    console.log(x)
    x -= 1
}


let count = 0;
for (let number =0; number < 3; number++) {
  let star = '';
  for(let no = 2 - number; no >= 0; no--) {
    star+= "*"
  }
  console.log(star)
}

const queue = ['ลูกน้ำ','นนท์']

queue[3]='น้องนัน'

const lastItem = queue.length -1
for(let idx=lastItem; idx >= 0;idx--) {
  console.log(queue[idx])
}

const exQueue = ['ชมพู', 'นัน', 'นนท์']

for (let index = 0; index < exQueue.Length; index++) {
  if (exQueue[index] == "ชมพู")
  exQueue[index] = "อีกคน";
  console.log(exQueue)
  return exQueue
}

const student = [
  ['เต้', 'โจน', 'ปิง'],
['ภัค', 'ป่าน', 'เบ๊บ']
]

for(let i = 0; i < student.length; i++) {
  let finalResult = ''
  for(let j = 0; j < student[i].length; j++) {
    finalResult += student[i][j]
  }
  console.log(finalResult)
}

//24-Feb-2022 

//Exercise #1
console.log('Exercise #1:')
//Part 1

console.log('Part 1:')
const customerName = ['Sofia','David','Juan']
console.log(customerName)

//Part 2
console.log('Part 2:')
customerName.push('Sara','Augustin')
console.log(customerName)

//Part 3
console.log('Part 3:')
customerName.splice(2,0,'Renata')
customerName.push('Elena')
console.log(customerName)

//Exercise #2
console.log('Exercise #2:')

for(let i = 0; i < 6; i++) {
  let star = '';
 for(let j = 0; j >= 1-i; j--) {
    star +=' *'
  }
  console.log(star)
}

//Exercise #3
console.log('Exercise #3:')

//3.1
console.log('3.1:')

const decreasingXValue = (xValue) => {
    while (xValue > 0) {
        console.log(xValue -= 0.5)
    }
}

decreasingXValue(2)

//3.2
console.log('3.2:')

for (let i = 2; i < 100; i += 2) {
  console.log(i)
}

//3.3
console.log('3.3:')

const printNBrackets = (n) => {
let result = ''
for (let i = 1; i <= n; i++) {
  result += `[${i}]`
  } 
  return result
}
console.log(printNBrackets(6))

//3.4
console.log('3.4:')

const sumPositive = (n) => {
  let sum = 0;
  for(let i = 1; i <= n; i++) {
    sum += i
  }
  return sum
}
console.log(sumPositive(19))

//24-FEB-2020

//Exercise 1
console.log('Exercise 1:')

//Part 1 
console.log('Part 1:')

const intersaction = (array1,array2) => {
  const newArray = array1.filter(i => array2.includes(i));
  return newArray
}

console.log(intersaction(['nun', 'ink', 'oat'], ['nun', 'tim']))

//Part 2
console.log('Part 2:')

const getWordLength = (wordArray) => {
  return wordArray.map(i => i.length)
}

console.log(getWordLength(['nun', 'inkna', 'oatkrub']))

//Exercise 2
console.log('Exercise 2')

function numberRange(n) {
  if (n < 0) {
    console.log(`${n} is less than 0`)
  } else if (n <= 25) {
    console.log(`${n} is between 0 and 25`)
  } else if (n <= 100) {
    console.log(`${n} is between 26 and 100`)
  } else if (n > 100) {
    console.log(`${n} is greater than 100`)
  }
}

numberRange(25);   
numberRange(75);   
numberRange(125);  
numberRange(-25);

//25-FEB-2022 

const starMaker = () => {
  for(let i = 0; i < 6; i++) {
    let pyramid = '';
    for(let j = 0; j >= 1-i; j--) {
      pyramid +=' *'
    }
    console.log(pyramid)
  }
}

starMaker()

//02-MAR-2022 Async Await

const orderNoodle = new Promise((teSaiCharm, teting) => {
  setTimeout(() => {
    teSaiCharm('เล็กไม่ผัก')
  }, 20000);
});

const nhomBuang = new Promise((eat, teting) => {
  setTimeout(() => {
    eat('ขนมเบื้อง')
  }, 5000)
})

const buyMilkTea = new Promise((drink, teting) => {
  setTimeout(() => {
    drink('ชาเขียวหวาน้อย')
  }, 5000)
})

*/
//class

class Person {
  constructor(name,gender,power) {
    this.name = name;
    this.gender = gender;
    this.power = power;
  }

  run(hour) {
    return this.power -= 20 * hour

  }

  study(hour) {
    return this.power -= 5 * hour
  }

  sleep(hour) {
    return this.power -= 2 *  hour
  }

  eat(powerScore) {
    return this.power += powerScore

  }
}

const isaRoutine = new Person('isa', 'male', 100);
console.log('isaRoutine', isaRoutine)
console.log(`Isa has ${isaRoutine.run(2)} hours left of power after run`)
console.log(`Isa has ${isaRoutine.study(3)} hours left of power after study`)
console.log(`Isa has ${isaRoutine.sleep(3)} hours left of power after sleep`)
console.log(`Isa is likely to be awake for another ${isaRoutine.eat(2)} hours`)

class Employee extends Person {
  constructor(name, gender, power, job, salary) {
    super(name, gender, power);
    this.job = job;
    this.salary = salary
    this.inventory = [];
  }

  printJob() {
    console.log(this.job)
  }

  doingWork(hour) {
    return this.power -= 5 * hour
  }

  shopping(productName, price) {
    this.inventory.push(productName);
    this.salary -= price;
  }
}

const harryAtWork = new Employee('Harry','male',100,'SE',50000)
console.log('harryAtWork',harryAtWork)
console.log(harryAtWork.printJob())
console.log(harryAtWork.doingWork(8))
console.log(harryAtWork.shopping('bag', 20))
console.log(harryAtWork.inventory)
