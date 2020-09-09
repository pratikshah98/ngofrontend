import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { sendmail } from '../classes/sendmail';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private transaction_url='http://localhost:3000/trancationbynop/';
  private transactiontotal_url='http://localhost:3000/trancationtotalbynop/';
  private transactionbyallnop='http://localhost:3000/trancationbyallnop/';
  private ngo:string="http://localhost:3000/ngo/";
  private detailevent='http://localhost:3000/event/';

  constructor(private _http:HttpClient) { }
  getAllTransactionByNopName(nop_name,ngo_email)
  {
    //console.log(ngo_email+nop_name);
    return this._http.get(this.transaction_url + nop_name + "/" + ngo_email);
  }
  getAllTransactionTotalByNopName(ngo_email)
  {
    //console.log(ngo_email+nop_name);
    return this._http.get(this.transactiontotal_url+ngo_email );
  }
  getAllTransactionByAllNopName(ngo_email)
  {
    //console.log(ngo_email+nop_name);
    return this._http.get(this.transactionbyallnop+ngo_email );
  }
  donorDetailUsingByNgoEmail(ngo_email,date1,place,time,nop_name)
  {
    
    return this._http.get(this.detailevent+ ngo_email + "/" + date1 + "/" + place + "/" + time + "/" + nop_name );
  }
  getNgoDetailByNgoEmailId(ngo_email){
    
    return this._http.get(this.ngo+ngo_email);
  }
}
