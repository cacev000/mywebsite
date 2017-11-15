import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactData = [];

  constructor(
    private contactService: ContactService,
    private router: Router
  ) { }

  ngOnInit() {
    this.contactService.getContactData()
    .subscribe(data => {
      console.log(data.resume[0]);
      this.contactData = data.resume[0];
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
