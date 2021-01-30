import { useState } from 'react';

const Board = () => {
  const [mark, setMark] = useState(false);

  const markSection = () => {
    setMark(prevMark => !prevMark)
  }
  
  return (
    <div className="board" style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", fontSize: "5rem"}}>
      <div className="row-1" style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
        <div className="b1" style={{margin: "12px", border: "black 3px solid"}} onClick={() => markSection()}>X</div>
        <div className="b2" style={{margin: "12px", border: "black 3px solid"}}>O</div>
        <div className="b3" style={{margin: "12px", border: "black 3px solid"}}>O</div>
      </div>
      <div className="row-2" style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
        <div className="b4" style={{margin: "12px", border: "black 3px solid"}}>X</div>
        <div className="b5" style={{margin: "12px", border: "black 3px solid"}}>X</div>
        <div className="b6" style={{margin: "12px", border: "black 3px solid"}}>O</div>
      </div>
      <div className="row-3" style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
        <div className="b7" style={{margin: "12px", border: "black 3px solid"}}>O</div>
        <div className="b8" style={{margin: "12px", border: "black 3px solid"}}>X</div>
        <div className="b9" style={{margin: "12px", border: "black 3px solid"}}>O</div>
      </div>
    </div>
  );
}
 
export default Board;