const NumberGrid = ({addNumber}) => {
  return (
    <div className="number-grid">
      <button style={{
        position: 'absolute',
        marginTop: '133px',
        marginLeft: '2px',
        height: '50px',
        width: '72px'
      }} onClick={() => addNumber('7')}>7</button>
      <button style={{
        position: 'absolute',
        marginTop: '133px',
        marginLeft: '77px',
        height: '50px',
        width: '72px'
      }} onClick={() => addNumber('8')}>8</button>
      <button style={{
        position: 'absolute',
        marginTop: '133px',
        marginLeft: '152px',
        height: '50px',
        width: '72px'
      }} onClick={() => addNumber('9')}>9</button>
      <button style={{
        position: 'absolute',
        marginTop: '184px',
        marginLeft: '2px',
        height: '50px',
        width: '72px'
      }} onClick={() => addNumber('4')}>4</button>
      <button style={{
        position: 'absolute',
        marginTop: '184px',
        marginLeft: '77px',
        height: '50px',
        width: '72px'
      }} onClick={() => addNumber('5')}>5</button>
      <button style={{
        position: 'absolute',
        marginTop: '184px',
        marginLeft: '152px',
        height: '50px',
        width: '72px'
      }} onClick={() => addNumber('6')}>6</button>
      <button style={{
        position: 'absolute',
        marginTop: '235px',
        marginLeft: '2px',
        height: '50px',
        width: '72px'
      }} onClick={() => addNumber('1')}>1</button>
      <button style={{
        position: 'absolute',
        marginTop: '235px',
        marginLeft: '77px',
        height: '50px',
        width: '72px'
      }} onClick={() => addNumber('2')}>2</button>
      <button style={{
        position: 'absolute',
        marginTop: '235px',
        marginLeft: '152px',
        height: '50px',
        width: '72px'
      }} onClick={() => addNumber('3')}>3</button>
      <button style={{
        position: 'absolute',
        marginTop: '286px',
        marginLeft: '77px',
        height: '50px',
        width: '72px'
      }} onClick={() => addNumber('0')}>0</button>
    </div>    

  );

}

export default NumberGrid;