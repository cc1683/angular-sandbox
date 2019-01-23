import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DepartmentService } from '../department.service';


@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments: any = [];


  constructor(private router: Router, private route: ActivatedRoute, private _departmentServices: DepartmentService) { }

  public selectedId;
  public errorMsg;


  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });

    this._departmentServices.getDepartment()
    .subscribe(data => this.departments = data,
               error => this.errorMsg = error);
  }

  onSelect(department) {
    this.router.navigate(['/departments', department.id]);
    // this.router.navigate([department.id], {relativeTo: this.route});

  }

  isSelected(department) {
    return department.id === this.selectedId;
  }

}
