import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventData } from './models/event.model';
import { Inventory } from './models/inventory.model';

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

  getInventory(){
    return this._http.get<Inventory[]>(this.apiUrl + '/globalinventory');
  }
}
