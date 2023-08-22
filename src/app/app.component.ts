import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any[] = [];

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
 // this.http.get('https://api.spacexdata.com/v4/rockets')
   this.http.get('https://api.escuelajs.co/api/v1/products')
    .subscribe((data: any) => {
      this.data = data;

      console.log(data); 


      
    })
  }
}
