import style from './GameOver.module.css';

const GameOver = ({ reTry }) => {
    return (
        <div>
            <h2>Cabou</h2>
            <button onClick={reTry}>Tentar novamente</button>
        </div>
    )
}

export default GameOver
