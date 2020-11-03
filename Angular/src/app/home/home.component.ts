import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { EventData } from '../models/event.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: EventData[];
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getEvents()
      .subscribe(data => this.events = data);
  }

}
