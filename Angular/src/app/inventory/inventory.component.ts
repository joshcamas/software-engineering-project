import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { InventoryData } from '../models/inventory.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  inventory: InventoryData[];
  id: number;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
  });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.dataService.getUserInventory(id)
      .subscribe(data => this.inventory = data);
  }

}
