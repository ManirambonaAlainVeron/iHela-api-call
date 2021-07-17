import { Component, OnInit } from '@angular/core';
import { I_Bill_verification } from 'src/app/models/I_Bill_verification';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-bill-verification',
  templateUrl: './bill-verification.component.html',
  styleUrls: ['./bill-verification.component.css']
})
export class BillVerificationComponent implements OnInit {

  url_bill_verification: string = "https://testgate.ihela.online/api/v1/payments/bill/verify/";
  data_bill_verification = {};
  postfix: string = "";
  headers_bill_verification : string = "Bearer"+this.postfix;

  constructor(private httpservice: HttpService) { }

  ngOnInit(): void {
  }

  bill_verification(url_bill_verification:string, data_bill_verification: I_Bill_verification, headers_bill_verification: string){
    this.httpservice.post_request(url_bill_verification, data_bill_verification, headers_bill_verification)
    .subscribe();
  }
}
