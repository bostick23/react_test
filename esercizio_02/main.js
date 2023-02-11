class App extends React.Component {
  constructor() {
    super();
    this.state = {
      objectList: [
        {
          id: 0,
          value: "A",
        },
        {
          id: 1,
          value: "B",
        },
        {
          id: 2,
          value: "C",
        },
        {
          id: 3,
          value: "D",
        },
      ],
    };
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
