import { Injectable } from '@angular/core';
import { Project } from '../_models/project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 0,
      name: 'Personal Portfolio',
      pictures: [
        "../../assets/Personal Portfolio.png",
        "../../assets/portfolio Project.png",
        "../../assets/Portfolio Resume.png",
        "../../assets/Portfolio Skils.png",
        "../../assets/Portfolio Skils.png",
      ],
      projectLink: '',
      summary: 'Personal Portfolio ',
      description: 'I have developed Personal Portfolio Website using Angular Js. Functional: Contact and Interactive map View.',
      tags: [Tag.ANGULAR, Tag.HTML, Tag.CSS]
    },
    {
      id: 1,
      name: 'Food Order Website',
      pictures: [
        "../../assets/Food Website.png",
        "../../assets/Food Order Cart.png",
        "../../assets/Food Order Filter.png",
        "../../assets/Food Order Dish.png",
      ],
      projectLink: '',
      summary: 'Order Food Online ',
      description: '',
      tags: [Tag.ANGULAR, Tag.HTML, Tag.CSS]
    },
    {
      id: 3,
      name: 'Sample IOT App',
      pictures: [
        "../../assets/image 1.jpg",
        "../../assets/image 2.jpg",
        "../../assets/image 3.jpg"
      ],
      projectLink: '',
      summary: 'Test Description',
      description: '',
      tags: [Tag.Java, Tag.NodeJs]
    }
  ];

  constructor() { }

  GetProjects() {
    return this.projects;
  }

  GetProjectById(id: number): Project {
    let project = this.projects.find(project => project.id === id);

    if (!project) {
      throw new Error('There is no project with id: ' + id);
    }
    
    return project;
  }

  GetProjectFilter(filterTags: Tag[]) {
    let filteredprojects: Project[] = [];

    this.projects.forEach(function(project) {
      let foundAll = true;

      filterTags.forEach(function(filterTag: Tag) {
        if (!project.tags.includes(filterTag)) {
          foundAll = false;
        }
      });

      if (foundAll) {
        filteredprojects.push(project);
      }
    });

    return filteredprojects;
  }
}
