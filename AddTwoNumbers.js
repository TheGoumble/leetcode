var addTwoNumbers = function (l1, l2) {
  //this solution uses nodes which i still need a better understanding
  let sum = 0
  let current = new ListNode(0)
  let result = current

  //while loop to check on if list is true
  while (l1 || l2) {
    //conditions on 
    if (l1) {
      sum += l1.val
      l1 = l1.next
    }
    if (l2) {
      sum += l2.val
      l2 = l2.next
    }
    current.next = new ListNode(sum % 10)
    current = current.next
    sum = sum > 9 ? 1 : 0
  }
  if (sum) {
    current.next = new ListNode(sum)
  }
  return result.next
}


//my way of doing it
var addTwoNumbers = function (l1, l2) {
  let l1Re = l1.reverse().join("")
  let l2Re = l2.reverse().join("")

  let sum = parseInt(l2Re) + parseInt(l1Re)
  sumArr = sum.toString().split("").reverse()
  console.log(sumArr)
}
addTwoNumbers([2, 4, 3], [5, 6, 4])
