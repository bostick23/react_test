class App extends React.Component {
  constructor() {
    super();
    this.state = {
      objectList: [],
      howmany: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      const n = this.state.howmany;
      this.setState({
        objectList: [...this.state.objectList, { id: n + 1, value: n + 1 }],
        howmany: n + 1,
      });
    }, 2000);
  }
  render() {
    const { objectList } = this.state;
    const objectListJSX = objectList.map((x) => (
      <li key={x.id} className="list-group-item">
        {x.value}
      </li>
    ));
    console.log(objectList);
    console.log(objectListJSX);
    return <ul className="list-group">{objectListJSX}</ul>;
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
