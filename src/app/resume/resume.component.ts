import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  isExperienceOpen: boolean = false;
  isEducationOpen: boolean = false;
  isCertificationOpen: boolean = false;
  isSkillsOpen: boolean = false;

  private link: HTMLAnchorElement;

  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle('Moksh Parikh - Resume');
    this.link = this.renderer.createElement('a');
  }

  downloadFile() {
    this.link.setAttribute('target', '_blank');
    this.link.setAttribute('href', '../../assets/Moksh resume.pdf');
    this.link.setAttribute('download', 'Resume.pdf');
    this.link.click();
    this.link.remove();
  }
}