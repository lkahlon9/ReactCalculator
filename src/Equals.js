const Equals = ({expr, evalExpr}) => {
  return(
      <div className="equals">
        <button style={{
          position: 'absolute',
          marginTop: '286px',
          marginLeft: '227px',
          height: '50px',
          width: '72px'
        }} onClick={() => evalExpr(expr)}>=</button>
      </div>
  );
}
  
export default Equals;