import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ngo } from '../classes/ngo';
import { sendmail } from '../classes/sendmail';
import { register1 } from '../classes/register1_class';
import { register3 } from '../classes/register3_class';
import { register2 } from '../classes/register2_class';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  // private ngo:string="http://localhost:3000/ngo/";

  // private forgetpassword:string="http://localhost:3000/forgetpassword/";

  private register1_url:string='http://localhost:3000/register1/';
  private register2_url:string='http://localhost:3000/register2/';
  private nop:string='http://localhost:3000/nop/';
  private register3_url:string='http://localhost:3000/register3/';
  private viewprofile:string='http://localhost:3000/viewprofile/';
  private updateprofile1_url='http://localhost:3000/updateprofile1/';
  private updateprofile2_url='http://localhost:3000/updateprofile2/';
  private updateprofile3_url='http://localhost:3000/updateprofile3/';
  constructor(private _http:HttpClient) { }
  // getLogin(item:ngo){
  //   let body=JSON.stringify(item);
  //   let head1=new HttpHeaders().set('Content-Type','application/json');
  // return this._http.post(this.ngo+item.ngo_email,body,{headers:head1});
  // }

  getallnop()
  {
    return this._http.get(this.nop);
  }
  register1(item:FormData)
  {
    // let body=JSON.stringify(item);
    // let head1=new HttpHeaders().set('Content-Type','application/json');
    console.log(item);
    return this._http.post(this.register1_url,item);
  }
  updateprofile1(item:register1)
  { let body=JSON.stringify(item);
     let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.updateprofile1_url,body,{headers:head1});
  }
  updateprofile2(item:register2)
  {
    let body=JSON.stringify(item);
     let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.updateprofile2_url,body,{headers:head1});
  }
  updateprofile3(item:register3)
  {console.log(item);
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    
    return this._http.put(this.updateprofile3_url,item);
  }
  add_nop_description(item:FormData)
  {
    console.log(item);
    return this._http.post(this.register2_url,item);
  }
  add_final_details(item:register3)
  {
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    console.log(item);
    return this._http.post(this.register3_url,body,{headers:head1});
  }
  getnopbyemail(ngo_email)
  {
    return this._http.get(this.register1_url + ngo_email);
  }
  // getPasswordById(ngo_email:string){
  //   return this._http.get(this.ngo+ngo_email);
  // }
  // sendMail(item:sendmail){
  //   let body=JSON.stringify(item);
  //   let head1=new HttpHeaders().set('Content-Type','application/json');
  // return this._http.post(this.forgetpassword,body,{headers:head1});
  // }

  viewprofileByNgoId(ngo_email)
  {
    console.log(ngo_email);
    return this._http.get(this.viewprofile + ngo_email);
  }

}

