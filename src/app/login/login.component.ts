import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedDataService } from '../dataservice/shared-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private http: HttpClient,private sharedDataService: SharedDataService) { }

  getUsers(): Observable<any> {
    return this.http.get('assets/data/users.json');
  }
  datat:any;
  
  searchId:any;


  getdata(data:any){
    console.warn(data);
  }

  sharedData: any;
  sendData(): void {
    this.sharedDataService.setData(this.sharedData);
  }


  searchById(): void {
    if (this.searchId) {
      this.sharedDataService.getNameById(this.searchId).subscribe(
        name => {
          if (name !== 'Unknown') {
            alert('Success! ID found. Name: ' + name);
          } else {
            alert('Invalid ID. ID not found.');
          }
        }
      );
    } else {
      alert('Please enter an ID to search.');
    }
  }

}
