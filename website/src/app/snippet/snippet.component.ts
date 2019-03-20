
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';
import { SnippetFull } from '../service/snippet.full';

@Component({
  selector: 'app-snippet',
  templateUrl: './snippet.component.html',
  styleUrls: ['./snippet.component.css']
})
export class SnippetComponent implements OnInit {
  
  snippet: SnippetFull
  snippetId: string;
  loading = true;
  
  constructor(private apiService: ApiService, private route: ActivatedRoute) {
  }


 ngOnInit() {
    this.route.params.subscribe( params =>{
        this.snippetId = params['id'];
        this.getDetails();
    });

  }


  getDetails(){
    this.apiService.getSnippet(this.snippetId)
    .subscribe(data => {
      console.log(data)
        this.snippet = data

      this.loading = false;
    });

  }


}
