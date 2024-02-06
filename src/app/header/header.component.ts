import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../dataservice/shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  receivedData: any;
  name:string="";
  studentData: any;

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    this.sharedDataService.sharedData$.subscribe((data) => {
      this.receivedData = data;


      // this.sharedDataService.getStudentById(this.receivedData).subscribe(
      //   (student) => {
      //     if (student) {
      //       this.studentData = student;
      //     } 
      //   },
      //   );


      if (this.receivedData) {
        this.sharedDataService.getNameById(this.receivedData).subscribe(
          name => this.name = name
        );
      }
    });
}
}
