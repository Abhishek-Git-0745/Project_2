import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../dataservice/shared-data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent implements OnInit {
  prnNumber: string = ''; // Replace with actual PRN number
  studentData: any;
  errorMessage: string = '';
  receivedData: any;
  name:string=""

  constructor(private dataService: SharedDataService) {}

  // ngOnInit() {
  //   this.dataService.sharedData$.subscribe((data) => {
  //     this.receivedData = data;

  //     if (this.receivedData) {
  //       this.dataService.getNameById(this.receivedData).subscribe(
  //         name => this.name = name
  //       );
  //     }
  //   });
    

  //   this.fetchStudentData();
  // }
  ngOnInit() {
    this.dataService.sharedData$.subscribe((data) => {
      this.receivedData = data;

      if (this.receivedData) {
        this.dataService.getNameById(this.receivedData).subscribe(
          name => this.name = name
        );
      }
    });
  }

  // fetchStudentData() {
  //   this.errorMessage = '';

  //   if (this.prnNumber.trim() === '') {
  //     // Handle case where PRN input is empty
  //     this.errorMessage = 'Please enter a PRN.';
  //     return;
  //   }

  //   this.dataService.getStudentById(this.prnNumber).subscribe(
  //     (student) => {
  //       if (student) {
  //         this.studentData = student;
  //       } else {
  //         // Handle the case where PRN is not found
  //         console.error(`Student with PRN ${this.prnNumber} not found.`);
  //         this.errorMessage = `Student with PRN ${this.prnNumber} not found.`;
          
  //       }
  //     },
  //     (error) => {
  //       console.error('Error fetching student data:', error);
  //       alert("invalid prn")
  //     }
  //   );
  // }

  fetchStudentData() {
    this.errorMessage = '';

    if (!this.receivedData) {
      // Handle case where receivedData is empty or falsy
      this.errorMessage = 'No PRN data available.';
      return;
    }

    this.dataService.getStudentById(this.receivedData).subscribe(
      (student) => {
        if (student) {
          this.studentData = student;
        } else {
          // Handle the case where PRN is not found
          console.error(`Student with PRN ${this.receivedData} not found.`);
          this.errorMessage = `Student with PRN ${this.receivedData} not found.`;
        }
      },
      (error) => {
        console.error('Error fetching student data:', error);
        alert("Invalid PRN");
      }
    );
  }
}
