var CommentList = React.createClass({
  render: function() {
    return (
      <div className="commentList">
        <Comment author="Hunt">
          This is one comment
        </Comment>
        <Comment author="Jordan">
          This is *another* comment
        </Comment>
        <Comment author="Fox">
          This is *another* comment
        </Comment>
        <Comment author="Casper">
          This is *another* comment
        </Comment>
        <Comment author="Rodney">
          This is *another* comment
        </Comment>
        <Comment author="Pony">
          This is *another* comment Lorem ipsum dolor sit amet
        </Comment>
      </div>
    )
  }
})

var CommentForm = React.createClass({
  render: function(){
    return(
      <div className="commentForm">
        I am the commentForm!
      </div>
    );
  }
});


var CommentBox = React.createClass({
  render: function(){
    return (
      <div className="CommentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    )
  }
});


var Comment =  React.createClass({
  render: function(){
    return(
      <div className="author">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {marked(this.props.children.toString())}
      </div>
    )
  }
})




var Wrapper = React.createClass({
  //set started
  getInitialState: function(){
    return {
      pageTitle: ""
    }
  },
  //works during development only
  propTypes: {
    pageTitle: React.PropTypes.string.isRequired
  },
  //method that sets the default properties that can be over ridden
  getDefaultProps: function() {
    return {
      pageTitle: "Master!"
    }
  },
  changeDetected: function (event) {
    this.setState({
      pageTitle: event.target.value
    });

  }
  ,
  render: function () {
    console.log(this.props);
    return (
      <div className="title">
        <input
          className="input"
          type="text"
          onChange={this.changeDetected}/>
        <h1>
          This is the {this.props.pageTitle} page.
        </h1>
        <h2>
          {this.state.pageTitle}
        </h2>
      </div>
    )
  }
})


ReactDOM.render(
  <Wrapper/>,
  document.getElementById("wrap")
);

//
// var Dummy = React.createClass({
//   render: function(){
//     return (<div>I am a dummy tester</div>);
//   }
// });
//
//
// var dummyHost = document.getElementById("dumdum")
// ReactDOM.render(<Dummy/>, dummyHost)


























ReactDOM.render(
  <CommentBox/>,
  document.getElementById("content")
);
