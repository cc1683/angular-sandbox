import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DepartmentService } from '../department.service';


@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  public departmentId;
  departmentName: string;
  departments: any = [];
  public errorMsg;

  constructor(private route: ActivatedRoute, private router: Router,  private _departmentServices: DepartmentService) { } 

  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this._departmentServices.getDepartment()
    .subscribe(data => this.departments = data,
               error => this.errorMsg = error);

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      let name = params.get('name');
      this.departmentId = id;
      this.departmentName = name;
    });

  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    let previousName = this.departments[previousId].name;
    this.router.navigate(['/departments', previousId, previousName]);
  }

  goNext() {
    let nextId = this.departmentId + 1;
    let nextName = this.departments[nextId].name;
    this.router.navigate(['/departments', nextId, nextName]);
  }

  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/departments', {id: selectedId}]);
  }

  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.route});
  }

}
