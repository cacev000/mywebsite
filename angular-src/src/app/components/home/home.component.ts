import { Component, OnInit } from '@angular/core';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  resumeData = [];

  constructor(private resumeService: ResumeService) { }

  ngOnInit() {
    this.resumeService.getResumeData().subscribe(data => {
      console.log(data.resume[0]);
      this.resumeData = data.resume[0];
    });

  }

}
