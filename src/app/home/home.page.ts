import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newsapi :any = "https://newsapi.org/v2/top-headlines?sources=google-news-br&apiKey=0eb4decc796a4b9d81bfe6655bcd463f";
articles: any=[];
  
  
  constructor(private http:HttpClient ) {
  this.showNews();
  }
  
  showNews()
  
  {
  
  this.http.get(this.newsapi).subscribe ((response:any)=>{
  
  console.log(response);
  this.articles = response.articles;
  
  },
  
  error=>{
  
  console.log(error);
  
  })
  
  }
  
  }

