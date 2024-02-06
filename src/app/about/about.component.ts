import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  

  formData: any = {};

  onSubmit() {
    // Log the form data to the console
    console.log('Form Data:', this.formData);

    // Clear the form fields after submission
    this.formData.name = '';
    this.formData.email = '';
    this.formData.message = '';
  }
}
