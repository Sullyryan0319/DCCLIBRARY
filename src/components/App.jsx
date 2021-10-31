import React, {Component} from 'react';
import './App.css';
import TitleBar from './TitleBar/TitleBar';

class App extends Component {
    constructor(props){
        super(props);
        this.books =[
            {title: "Can't Hurt Me", author: "David Goggins"},
            {title: "Master the Game", author: "Tony Robbins"},
            {title: "Golf My Way", author: "Jack Nicklaus"},
        ]
        this.state = {
            bookNumber: 1
        };
    }

    render(){
        return(
            <div className="container-fluid">
                <TitleBar/>
                <div className="row">
                    <div className="col-md-4">
                        {/*Button here to move to previous book viewed*/}
                    </div>
                    <div className="col-md-4">
                        {/*Display book with cover here*/}
                        <h1>{this.books[this.state.bookNumber].title}</h1>
                        <h4>{this.books[this.state.bookNumber].author}</h4>
                    </div>
                    <div className="col-md-4">
                        {/*Button here to move to the next book*/}
                    </div>
                </div>                
            </div>
        )
    }
}

export default App;