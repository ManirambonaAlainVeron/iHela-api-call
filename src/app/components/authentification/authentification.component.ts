import { Component, OnInit } from '@angular/core';
import { I_Authentification } from 'src/app/models/I_Authification';
import { I_header_user_token } from 'src/app/models/I_header_user_token';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  url_post_user_token: string = "https://testgate.ihela.online/api/v1/users/login/";
  data_user_token = {};
  header_user_token ={
    accept : "",
    X_iHela_Signature : ""
  };

  constructor(private httpservice: HttpService) { }

  ngOnInit(): void {
  }

  post_User_token(url_post_user_token:string, data_user_token: I_Authentification, header_user_token:I_header_user_token){
    this.httpservice
    .post_request(url_post_user_token, data_user_token, header_user_token)
    .subscribe();
  }



  
}
