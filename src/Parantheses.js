const Parantheses = ({addParantheses}) => {
    return(
      <div className="parantheses">
        <div className="left-paran">
          <button style={{
            position: 'absolute',
            marginTop: '82px',
            marginLeft: '77px',
            height: '50px',
            width: '72px'
          }} onClick={() => addParantheses('(')}>(</button>
        </div>
        <div className="right-paran">
          <button style={{
            position: 'absolute',
            marginTop: '82px',
            marginLeft: '152px',
            height: '50px',
            width: '72px'
          }}onClick={() => addParantheses(')')}>)</button>
        </div>
      </div>

    );
  
  }
  
  export default Parantheses;