import { Component, OnInit } from '@angular/core';
import { ProjectService} from "./project.service";

@Component({
  selector: 'project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  data:any;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.getData().subscribe((result)=>{console.warn("result", result)
      this.data=result})
  }

}
