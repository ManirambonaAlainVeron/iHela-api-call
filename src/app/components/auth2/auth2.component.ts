import { Component, OnInit } from '@angular/core';
import { I_Auth2 } from 'src/app/models/I_Auth2';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-auth2',
  templateUrl: './auth2.component.html',
  styleUrls: ['./auth2.component.css']
})
export class Auth2Component implements OnInit {


  url_post_access_token: string = "https://testgate.ihela.online/oAuth2/token/";
  data_access_token = {};

  constructor(private httpservice: HttpService) { }

  ngOnInit(): void {
  }

  post_Access_Token(url_post_access_token:string, data_access_token: I_Auth2){
    this.httpservice
    .post_request(url_post_access_token, data_access_token)
    .subscribe();
  }
}
