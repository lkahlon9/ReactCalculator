const Operands = ({addOperand}) => {
  return(
    <div className="operands">
      <button style={{
        position: 'absolute',
        marginTop: '82px',
        marginLeft: '227px',
        height: '50px',
        width: '72px'
      }} onClick={() => addOperand('÷')}>÷</button>
      <button style={{
        position: 'absolute',
        marginTop: '133px',
        marginLeft: '227px',
        height: '50px',
        width: '72px'
      }} onClick={() => addOperand('*')}>*</button>
      <button style={{
        position: 'absolute',
        marginTop: '184px',
        marginLeft: '227px',
        height: '50px',
        width: '72px'
      }} onClick={() => addOperand('-')}>-</button>
      <button style={{
        position: 'absolute',
        marginTop: '235px',
        marginLeft: '227px',
        height: '50px',
        width: '72px'
      }} onClick={() => addOperand('+')}>+</button>
      <button style={{
        position: 'absolute',
        marginTop: '286px',
        marginLeft: '152px',
        height: '50px',
        width: '72px'
      }} onClick={() => addOperand('^')}>^</button>
    </div>
    
  );
}

export default Operands;