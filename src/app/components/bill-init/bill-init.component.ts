import { Component, OnInit } from '@angular/core';
import { I_Bill_init } from 'src/app/models/I_Bill_init';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-bill-init',
  templateUrl: './bill-init.component.html',
  styleUrls: ['./bill-init.component.css']
})
export class BillInitComponent implements OnInit {

  url_bill_init: string = "https://testgate.ihela.online/api/v1/payments/bill/init/";
  data_bill_init = {};
  postfix: string = "";
  headers_bill_init : string = "Bearer"+this.postfix;

  constructor(private httpservice: HttpService) { }

  ngOnInit(): void {
  }

  bill_Init(url_bill_init:string, data_bill_init: I_Bill_init, headers_bill_init: string){
    this.httpservice.post_request(url_bill_init, data_bill_init, headers_bill_init)
    .subscribe();
  }

}
