import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products : any[]=[{title:'text'}];
  constructor(httpClient: HttpClient)
  {
    const productIds = [1,2,3,4,5];

    // for(let i = 0; i< productIds.length;i++){
    //   httpClient.get<any>(`https://dummyjson.com/products/${productIds[i]}`).subscribe((val) => {
    //    timer(1000).subscribe(_=>{
    //     this.products.push(val);
    //    } )
    //   });
    // }


  // httpClient.get<any>('https://dummyjson.com/products').subscribe((val) => console.log(val));
  }
}
