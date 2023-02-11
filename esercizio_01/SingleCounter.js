class SingleCounter extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }
    increment() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    render() {
        const {counter} = this.state
        return <div>
            <button onClick={(e) => this.increment()} className="btn btn-primary">Incrementa</button>
            <div>Contatore = {counter}</div>
        </div>
    }
}
