class ButtonCounter extends React.Component {
    render() {
        const {counter, onIncrement} = this.props
        return <div>
            <button onClick={onIncrement} className="btn btn-primary">Incrementa</button>
            <div>Contatore = {counter}</div>
        </div>
    }
}