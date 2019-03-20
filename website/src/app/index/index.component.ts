
import { Component, OnInit } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  title = 'Index';

  constructor() { }

  ngOnInit() {
  }

}
