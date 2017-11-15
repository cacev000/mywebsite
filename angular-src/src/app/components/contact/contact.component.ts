import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../services/resume.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  resumeData = [];

  constructor(
    private resumeService: ResumeService,
    private router: Router
  ) { }

  ngOnInit() {
    this.resumeService.getResumeData()
    .subscribe(data => {
      console.log(data.resume[0]);
      this.resumeData = data.resume[0];
    },
    err => {
      return err;
    });
  }

  goHome() {
    this.router.navigate(['/']);
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }

}
