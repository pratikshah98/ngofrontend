import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../service/registeration.service';
import { Router } from '@angular/router';
import { register3 } from '../classes/register3_class';
import { register1 } from '../classes/register1_class';
import { register2 } from '../classes/register2_class';
@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  constructor(private _registrationservice:RegistrationService,private _route:Router) { }
  isLinear = false;
  ngo_email:string;
  viewprofile_arr:any[]=[];
  ngo_name:string;
  ngo_password:string;
  ngo_registration_no:string;
  ngo_logo:string;
  ngo_contact:string;
  paytm_merchant_id:string;
  ngo_address:string;
  ngo_landmark:string;
  ngo_city:string;
  ngo_state:string;
  ngo_pincode:string;
  ngo_nop_name:string;
  check:Object;

  contact_for_donor:string;
  ngo_website:string;
  ngo_facebook:string;
  ngo_twitter:string;
  ngo_instagram:string;

  fk_nop_name:string;
  selectedfile:File=null;
  files:File=null;
  flag:number=0;
  proof_image:File[]=[];
  nop_description:string[]=[];
  a:number;
  //part2:register2[]=null;
  arr:string[]=[];
  i:number=0;
  nop_arr:any=null;

  fk_ngo_nop_name:string="";
  nop_name:string;
  //form: FormGroup;

  ngOnInit(): void {
    this._registrationservice.getallnop().subscribe(
      (data:any)=>{

        this.nop_arr=data;


      }
      );

  this.ngo_email=localStorage.getItem('ngo_email');
  this._registrationservice.viewprofileByNgoId(this.ngo_email).subscribe(
    (data:any)=>{

      this.viewprofile_arr=data;
      console.log(this.viewprofile_arr);
      this.ngo_name=data[0].ngo_name;
      this.ngo_logo=data[0].ngo_logo;
      this.ngo_registration_no=data[0].ngo_registration_no;
      this.ngo_password=data[0].ngo_password;
      this.ngo_email=data[0].ngo_email;
      this.ngo_contact=data[0].ngo_contact;
      this.paytm_merchant_id=data[0].paytm_merchant_id;
      this.ngo_address=data[0].ngo_address;
      this.ngo_landmark=data[0].ngo_landmark;
      this.ngo_city=data[0].ngo_city;
      this.ngo_state=data[0].ngo_state;
      this.ngo_pincode=data[0].ngo_pincode;
      this.ngo_nop_name=data[0].ngo_nop_name;
      this.proof_image=data[0].proof_image;
      this.nop_description=data[0].nop_description;
      this.contact_for_donor=data[0].contact_for_donor;
      this.ngo_website=data[0].ngo_website;
      this.ngo_facebook=data[0].ngo_facebook;
      this.ngo_instagram=data[0].ngo_instagram;
      this.ngo_twitter=data[0].ngo_twitter;
      this.fk_ngo_nop_name=data[0].fk_ngo_nop_name;
      this.fk_nop_name=data[0].fk_nop_name;
      for(var j=0;j<this.viewprofile_arr.length;j++)
      {
        this.arr.push(data[j].fk_nop_name);
        // this.proof_image.push(data[j].proof_image);
      }
      console.log(this.arr);
      console.log(this.proof_image);
    }

    )

  }

  onSubmit1(){}
 onSubmit2(){

 }
 onSubmit3()
 {
  var fd=new FormData();
  console.log(this.ngo_email);
  fd.append('ngo_name',this.ngo_name);
  fd.append('ngo_logo',this.ngo_logo);
  fd.append('ngo_registration_no',this.ngo_registration_no);
  fd.append('ngo_email',this.ngo_email);
  fd.append('ngo_password',this.ngo_password);
  fd.append('ngo_contact',this.ngo_contact);
  // fd.append('paytm_merchant_id',this.paytm_merchant_id);
  fd.append('ngo_address',this.ngo_address);
  fd.append('ngo_landmark',this.ngo_landmark);
  fd.append('ngo_city',this.ngo_city);
  fd.append('ngo_state',this.ngo_state);
  fd.append('ngo_pincode',this.ngo_pincode);
  fd.append('fk_ngo_nop_name',this.fk_ngo_nop_name);

  this._registrationservice.updateprofile1(new register1(this.ngo_name,this.ngo_logo,this.ngo_registration_no,this.ngo_email,this.ngo_password,this.ngo_contact,this.ngo_address,this.ngo_landmark,this.ngo_city,this.ngo_state,this.ngo_pincode,this.fk_ngo_nop_name)).subscribe(
    (data:any[])=>
    {

      console.log(data);
      //localStorage.setItem('ngo_email',this.ngo_email);

    }
    );
    console.log(this.ngo_email,this.fk_ngo_nop_name);
    for(let k=0;k<this.arr.length;k++)
    {
      var fd1=new FormData();
      fd1.append('fk_ngo_email',this.ngo_email);
      fd1.append('fk_nop_name',this.arr[k]);
      fd1.append('proof_image',this.proof_image[k].name);
      fd1.append('nop_description',this.nop_description[k]);
      this._registrationservice.updateprofile2(new register2(this.ngo_email,this.arr[k],"hello",this.nop_description[k])).subscribe(
      (data:any)=>{
        console.log(data);
      }
      );
    }
    console.log(this.ngo_email,this.contact_for_donor,this.ngo_website,this.ngo_facebook,this.ngo_instagram,this.ngo_twitter);

    var fd2=new FormData();
    fd2.append('fk_ngo_email',this.ngo_email);
    fd2.append('contact_for_donor',this.contact_for_donor);
    fd2.append('ngo_website',this.ngo_website);
    fd2.append('ngo_facebook',this.ngo_facebook);
    fd2.append('ngo_instagram',this.ngo_instagram);
    fd2.append('ngo_twitter',this.ngo_twitter);
    this._registrationservice.updateprofile3(new register3(this.ngo_email,this.contact_for_donor,this.ngo_website,this.ngo_facebook,this.ngo_instagram,this.ngo_twitter)).subscribe(
      (data:register3[])=>{
        console.log(data);
        alert('record Updated succesfully.')
        this._route.navigate(['/ ']);
      }
      );

 }
 onproof(value)
 {

   this.selectedfile=<File>value.target.files[0];
   //console.log(this.selectedfile.name);
   this.proof_image.push(this.selectedfile);
   //console.log(this.proof_image);
 }
 onselect(value)
 {
   this.selectedfile=<File>value.target.files[0];
 }
 Editdescription(item,i)
  {
    let temp:string;
    temp=item.target.value.toString();
    this.nop_description[i]=temp;
  }

  
 //nopmanage($event){}
 nopmanage(item)
  {
    // alert(this.nop_arr)
    console.log('called outside',item)
    if(item.target.checked)
    {
      console.log('called if')
      let temp:string;
      temp=item.target.value.toString();
      this.arr.push(temp);
      this.viewprofile_arr.push({fk_nop_name:temp});
      // alert(temp);
      // this.viewprofile_arr[this.a].fk_nop_name=temp;
            this.fk_ngo_nop_name=this.arr.toString();
      console.log('cheking arr',this.fk_ngo_nop_name);
    }
    else
    {
      // alert('called else')
      let temp:string;
      temp=item.target.value.toString();
      let index:number=this.arr.indexOf(temp);
      this.arr.splice(index,1);
      this.viewprofile_arr.splice(index,1);
      this.nop_description.slice(index,1);
      this.fk_ngo_nop_name=this.arr.toString();
    }

  }

 addform(f){}


}
