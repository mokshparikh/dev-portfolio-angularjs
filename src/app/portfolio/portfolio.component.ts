import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects: Project[] = [];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  angular: boolean = false;
  react: boolean = false;
  html: boolean = false;
  css: boolean = false;
  nodejs: boolean = false;
  filtering: boolean = false;

  constructor(private titleService: Title, private projectServices: ProjectsService) {
    this.titleService.setTitle('Moksh Parikh - Portfolio');
  }

  ngOnInit(): void {
    this.projects = this.projectServices.GetProjects();
  }

  toggleFilter() {
    this.isCollapsed = !this.isCollapsed;
  }

  Filter() {
    let filterTags: Tag[] = [];

    // Push selected tags into filterTags array
    if (this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    if (this.react) {
      filterTags.push(Tag.React);
    }
    if (this.html) {
      filterTags.push(Tag.HTML);
    }
    if (this.css) {
      filterTags.push(Tag.CSS);
    }
    if (this.nodejs) {
      filterTags.push(Tag.NodeJs);
    }

    // If any filter is selected, set filtering to true
    if (this.typescript || this.angular || this.react || this.html || this.css || this.nodejs) {
      this.filtering = true;
    } else {
      this.filtering = false;
    }

    // Get filtered projects based on selected tags
    this.projects = this.projectServices.GetProjectFilter(filterTags);
  }

  ResetFilters() {
    // Reset all filter checkboxes
    this.typescript = false;
    this.angular = false;
    this.react = false;
    this.html = false;
    this.css = false;
    this.nodejs = false;
    this.filtering = false;

    // Reset the project list to unfiltered state
    this.projects = this.projectServices.GetProjects();
  }
}