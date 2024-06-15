import style from './GameOver.module.css';

const GameOver = ({ reTry, score }) => {
    return (
        <div>
            <h1>Fim de jogo</h1>
            <h2>A sua pontuação foi: <span>{score}</span></h2>
            <button onClick={reTry}>Tentar novamente</button>
        </div>
    )
}

export default GameOver
