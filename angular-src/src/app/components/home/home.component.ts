import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../services/resume.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  resumeData = [];

  constructor(
    private resumeService: ResumeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.resumeService.getResumeData()
    .subscribe(data => {
      this.resumeData = data.resume[0];
    },
    err => {
      return err;
    });
  }

  goToPortfolio() {
    this.router.navigate(['/portfolio']);
  }
}
