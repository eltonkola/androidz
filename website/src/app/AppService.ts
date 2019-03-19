import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
    

  constructor(private http: HttpClient) { }


    search_word(term){
        return this.http.get(this.url + term).map(res => {
        	return res.json().map(item => {
        		return item.word
        	})
        })
    }
}