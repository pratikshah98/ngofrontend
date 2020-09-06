import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
//import { DataTableDataSource, DataTableItem } from './data-table-datasource';
import { RegistrationService } from '../service/registeration.service';
import { MatTableDataSource } from '@angular/material/table';
import { Data } from '@angular/router';
import { TransactionService } from '../service/transaction.service';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  //@ViewChild(MatTable) table: MatTable<DataTableItem>;
  //dataSource: MatTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['donor_email', 'donor_name','donor_contact','donor_PAN_no','transaction_amt','transaction_date'];
  nop_arr:Data[]=[];
  transaction_arr:Data[]=[];
  dataSource = new MatTableDataSource();
  fk_nop_name:string;
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngo_email:string;
  constructor(private LoginService:RegistrationService,private Transaction_Service:TransactionService) { }
  onclick(){}
  selectChangeHandler(event)
  {
    this.fk_nop_name=event.target.value;
    
       // alert(this.fk_nop_name);    
        this.Transaction_Service.getAllTransactionByNopName(this.fk_nop_name,this.ngo_email).subscribe((data:Data[]) => {
          console.log(data);
          this.transaction_arr = data;
          
          console.log(data);
          this.dataSource.data = this.transaction_arr;
        });
      
    
  
  
  }
  
   onall()
  {
    this.Transaction_Service.getAllTransactionByAllNopName(this.ngo_email).subscribe((data:Data[]) => {
      console.log(data);
      this.transaction_arr = data;
      
      console.log(data);
      this.dataSource.data = this.transaction_arr;
    });
  }
  ngOnInit() {
   this.ngo_email=localStorage.getItem('ngo_email');
    this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
    this.LoginService.getallnop().subscribe((data:Data[]) => {
      console.log(data);
      this.nop_arr = data;
      
      console.log(data);
  
    });
    this.onall();
  }

  ngAfterViewInit() {
 
  }
}
