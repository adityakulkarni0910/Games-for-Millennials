
import { useState } from "react";

function Menu({setGame}){

const games=["2048","Sudoku"]

return(

<div className="menu">

{games.map(g=>(

<button key={g} onClick={()=>setGame(g)}>

{g}

</button>

))}

</div>

)

}

function Game2048(){

const size=4

const createBoard=()=>{

const b=Array(size).fill(0).map(()=>Array(size).fill(0))

b[0][0]=2
b[1][1]=2

return b

}

const [board,setBoard]=useState(createBoard())

return(

<div>

<div className="board">

{board.flat().map((v,i)=>(

<div key={i} className="tile">

{v||""}

</div>

))}

</div>

</div>

)

}

function Sudoku(){

const grid=[
5,3,"","",7,"","","","",
6,"","",1,9,5,"","","",
"",9,8,"","","","",6,"",
8,"","","",6,"","","",3,
4,"","",8,"",3,"","",1,
7,"","","",2,"","","",6,
"",6,"","","","",2,8,"",
"","","",4,1,9,"","",5,
"","","","",8,"","",7,9
]

return(

<div style={{display:"grid",gridTemplateColumns:"repeat(9,35px)",gap:"5px",marginTop:"20px"}}>

{grid.map((v,i)=>(

<input key={i} defaultValue={v} maxLength="1" style={{textAlign:"center",height:"35px"}}/>

))}

</div>

)

}

export default function App(){

const [game,setGame]=useState(null)

return(

<div className="container">

<h1>Classic Games Hub</h1>

{!game
? <Menu setGame={setGame}/>
: <>

<button onClick={()=>setGame(null)} style={{marginBottom:"20px"}}>Back</button>

{game==="2048" && <Game2048/>}
{game==="Sudoku" && <Sudoku/>}

</>
}

</div>

)

}
