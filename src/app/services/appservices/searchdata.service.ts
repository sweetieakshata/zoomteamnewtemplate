import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchdataService {

    constructor(private http: HttpClient) { }

    SERVER_URL_Search:string=' https://18232d92.ngrok.io/api/Member/GetMemberSearchResults/?Page=1&SearchString=';


    public getSearch(value):Observable<any> {
      return this.http.get(this. SERVER_URL_Search+value);
      }
  }

