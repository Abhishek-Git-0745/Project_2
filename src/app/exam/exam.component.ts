import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';//------
import { SharedDataService } from '../dataservice/shared-data.service';
import { FormDataModel } from '../form-data-model';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.css'
})
export class ExamComponent {
 
  visible: boolean = false;
  errorMessage: string | null = null;
  selectedFile: File | null = null;
  mainForm: FormGroup;     //--------


  constructor(private fb: FormBuilder,private dataservice:SharedDataService) { 
    this.mainForm = this.fb.group({
      sem:['',Validators.required],
      exam:['',Validators.required],
      name:['',Validators.required],
      class:['',Validators.required],
      div:['',Validators.required],
      roll:['',Validators.required],
      mail:['',Validators.required],
      c1:['',Validators.required],
      c2:['',Validators.required],
      c3:['',Validators.required],
      c4:['',Validators.required],
      c5:['',Validators.required],
      c6:['',Validators.required],
      recp:['',Validators.required],
    });
  }

  handleFileInput(event: any): void {
    this.errorMessage = null;
    const file = event.target.files[0];

    if (file) {
      // Check file type
      const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
      if (!allowedTypes.includes(file.type)) {
        this.errorMessage = 'Invalid file type. Please upload JPG, PNG, or PDF files.';
        return;
      }

      // Check file size (in bytes)
      const maxSize = 4 * 1024 * 1024; // 4MB
      if (file.size > maxSize) {
        this.errorMessage = 'File size exceeds 4MB. Please choose a smaller file.';
        return;
      }

      this.selectedFile = file;
    }
  }


  uploadFile(): void {
    if (this.selectedFile) {
      // Perform file upload logic here, e.g., send to a server
      console.log('Uploading file:', this.selectedFile);
      // Reset selected file
      this.selectedFile = null;
    } else {
      this.errorMessage = 'No file selected.';
    }
  }




  onSubmit() {
    // const formData = this.mainForm.value;
    // console.log(formData);

    const formData: FormDataModel = this.mainForm.value;
    console.log(formData);
    this.dataservice.saveFormData(formData).subscribe(() => {
      console.log('Form data saved successfully.');
    });

    // const jsonData = JSON.stringify(formData);
    // const blob = new Blob([jsonData], { type: 'application/json' });
    // const a = document.createElement('a');
    // a.href = URL.createObjectURL(blob);
    // a.download = 'formData.json';
    // document.body.appendChild(a);
    // a.click();
    // document.body.removeChild(a);
  }

  //onclick toggling both
  onClick() {
    //  this.ReadMore = !this.ReadMore; //not equal to condition
    this.visible = !this.visible

  }
}
