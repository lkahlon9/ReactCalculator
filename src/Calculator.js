import {useState} from 'react';
import Output from './Output';
import AllClear from './AllClear';
import Parantheses from './Parantheses';
import NumberGrid from './NumberGrid';
import Operands from './Operands';
import Decimal from './Decimal';
import Equals from './Equals';

const Calculator = () => {
  const [expr, setExpr] = useState('0');

  const clear = () => {
    setExpr('0');
  }

  const addNumber = (num) => {
    if(expr === '0') setExpr(num);
    else setExpr(expr+num);
  }

  const addOperand = (op) => {
    setExpr(expr+op);
  }

  const addParantheses = (paran) => {
    if(expr === '0') setExpr(paran);
    else setExpr(expr+paran);
  }

  const addDecimal = () => {
    let lastOp = -1; //index of last operand
    let char;
    for(let i=0; i<expr.length; i++){
      char = expr.charAt(i);
      switch(char) {
        case '÷':
          lastOp = i;
          break;
        case '*':
          lastOp = i;
          break;
        case '-':
          lastOp = i;
          break;
        case '+':
          lastOp = i;
          break;
        default: 
          break;
      }
    }
    if(lastOp !== -1){ // more than one number
      let lastNum = expr.slice(lastOp);
      if(!lastNum.includes('.')){
        setExpr(expr+'.');
      }
    } else { // one number
      if(!expr.includes('.')){
        setExpr(expr+'.');
      }
    }
  }

  const evalExpr = (expr) => {
    let newExpr = expr;
    while(newExpr.includes('(')){
      let innerLeftParan = -1;
      let innerRightParan = -1;
      for (let i=0; i<newExpr.length; i++){ 
        if(newExpr.charAt(i) === '('){
          innerLeftParan = i;
        } else if(newExpr.charAt(i) === ')'){
          innerRightParan = i;
          break; // find innermost left and right paran
        }
      }
      let innerExpr = newExpr.slice(innerLeftParan+1, innerRightParan);
      let innerResult = evalInnerExpr(innerExpr);
      newExpr = newExpr.slice(0, innerLeftParan) + 
        innerResult + newExpr.slice(innerRightParan+1, newExpr.length);
    }
    newExpr = evalInnerExpr(newExpr);
    setExpr(newExpr);
  }

  const evalInnerExpr = (expr) => {
    let newExpr = expr; 
    newExpr = evalOperand(newExpr, '^');
    newExpr = evalOperand(newExpr, '*');
    newExpr = evalOperand(newExpr, '÷');
    newExpr = evalOperand(newExpr, '+');
    newExpr = evalOperand(newExpr, '-');

    return newExpr;
  }

  const evalOperand = (expr, op) => {
    while((expr.includes(op) && op !== '-') || (op === '-' && expr.slice(1, expr.length).includes(op))){
      let opIndex;
      if(op === '-' && expr.charAt(0) === '-') {
        opIndex = expr.indexOf(op, 2);
      } else opIndex = expr.indexOf(op);
      let leftIndex = opIndex;
      let rightIndex = opIndex;
      for(let i=opIndex-1; i>=0; i--){
        if(expr.charAt(i) === '+'){
          leftIndex = i+1;
          break;
        } else if(expr.charAt(i) === '-' 
            && i!==0 && expr.charAt(i-1) !== '-' && expr.charAt(i-1) !== '+' 
            && expr.charAt(i-1) !== '÷' && expr.charAt(i-1) !== '^' 
            && expr.charAt(i-1) !== '*'){
          leftIndex = i+1;
          break;
        } else if(expr.charAt(i) === '÷'){
          leftIndex = i+1;
          break;
        } else if(expr.charAt(i) === '*'){
          leftIndex = i+1;
          break;
        } else if(expr.charAt(i) === '^'){
          leftIndex = i+1;
          break;
        } else {
          leftIndex = i;
        }
      }
      for(let i=opIndex+1; i<expr.length; i++){
        if(expr.charAt(i) === '+'){
          rightIndex = i-1;
          break;
        } else if(expr.charAt(i) === '-' && expr.charAt(i-1) !== op){
          rightIndex = i-1;
          break;
        } else if(expr.charAt(i) === '÷'){
          rightIndex = i-1;
          break;
        } else if(expr.charAt(i) === '*'){
          rightIndex = i-1;
          break;
        } else if(expr.charAt(i) === '^'){
          rightIndex = i-1;
          break;
        } else {
          rightIndex = i;
        }
      }


      let result;
      if(op === '*') result = parseFloat(expr.slice(leftIndex, opIndex)) * parseFloat(expr.slice(opIndex+1, rightIndex+1));
      else if(op === '÷') result = parseFloat(expr.slice(leftIndex, opIndex)) / parseFloat(expr.slice(opIndex+1, rightIndex+1));
      else if(op === '+') result = parseFloat(expr.slice(leftIndex, opIndex)) + parseFloat(expr.slice(opIndex+1, rightIndex+1));
      else if(op === '-') result = parseFloat(expr.slice(leftIndex, opIndex)) - parseFloat(expr.slice(opIndex+1, rightIndex+1));
      else if(op ==='^') result = Math.pow(parseFloat(expr.slice(leftIndex, opIndex)), parseFloat(expr.slice(opIndex+1, rightIndex+1)));
      
      else result = '';

      expr = expr.slice(0, leftIndex) + result + expr.slice(rightIndex + 1, expr.length);

    }
    return expr;

  }

  return (
    <div className="calculator">
      <Output expr={expr} />
      <AllClear clear={clear}/>
      <Parantheses addParantheses={addParantheses}/>
      <NumberGrid addNumber={addNumber}/>
      <Operands addOperand={addOperand}/>
      <Decimal addDecimal={addDecimal}/>
      <Equals expr={expr} evalExpr={evalExpr}/>

    </div>
  );
}

export default Calculator;