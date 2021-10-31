import React, {Component} from 'react';
import './App.css';
import TitleBar from './TitleBar/TitleBar';
import BookViewer from './BookViewer/BookViewer';

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

    goToNextBook = () => {        
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber++;
        if(tempBookNumber === this.books.length){
            tempBookNumber = 0;
        }
        this.setState({
            bookNumber: tempBookNumber
        });
    }

    goToPreviousBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber --;
        if(tempBookNumber < 0){
            tempBookNumber = this.books.length -1;
        }
        this.setState({
            bookNumber: tempBookNumber
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <TitleBar/>
                <BookViewer book={this.books[this.state.bookNumber]} nextBook={this.goToNextBook} previousBook={this.goToPreviousBook}/>            
            </div>
        )
    }
}

export default App;