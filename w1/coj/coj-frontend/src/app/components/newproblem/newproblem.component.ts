import { Component, OnInit } from '@angular/core';
import { Problem } from '../../models/problem.model';
import { DataService } from '../../services/data.service';
import { DEFAULT_PROBLEM } from '../../defaultproblem';

@Component({
  selector: 'app-newproblem',
  templateUrl: './newproblem.component.html',
  styleUrls: ['./newproblem.component.css']
})
export class NewproblemComponent implements OnInit {
  newProblem: Problem = Object.assign({}, DEFAULT_PROBLEM);
  difficulties: string[] = ['easy', 'medium', 'hard', 'super'];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  addProblem() {
    this.dataService.addProblem(this.newProblem);
    this.newProblem = Object.assign({}, DEFAULT_PROBLEM);
  }

}
