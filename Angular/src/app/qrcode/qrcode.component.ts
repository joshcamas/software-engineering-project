import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { InventoryData } from '../models/inventory.model';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {
  public QrCode: string = null;
  constructor(private route: ActivatedRoute, private dataService: DataService) { 
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.dataService.getQRCode(id)
      .subscribe(data => 
        {
        console.log(data);
        this.QrCode = data['img'];
      });
        
  }
}
