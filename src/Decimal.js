const Decimal = ({addDecimal}) => {
  return(
    <div className="decimal">
      <button style={{
        position: 'absolute',
        marginTop: '286px',
        marginLeft: '2px',
        height: '50px',
        width: '72px'
      }} onClick={() => addDecimal()}>.</button>
    </div>
  );
  
}
  
export default Decimal;