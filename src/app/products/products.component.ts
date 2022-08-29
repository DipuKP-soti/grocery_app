import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products : any[] = [];

  public catId : any;

  public subId : any;

  cardStyle = {
    width: '18rem',
    marginBottom: '10px'
  };

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {

    this.catId = activatedRoute.snapshot.paramMap.get('catId');

    if(this.catId){

      
      this.dataService.getProductsByCatId(this.catId).subscribe((response:any)=>{
        this.products = response.data;
      })
    }

    this.subId = activatedRoute.snapshot.paramMap.get('subId');

    if(this.subId){
      
      this.dataService.getProductsBySubId(this.subId).subscribe((response: any)=>{
        this.products = response.data;
      })
    }
  }

  ngOnInit(): void {
  }


}
