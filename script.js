/*
  Automation Script for UNICEF Math Quiz
  https://www.unicefusa.org/math-quiz
  
  * Instructions
  1. Enter your email and click "Continue."
  2. Copy this script.
  3. Paste into "Console." (located in F12 Developer Tools)
*/

const delay = 2000;
let qNum = 0;

const l = setInterval(() => {
    if (qNum < 9) {
        let lhs = document.getElementsByClassName("js-mq-q__value-1")[qNum].innerText;
        let rhs = document.getElementsByClassName("js-mq-q__value-2")[qNum].innerText;
        const mathOperator = document.getElementsByClassName("js-mq-q__operator")[qNum].innerText;

        const answerInput = document.getElementsByClassName("js-mq-q__answer form-control")[qNum];
        const submitButton = document.getElementsByClassName("js-mq-q__submit")[qNum];

        let ans = 0;

        if (lhs.includes("x")) {
            let lhsCoeff = parseInt(lhs);
            let rhsMid = parseInt(rhs.substring(0, rhs.indexOf("=")));
            let rhsNum = parseInt(rhs.substring(rhs.indexOf("=") + 1));

            console.log(`Coefficient: ${lhsCoeff}, Middle ${rhsMid}, RHS ${rhsNum}`);

            if (mathOperator == "+") {
                rhsNum = (rhsNum - rhsMid) / lhsCoeff;
            } else {
                rhsNum = (rhsNum + rhsMid) / lhsCoeff;
            }

            ans = rhsNum;

            console.log(`${lhsCoeff}x ${mathOperator} ${rhsMid} = ${rhsNum}`);
            console.log(`x = ${ans}`);
        } else {
            lhs = parseInt(lhs);
            rhs = parseInt(rhs);

            if (mathOperator == "+") {
                ans = lhs + rhs;
            } else if (mathOperator == "-") {
                ans = lhs - rhs;
            } else if (mathOperator == "x") {
                ans = lhs * rhs;
            }

            console.log(`${lhs} ${mathOperator} ${rhs} = ${ans}`);
        }

        answerInput.value = ans;
        submitButton.disabled = false;
        submitButton.click();

        qNum++;
    } else {
        document.getElementsByClassName("mq-button--replay")[0].click();
        qNum = 0;
    }
}, delay);
