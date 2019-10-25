import React, {Component} from 'react';
import './App.css';
import _ from 'lodash';
//We need anothe component that represents a basic div with a border that takes some prop
//Map over some aray of numbers maybe to provide values and iterate multiple components
//Create an onclick
//Create functoin that shuffles array which should be stored in state
//Implement logic aorund scoring and losses
class App extends Component {
  constructor(props){
    super(props);
    //state = special property for react
    //when state changes, view of application should also change
    this.state = {
      cards: [1,2,3,4,5,6,7,8,9],
      lastItemClicked: undefined,
      currentScore: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    //Was item jsut lcicked the last item
    if(this.state.lastItemClicked === id){
      //user just lost
      alert('you lost')
      this.setState({currentScore: 0,cards: _.shuffle(cards), lastItemClicked: undefined})
      return;
    }
    const {currentScore, cards} = this.state;
    this.setState({currentScore: currentScore + 1, cards: _.shuffle(cards), lastItemClicked: id});


  }

//curly for js, passing a prop to react not needed but still respected
  render() {
    const styles = {
      border: '3px solid black',
      height:'200px',      
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'orangered',
      flexBasis: '30%',
      margin: '10px 0'
    }
  return (
    <div className="App">
      {/* map iterates over array and passes each arguement, returns new array */}
      {this.state.cards.map((card, i) => {
        const uniqueId = _.uniqueId('card-')
        return (
      <div key={uniqueId} onClick={() => this.handleClick(card)} style={styles}>
        {card}
      </div>
        )
      })}
    </div>
  );
  }
}

export default App;
