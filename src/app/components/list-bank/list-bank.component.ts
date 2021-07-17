import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-list-bank',
  templateUrl: './list-bank.component.html',
  styleUrls: ['./list-bank.component.css']
})
export class ListBankComponent implements OnInit {

  url_bank_list: string = "https://testgate.ihela.online/api/v1/bank";
  list_bank = {};

  constructor(private httpservice: HttpService) { }

  ngOnInit(): void {
  }

  get_Bank_list(url_bank_list: string){
    this.httpservice.get_request(url_bank_list).subscribe(
      (response)=>{
        this.list_bank = (response);
      }
    )
  }

}
