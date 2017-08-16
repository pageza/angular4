import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [{body:"blah blahbitty blah",author:"Me",rating:1}]

  createQuote(quote){
    console.log(quote)
    this.quotes.push(quote)
  }

  deleteQuote(quote){
    const index = this.quotes.indexOf(quote)
    this.quotes.splice(index, 1)
  }

}
