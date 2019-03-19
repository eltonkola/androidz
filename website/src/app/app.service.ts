import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {

      urlServer = 'https://raw.githubusercontent.com/eltonkola/androidz/prod/api/full.json';
    
    constructor(private http: HttpClient) { }
    
  
    getAllSnippets() {
        return this.http.get(this.urlServer);
    }

}