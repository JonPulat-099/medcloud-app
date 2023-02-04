<template>
  <div id="draggable">
    <div :class="theme" class="calculator">
      <div class="close-calculator">
        <v-btn icon depressed :plain="false" @click="$emit('close')">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>
      <div id="display">
        <div id="display-prev" data-prev></div>
        <div id="input" data-curr></div>
      </div>
      <div class="keypad">
        <table>
          <tbody>
            <tr>
              <td><button class="clear" id="clear" data-clr>Ac</button></td>
              <td><button class="operator" data-opr>+</button></td>
              <td><button class="operator" data-opr>-</button></td>
              <td><button class="operator" data-opr>*</button></td>
            </tr>
            <tr>
              <td><button data-num class="numbers">7</button></td>
              <td><button data-num class="numbers">8</button></td>
              <td><button data-num class="numbers">9</button></td>
              <td><button class="operator" data-opr>/</button></td>
            </tr>
            <tr>
              <td><button data-num class="numbers">4</button></td>
              <td><button data-num class="numbers">5</button></td>
              <td><button data-num class="numbers">6</button></td>
              <td><button data-del id="delete"><v-icon>mdi-backspace-outline</v-icon></button></td>
            </tr>
            <tr>
              <td><button data-num class="numbers">1</button></td>
              <td><button data-num class="numbers">2</button></td>
              <td><button data-num class="numbers">3</button></td>
              <td rowspan="2">
                <button class="equal" id="results" data-eql>=</button>
              </td>
            </tr>
            <tr>
              <td colspan="2"><button data-num class="numbers">0</button></td>
              <td><button data-num class="numbers">.</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Calculator',
  computed: {
    theme() {
      return 'light--theme'
    },
  },
  mounted() {
    'use strict'

    var input = document.getElementById('input'), // input/output button
      number = document.querySelectorAll('.numbers'), // number buttons
      operator = document.querySelectorAll('.operator'), // operator buttons
      result = document.getElementById('results'), // equal button
      clear = document.getElementById('clear'), // clear button
      del = document.getElementById('delete'), // delete button
      prev = document.getElementById('display-prev'), // displayed string
      resultDisplayed = false // flag to keep an eye on what output is displayed

    // adding click handlers to number buttons
    for (var i = 0; i < number.length; i++) {
      number[i].addEventListener('click', function (e) {
        input.style.fontWeight = 'normal'
        // storing current input string and its last character in variables - used later
        var currentString = input.innerHTML
        var lastChar = currentString[currentString.length - 1]

        // if result is not diplayed, just keep adding
        if (resultDisplayed === false) {
          console.log(2, input.innerHTML)
          input.innerHTML += e.target.innerHTML
        } else if (
          (resultDisplayed === true && lastChar === '+') ||
          lastChar === '-' ||
          lastChar === '*' ||
          lastChar === '/'
        ) {
          console.log(3, input.innerHTML)
          // if result is currently displayed and user pressed an operator
          // we need to keep on adding to the string for next operation
          resultDisplayed = false
          input.innerHTML += e.target.innerHTML
          console.log(4, input.innerHTML)
        } else {
          // if result is currently displayed and user pressed a number
          // we need clear the input string and add the new input to start the new opration
          console.log(5, input.innerHTML)
          resultDisplayed = false
          input.innerHTML = ''
          prev.innerHTML = ''
          input.innerHTML += e.target.innerHTML
        }
      })
    }

    // adding click handlers to number buttons
    for (var i = 0; i < operator.length; i++) {
      operator[i].addEventListener('click', function (e) {
        // storing current input string and its last character in variables - used later
        var currentString = input.innerHTML
        var lastChar = currentString[currentString.length - 1]

        // if last character entered is an operator, replace it with the currently pressed one
        if (
          lastChar === '+' ||
          lastChar === '-' ||
          lastChar === '*' ||
          lastChar === '/'
        ) {
          var newString =
            currentString.substring(0, currentString.length - 1) +
            e.target.innerHTML
          input.innerHTML = newString
        } else if (currentString.length == 0) {
          // if first key pressed is an opearator, don't do anything
          console.log('enter a number first')
        } else if (currentString.includes('=')) {
          input.style.fontWeight = 'normal'
          ;(input.innerHTML =
            currentString.replace(/[=]/g, '') + e.target.innerHTML),
            (resultDisplayed = false)
          prev.innerHTML = ''
        } else {
          // else just add the operator pressed to the input
          input.innerHTML += e.target.innerHTML
        }
      })
    }

    // on click of 'equal' button
    result.addEventListener('click', function () {
      // this is the string that we will be processing eg. -10+26+33-56*34/23
      var inputString = input.innerHTML

      // forming an array of numbers. eg for above string it will be: numbers = ["10", "26", "33", "56", "34", "23"]
      var numbers = inputString.split(/\+|\-|\*|\//g).filter((x) => !!x)

      // forming an array of operators. for above string it will be: operators = ["+", "+", "-", "*", "/"]
      // first we replace all the numbers and dot with empty string and then split
      var operators = inputString.replace(/[0-9]|\./g, '').split('')

      //   console.log(inputString)
      //   console.log(operators)
      //   console.log(numbers)
      //   console.log('----------------------------')

      // now we are looping through the array and doing one operation at a time.
      // first divide, then multiply, then subtraction and then addition
      // as we move we are alterning the original numbers and operators array
      // the final element remaining in the array will be the output

      var divide = operators.indexOf('/')
      while (divide != -1) {
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1])
        operators.splice(divide, 1)
        divide = operators.indexOf('/')
      }

      var multiply = operators.indexOf('*')
      while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1])
        operators.splice(multiply, 1)
        multiply = operators.indexOf('*')
      }

      var subtract = operators.indexOf('-')
      while (subtract != -1) {
        numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1])
        operators.splice(subtract, 1)
        subtract = operators.indexOf('-')
      }

      var add = operators.indexOf('+')
      while (add != -1) {
        // using parseFloat is necessary, otherwise it will result in string concatenation :)
        numbers.splice(
          add,
          2,
          parseFloat(numbers[add]) + parseFloat(numbers[add + 1])
        )
        operators.splice(add, 1)
        add = operators.indexOf('+')
      }

      console.log(11, numbers)
      if (!isNaN(numbers[0])) {
        input.style.fontWeight = 'bold'
        input.innerHTML = '=' + numbers[0] // displaying the output
        prev.innerHTML = inputString
        resultDisplayed = true // turning flag if result is displayed
      } else {
        input.innerHTML = inputString
      }
    })

    // clearing the input on press of clear
    clear.addEventListener('click', function () {
      input.innerHTML = ''
      input.style.fontWeight = 'normal'
    })

    // Deleting the input on press of delete
    del.addEventListener('click', function () {
      if (resultDisplayed) {
        input.style.fontWeight = 'normal'
        resultDisplayed = false
        input.innerHTML = prev.innerHTML
        prev.innerHTML = ''
      } else {
        const text = input.innerHTML
        input.innerHTML = text.slice(0, -1)
      }
    })

    /**======================= Draggable ======================= */

    // The current position of mouse
    let x = 0
    let y = 0

    // Query the element
    const ele = document.getElementById('draggable')

    // Handle the mousedown event
    // that's triggered when user drags the element
    const mouseDownHandler = function (e) {
      // Get the current mouse position
      x = e.clientX
      y = e.clientY

      // Attach the listeners to `document`
      document.addEventListener('mousemove', mouseMoveHandler)
      document.addEventListener('mouseup', mouseUpHandler)
    }

    const mouseMoveHandler = function (e) {
      // How far the mouse has been moved
      const dx = e.clientX - x
      const dy = e.clientY - y

      // Set the position of element
      ele.style.top = `${ele.offsetTop + dy}px`
      ele.style.left = `${ele.offsetLeft + dx}px`

      // Reassign the position of mouse
      x = e.clientX
      y = e.clientY
    }

    const mouseUpHandler = function () {
      // Remove the handlers of `mousemove` and `mouseup`
      document.removeEventListener('mousemove', mouseMoveHandler)
      document.removeEventListener('mouseup', mouseUpHandler)
    }

    ele.addEventListener('mousedown', mouseDownHandler)
  },
}
</script>
<style lang="scss" scoped>
// .ligth--theme {
$bg: #bdc9d4;
$close: #344159;
$display: #fff;
$display-text: #5b5b5b;
$display-operators: #ae4a84;
$equal-text: #5b5b5b;
$btn-text: #5b5b5b;
$btn-bg: #fff;
$clear-btn-bg: #f5b2b6;
$operators-bg: #d2cde7;
$operators-text: #5b5b5b;
$prev-text: #5b5b5b;
$result: #5b5b5b;
// }

.dark--theme {
  $bg: #434242;
  $close: #acb4c0;
  $display: #121212;
  $display-text: #acb4c0;
  $display-operators: #ae4a84;
  $equal-text: #d9dada;
  $btn-text: #acb4c0;
  $btn-bg: #121212;
  $clear-btn-bg: #f5b2b6;
  $operators-bg: #c7cbe6;
  $operators-text: #264055;
  $prev-text: #acb4c0;
  $result: #d9dada;
}

#draggable {
  width: 180px;
  top: 60px;
  right: 10px;


  /* Indicate the element draggable */
  cursor: move;

  /* It will be positioned absolutely */
  position: absolute;

  /* Doesn't allow to select the content inside */
  user-select: none;
}

.calculator {
  width: 100%;
  background: $bg;
  padding: 12px;
  border-radius: 20px;
}

.close-calculator {
  display: flex;
  justify-content: flex-end;
}

.close-calculator button {
  &::before {
    display: none;
  }
  width: 18px !important;
  height: 18px !important;
  background: none;
  border: none;
  color: $close;
  i {
    width: 18px;
    height: 18px;
    font-size: 18px !important;
  }
}

#display {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  background: $display;
  border-radius: 8px;
  height: 80px;
  margin: 10px 0;
  padding: 5px;
  overflow: hidden;
  cursor: default;
}

#display-prev,
#input {
  word-break: break-all;
  text-align: right;
}

#display-prev {
  color: $prev-text !important;
}
#input {
  color: $result !important;
}

table {
  width: 100%;
}

table tr td {
  width: 25%;
}

.keypad button {
  display: block;
  width: 100%;
  min-height: 30px;
  color: $btn-text;
  background: $btn-bg;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.25s all;

   i {
    font-size: 16px;
   }
}

.equal {
  height: 66px;
  background: #008dd2 !important;
  color: #fff !important;
}

.clear {
  background: $clear-btn-bg !important;
  color: $operators-text !important;
}

.operator {
  background: $operators-bg !important;
  transition: 0.25s all;
  color: $operators-text !important;
}
</style>
