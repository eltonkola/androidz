import {Component, OnInit} from '@angular/core';
import {ApiService} from '../service/api.service';
import {Observable, of} from 'rxjs';
import {FormControl} from '@angular/forms';
import {startWith} from 'rxjs/operators';

import {SnippetQuick} from '../service/snippet.quick';
import {catchError, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title  = 'AndroidZ';

  linkx = [
    {
      title: 'Arkivi 1',
      url: 'data2',
    },
    {
      title: 'Arkivi 2',
      url: 'data2',
    },
    {
      title: 'Arkivi 3',
      url: 'data2',
    }
  ];


  myControl = new FormControl();
  filteredOptions: Observable<SnippetQuick[]>;
  loading = true;
  allSnippets: SnippetQuick[] = [];

  ngOnInit() {
  }


  private _filter(value: string): SnippetQuick[] {
    const filterValue = value.toLowerCase();
    return this.allSnippets
      .filter(option => option.title.toLowerCase().includes(filterValue))
  }

  constructor(private apiService: ApiService) {

    this.apiService.getSnippets()
      .subscribe(data => {
        console.log(data);
        this.allSnippets = data;

        this.filteredOptions = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(value => this._filter(value))
          );

        this.loading = false;
      });

  }



}
