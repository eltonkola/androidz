import { Component } from '@angular/core';

import {FormControl} from '@angular/forms';
import {AppService} from './app.service'
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  title = 'website';

  searchTerm: FormControl = new FormControl();

  	searchResult = [];

   constructor(private service: AppService){


     this.service.getConfig()
    .subscribe(data => {
      console.log(data);
       // heroesUrl: data['heroesUrl'],
        //textfile:  data['textfile']
    });

   	this.searchTerm.valueChanges
   		//.debounceTime(400) 
   		.subscribe(data => {
        console.log(response);
   				
        /*
        this.service.search_word(data).subscribe(response =>{
   				console.log(response);
   				this.searchResult = response
         })
         */

   		})

   //app.service
  //
}

}