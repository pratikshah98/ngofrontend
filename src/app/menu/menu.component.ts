import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
ngo_email:string;
ngo_password:string;
  constructor(private breakpointObserver: BreakpointObserver,private _route:Router) { }
  onclick()
  {
    this._route.navigate(['']);
 
  }
  onclickmenu(){}
  ngOnInit(): void {
  }

}
