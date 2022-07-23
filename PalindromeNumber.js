// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

function PalindromeNum(x) {
//set num to string
  let toString = x.toString()
  //split string
  let num = toString.split("")
//flip string
  let flipNum = num.reverse()
  let output = false
  let Exp = `From left to right, it reads ${num}. From right to left, it becomes ${flipNum}. Therefore it is not a palindrome.\n`
  if (num[0] == num[2]) {
    output = true
    let Exp = `${num} reads as ${flipNum} from left to right and from right to left.\n`
  }

  console.log(`Input: ${x}\nOutput: ${output}\nExplaniation: ${Exp}`)
}

PalindromeNum(121)
