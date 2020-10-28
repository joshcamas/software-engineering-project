import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data = ['assets/Events/bulbasaur.jpg', 'assets/Events/pikachu.jpg', 'assets/Events/charmander.jpg', 'assets/Events/squirtle.jpg']
  eventListings = [];
  constructor() {
    let j = -1;
    for (let i = 0; i < 20; i++) {
      if (i % 3 === 0) {
        this.eventListings.push([]);
        j += 1;
      }
      this.eventListings[j].push({img: this.data[i % this.data.length], id: i});
    }
  }

  ngOnInit(): void {
  }

}
