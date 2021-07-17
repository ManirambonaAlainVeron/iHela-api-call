import { Component, OnInit } from '@angular/core';
import { I_merchant_cash } from 'src/app/models/I_merchant_cash';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-merchant-cash',
  templateUrl: './merchant-cash.component.html',
  styleUrls: ['./merchant-cash.component.css']
})
export class MerchantCashComponent implements OnInit {

  url_Cash_in_operation: string = "https://testgate.ihela.online/api/v1/payments/cash-in/";
  data_Cash_in_operation = {};
  postfix: string = "";
  header_Cash_in_operation: string = "Bearer"+this.postfix;

  constructor(private httpservice : HttpService) { }

  ngOnInit(): void {
  }

  post_Cash_in_operation(url_Cash_in_operation:string, data_Cash_in_operation: I_merchant_cash, header_Cash_in_operation: string){
    this.httpservice.post_request(url_Cash_in_operation, data_Cash_in_operation, header_Cash_in_operation)
    .subscribe();
  }

}
