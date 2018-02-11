import { Routes, RouterModule } from '@angular/router';
import { ProblemlistComponent } from './components/problemlist/problemlist.component';
import { ProblemdetailComponent } from './components/problemdetail/problemdetail.component';
import { Problem } from './models/problem.model';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'problems',
        pathMatch: 'full'
    },
    {
        path: 'problems',
        component:ProblemlistComponent 
    },
    {
        path: 'problems/:id',
        component:ProblemdetailComponent 
    },
    {
        path: '**',
        redirectTo: 'problems'
    }   
];

export const routing = RouterModule.forRoot(routes);