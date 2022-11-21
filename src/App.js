import { useReducer } from 'react';
import './App.css';
const ACTIONS = {
  ADO_DIGIT: 'add-didit',
  CHOSSE_OPERATION: 'chosse-operation',
  CLEAR:'clear',
  DELETE_DIGIT: 'delete-didit',
  EVALUATE: 'evaluate'
}
function reducer(state, { type , payload }) {
  switch (type) {
    case ACTIONS.ADO_DIGIT:
      return{
        ...state,
        currentOperand:`$(currentOperand)$(payload.didit)`
      }
  }
}
function App() {
  const [{currentOperand, previowsOperand, operation}, dispatch] = useReducer(reducer, {})
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previows-operand">{previowsOperand} {operation}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-tow">AC</button>
      <button>DEL</button>
      <button>/</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className="span-tow">=</button>
    </div>
  );
}

export default App;