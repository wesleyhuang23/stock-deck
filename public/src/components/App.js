import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//reducers
import {homePageStocks} from './../actions/index.js';

class App extends React.Component{
    componentWillMount(){
        console.log('App component')
        this.props.homePageStocks()
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    STOCK DECK
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({homePageStocks}, dispatch); 
}

export default connect(null, mapDispatchToProps)(App)