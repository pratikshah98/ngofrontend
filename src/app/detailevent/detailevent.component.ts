import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../service/transaction.service';

import { sendmail } from '../classes/sendmail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailevent',
  templateUrl: './detailevent.component.html',
  styleUrls: ['./detailevent.component.css']
})
export class DetaileventComponent implements OnInit {
pay_to_ngo_email:string;
date1:Date;
time:Date;
fk_nop_name:string;
message:string;
ngodetail_arr:[]=[];
ngo_name:string;
place:string;
  constructor(private _transactionService:TransactionService,private _route:Router) { }

  ngOnInit(): void {
    // onSubmit()
    // {   
    //    // console.log(this.pay_to_ngo_email,this.message,this.subject);
         
          //this._route.navigate(['/']);
          this.pay_to_ngo_email=localStorage.getItem('ngo_email');
          this._transactionService.getNgoDetailByNgoEmailId(this.pay_to_ngo_email).subscribe(
            (data:any)=>{
              this.ngodetail_arr=data;
              this.ngo_name=data[0].ngo_name;
              console.log(this.ngodetail_arr);
              
            });
  
        }
        
  // }
  onSubmit()
  {   
      console.log(this.pay_to_ngo_email,this.time,this.place,this.fk_nop_name,this.date1);
        this._transactionService.donorDetailUsingByNgoEmail(this.pay_to_ngo_email,this.date1,this.place,this.time,this.fk_nop_name).subscribe(
          (data:any)=>
          {
           
          }
        )
        alert('Inviation will send to the donor email.');

        // var fd=new FormData();
        // fd.append('ngo_email',this.ngo_email);
        // fd.append('subject',this.subject);
        // fd.append('ngo_password',this.ngo_password);
        // this._loginser.sendMail(fd).subscribe(
        // (data:sendmail)=>
        // {}
        // )
        
        //this._route.navigate(['/']);

      }
   
  addform(f)
  {
    //f.resetForm();
  }
  selectChangeHandler(event)
  {
    this.fk_nop_name=event.target.value;
      
      console.log(this.fk_nop_name);
      //this.flag=true;
      // this._nopService.getNgoDetailByNopName(this.fk_nop_name).subscribe(
      //   (data:any)=>{
      //     this.ngodetail_arr=data;
         
      //     console.log(this.ngodetail_arr);
      //   });
    
    //console.log(this.ngo_name);
  
  }
  

}
