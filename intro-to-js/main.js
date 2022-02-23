//22-FEB-2022 'Control-Flow'


//Exercise #1
// const printGroupName = (groupNo) => {
//     let groupName;
  
//     if(groupNo === 1) {
//       groupName = 'Pokki'
//     } else if (groupNo === 2) {
//       groupName = 'ปาท๋องโก๋'
//     } else if (groupNo === 3) {
//       groupName = 'ติวกระตุกจิต'
//     } else if (groupNo === 4) {
//       groupName = 'สี่ไม่ซี้'
//     } else if (groupNo === 5) {
//       groupName = 'Laugh Tale'
//     } else if (groupNo === 6) {
//       groupName = 'ซานตา'
//     } else if (groupNo === 7) {
//       groupName = 'สายลับ เจมส์บอนด์'
//     } else if (groupNo === 8) {
//       groupName = 'Infinity'
//     } else if (groupNo === 10) {
//       groupName = 'Ben Ten'
//     } else if (groupNo === 11) {
//       groupName = 'เต้าหู้'
//     } else if (groupNo === 12) {
//       groupName = 'แป้งเย็น'
//     } else {
//       groupName = 'พี่นัน'
//     }
//     console.log('Your Group Name =', groupName)
//   }

//   printGroupName(1)

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

// for(let i = 0; i < cars.length; i++) {
//   console.log("the number is " + i); 
// }

// let number = 9;
// while(number > 0) {
//   console.log('the number is ' + number);
//   number -=1
// }

// let number = 0;
// for(let i = 0; i < 20; i++) {
//   if(i % 2 == 0) {
//   console.log('the number is ',i)
//   }
// }

// x = 20

// while(x > 0) {
//     console.log(x)
//     x -= 1
// }


// let count = 0;
// for (let number =0; number < 3; number++) {
//   let star = '';
//   for(let no = 2 - number; no >= 0; no--) {
//     star+= "*"
//   }
//   console.log(star)
// }

// const queue = ['ลูกน้ำ','นนท์']

// queue[3]='น้องนัน'

// const lastItem = queue.length -1
// for(let idx=lastItem; idx >= 0;idx--) {
//   console.log(queue[idx])
// }

// const exQueue = ['ชมพู', 'นัน', 'นนท์']

// for (let index = 0; index < exQueue.Length; index++) {
//   if (exQueue[index] == "ชมพู")
//   exQueue[index] = "อีกคน";
//   console.log(exQueue)
//   return exQueue
// }

// const student = [
//   ['เต้', 'โจน', 'ปิง'],
// ['ภัค', 'ป่าน', 'เบ๊บ']
// ]

// for(let i = 0; i < student.length; i++) {
//   let finalResult = ''
//   for(let j = 0; j < student[i].length; j++) {
//     finalResult += student[i][j]
//   }
//   console.log(finalResult)
// }