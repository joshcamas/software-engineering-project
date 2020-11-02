import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  data = [
    {eventId: '5489841', img : 'assets/Events/bulbasaur.jpg', price : '$5.60', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacus eros, ornare vitae placerat vel, posuere at nisl. Praesent fermentum dolor in venenatis egestas.', creationDate: "Created on: 9/24/2020", startDate: "Starts: 11/21/2020", endDate: "Ends: 11/22/2020"},
    {eventId: '5489841', img : 'assets/Events/pikachu.jpg', price : '$6.25', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacus eros, ornare vitae placerat vel, posuere at nisl. Praesent fermentum dolor in venenatis egestas.', creationDate: "Created on: 9/24/2020", startDate: "Starts: 11/21/2020", endDate: "Ends: 11/22/2020"},
    {eventId: '5489841', img : 'assets/Events/charmander.jpg', price : '$7.80', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacus eros, ornare vitae placerat vel, posuere at nisl. Praesent fermentum dolor in venenatis egestas.', creationDate: "Created on: 9/24/2020", startDate: "Starts: 11/21/2020", endDate: "Ends: 11/22/2020"},
    {eventId: '5489841', img : 'assets/Events/squirtle.jpg', price : '$12.99', description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacus eros, ornare vitae placerat vel, posuere at nisl. Praesent fermentum dolor in venenatis egestas.', creationDate: "Created on: 9/24/2020", startDate: "Starts: 11/21/2020", endDate: "Ends: 11/22/2020"}
  ];
  dataOutput = [];
  id: number;

  constructor(private route: ActivatedRoute) {
    for (let i = 0; i < 20; i++){
      this.dataOutput.push(this.data[i % 4]);
      this.dataOutput[i].id = i;
    }
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

}
