const AllClear = ({clear}) => {
  return(
    <div className="all-clear">
      <button style={{
          position: 'absolute',
          marginTop: '82px',
          marginLeft: '2px',
          height: '50px',
          width: '72px'
      }}onClick={() => clear()}>AC</button>
    </div>
  );

}

export default AllClear;