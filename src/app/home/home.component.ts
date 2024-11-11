import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  featuredProject={} as Project;
 constructor(private titleService: Title ,private projectservice:ProjectsService){
  this.titleService.setTitle('Moksh Parikh - Home');
 }
 ngOnInit(): void {
  this.featuredProject = this.projectservice.GetProjectById(0);
 }
}

