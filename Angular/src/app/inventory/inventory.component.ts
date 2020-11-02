import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  data = [{event: "event1"}, {event: "event2"}, {event: "event3"}, {event: "event4"}]
  walletEvents = [];
  id: number;

  constructor(private route: ActivatedRoute) {
    for (let i = 0; i < 4; i++){
      this.walletEvents.push({
        event: this.data[i % 4].event
      })
    }
  }

  ngOnInit(): void {
  }

}
