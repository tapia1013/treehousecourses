const players = [
  {
    name: 'Jay',
    score: 540,
    id: 1
  },
  {
    name: 'Vee',
    score: 551,
    id: 2
  },
  {
    name: 'Cookie',
    score: 653,
    id: 3
  },
  {
    name: 'Nye',
    score: 596,
    id: 4
  }
]


function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}


const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement">-</button>
      <span className="counter-score">{props.score}</span>
      <button className="counter-action increment">+</button>
    </div>
  )
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        {props.name}
      </span>


      <Counter score={props.score} />

    </div>
  )
}



const App = (props) => {

  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        totalPlayers={props.initialPlayers.length}
      />
      {/* Players list */}
      {
        props.initialPlayers.map((player) => {
          // console.log(player)
          return <Player
            name={player.name}
            score={player.score}
            key={player.id}
          />
        })
      }
    </div>
  )
}


ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById('root')
);

