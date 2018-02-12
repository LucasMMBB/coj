import { Component, OnInit } from '@angular/core';

import { Problem } from '../../models/problem.model';

import { DataService } from '../../services/data.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-problemlist',
  templateUrl: './problemlist.component.html',
  styleUrls: ['./problemlist.component.css']
})
export class ProblemlistComponent implements OnInit {

  problems: Problem[];
  
  subscriptionProblems: Subscription;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getProblems();
  }

  ngOnDestroy(){
    this.subscriptionProblems.unsubscribe();
  }

  getProblems(){
      this.subscriptionProblems = this.dataService.getProblems()
      .subscribe(problems => this.problems = problems);
  }

}
