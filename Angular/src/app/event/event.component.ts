import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { EventData } from '../models/event.model';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  eventData: EventData;
  id: number;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
  });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.dataService.getEvent(id)
      .subscribe(data => this.eventData = data[0]);
  }

}
