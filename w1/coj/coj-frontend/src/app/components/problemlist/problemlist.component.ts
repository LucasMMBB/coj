import { Component, OnInit } from '@angular/core';

import { Problem } from '../../models/problem.model';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-problemlist',
  templateUrl: './problemlist.component.html',
  styleUrls: ['./problemlist.component.css']
})
export class ProblemlistComponent implements OnInit {
  
  problems: Problem[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getProblems();
  }

  getProblems(){
  	this.problems = this.dataService.getProblems();
  }

}
