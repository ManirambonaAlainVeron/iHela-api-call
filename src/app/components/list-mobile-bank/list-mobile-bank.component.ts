import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-list-mobile-bank',
  templateUrl: './list-mobile-bank.component.html',
  styleUrls: ['./list-mobile-bank.component.css']
})
export class ListMobileBankComponent implements OnInit {

  url_mobile_bank: string = "https://testgate.ihela.online/api/v1/bank/mobile";
  list_mobile_bank = {};

  constructor(private httpservice: HttpService) { }


  ngOnInit(): void {
  }

  get_Mobile_bank_list(url_mobile_bank: string){
    this.httpservice.get_request(url_mobile_bank).subscribe(
      (response)=>{
        this.list_mobile_bank = response;
      }
    )
  }

}
