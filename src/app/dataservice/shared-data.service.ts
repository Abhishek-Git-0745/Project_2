import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormDataModel } from '../form-data-model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private dataSubject = new BehaviorSubject<any>(null);
  public sharedData$ = this.dataSubject.asObservable();
  private readonly datUrl = 'assets/data/form-data.json';


  constructor(private http: HttpClient) { }
  setData(data: any): void {
    this.dataSubject.next(data);
  }

  saveFormData(formData: FormDataModel): Observable<void> {
    const jsonData = JSON.stringify(formData);
    return this.http.put<void>(this.datUrl, jsonData);
  }

  // getNameById(id: number): Observable<string> {
  //   return this.http.get<any[]>('assets\data\form-data.json').pipe(
  //     map(data => {
  //       const match = data.find(item => item.id === id);
  //       return match ? match.name : 'Unknown';
  //     })
  //   );
  // }


  private dataUrl = 'assets/data/students.json'; // Replace with the actual path to your JSON file


 
  getData(): Observable<any> {
    return this.http.get(this.dataUrl);
  }
  
  // getNameById(id: number): Observable<string> {
  //   return this.http.get<any[]>('assets\data\students.json').pipe(
  //     map(data => {
  //       const match = data.find(item => item.id === id);
  //       return match ? match.name : 'Unknown';
  //     })
  //   );
  // }


  getNameById(id: number): Observable<string> {
    return this.http.get<any[]>('assets/data/students.json').pipe(
      map(data => {
        const match = data.find(item => item.id === id);
        return match ? match.name : 'Unknown';
      })
    );
  }

  getStudentById(id: string): Observable<any> {
    return this.getData().pipe(
      map((data: any) => data.find((student: { id: string; }) => student.id === id))
    );
  }
}
