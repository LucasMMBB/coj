import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Problem } from '../../models/problem.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-problemdetail',
  templateUrl: './problemdetail.component.html',
  styleUrls: ['./problemdetail.component.css']
})
export class ProblemdetailComponent implements OnInit {
  problem: Problem;

  constructor(private dataService:DataService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // subscribe: when params change, this.problem will be updated
    // + sign here means converting string to integer
    this.route.params.subscribe(params => {
      this.dataService.getProblem(+params['id'])
          .then(problem => this.problem = problem);
    });
  }

}
