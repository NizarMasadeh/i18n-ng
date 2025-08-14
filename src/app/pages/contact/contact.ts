import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    alert('Message sent successfully! (This is just a demo)');

    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
}