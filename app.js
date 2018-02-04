var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList items={['Apple', 'Banana']}/>
  </div>
);

var GroceryList = (props) => {
 
  
  return (<div>
    <ul>
      {props.items.map(item =>
        <GroceryListItem item={item}/>
      )}
    </ul>
  </div>)
};

class GroceryListItem extends React.Component {
	constructor(props) {

    super(props)
    this.state = {
      bold: false
    }
  }
  
  toggleBold() {
    this.setState({
      bold: !this.state.bold
    });
    console.log('hovered')
  }
  
  render() {
    var style = {
      fontWeight: this.state.bold ? 'bold' : 'normal'
    }
    
    return (
      <li style={style} onMouseOver={this.toggleBold.bind(this)} onMouseOut={this.toggleBold.bind(this)}>{this.props.item}</li>
    );
  }
}


ReactDOM.render(<App />, document.getElementById("app"));