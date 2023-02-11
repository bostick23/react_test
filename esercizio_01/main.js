class Header extends React.Component {
    render() {
        console.log(this.props)
        const {title, subtitle} = this.props
        return <header>
            <h1>{title}</h1>
            <h3>{subtitle}</h3>
        </header>
    }
}
class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }
    onIncrement() {
        this.setState({
            counter: this.state.counter + 1
        })
        console.log(this.state.counter)
    }
    render() {
        let {counter} = this.state
        return <main>
            <ButtonCounter counter={counter}
                onIncrement={
                    (e) => this.onIncrement()
            }></ButtonCounter>
            <SingleCounter></SingleCounter>
        </main>
    }
}
class Footer extends React.Component {
    render() {
        return <footer>Footer</footer>
    }
}
class App extends React.Component {
    render() {
        return <div>
            <Header title="React.js Test" subtitle="Prima applicazione in React"/>
            <Main/>
            <Footer/>
        </div>
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render (
    <App/>)
