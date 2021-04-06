import { Component, OnInit } from '@angular/core';
import{Http ,Response ,Headers} from '@angular/http';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  // products = [];
  // fetchData = () => {
  //   this.http.get("http://localhost:5555/products").subscribe(
  //     (res: Response) => {
  //       this.products = res.json();
  //     }
  //   )
  // }

  ngOnInit(): void {
    // this.fetchData();
  }

}
