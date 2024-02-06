import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ResultComponent } from './result/result.component';
import { ExamComponent } from './exam/exam.component';
import { NoticeComponent } from './notice/notice.component';
import { AbsoluteSourceSpan } from '@angular/compiler';
import { AboutComponent } from './about/about.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {
    path:'result',
    component:ResultComponent
  },
  {
    path:'',
    component:LoginComponent,
  },
  {
    path:'exam',
    component:ExamComponent
  },
  {
    path:'notice',
    component:NoticeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'resu',
    component:ResultComponent
  },
  {
    path: 'pay', 
    component: PaymentComponent 
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
