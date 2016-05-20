var Main = React.createClass({
  render: function () {
    return (
      <div className="mainContainer">
        <h1>React Counter</h1>
      </div>
    )
  }
})

ReactDOM.render(<Main/>,document.getElementById("content"))
