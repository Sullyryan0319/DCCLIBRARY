import React, {Component} from 'react';
import './App.css';
import TitleBar from './TitleBar/TitleBar';
import BookViewer from './BookViewer/BookViewer';
import BookCreator from './BookCreater/BookCreater';
import Book from './Book/Book';

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

    createBook = (newBook) => {
        console.log("From the createBook on App component", newBook);
        this.books.push(newBook);
        this.setState({
            bookNumber:this.books.length -1
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <TitleBar/>
                <BookViewer book={this.books[this.state.bookNumber]} nextBook={this.goToNextBook} previousBook={this.goToPreviousBook}/>     
                <BookCreator createNewBook={this.createBook}/>
            </div>
        )
    }
}

export default App;