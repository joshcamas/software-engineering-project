import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventData } from './models/event.model';
import { InventoryData } from './models/inventory.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'http://localhost:3000/api';
  constructor(private _http: HttpClient) { }

  getEvents(){
    return this._http.get<EventData[]>(this.apiUrl + '/listevents');
  }

  getEvent(id){
    const params = new HttpParams().set('id', id);
    return this._http.get<EventData>(this.apiUrl +  '/event', {params});
  }

  getQRCode(id){
    const params = new HttpParams().set('id', id);
    const fullUrl = `${this.apiUrl}/get-qr/?ticketid=${params.toString().replace('id=', '')}`
    return this._http.get<string>(fullUrl)
  }

  getUserInventory(id){
    const params = new HttpParams().set('id', id);
    console.log(this.apiUrl + '/inventory', {params})
    return this._http.get<InventoryData[]>(this.apiUrl + '/inventory', {params});
  }
}
