import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product:any;
  prodId : any;

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {

    this.prodId = this.activatedRoute.snapshot.paramMap.get('id');


    this.dataService.getProductById(this.prodId).subscribe((response:any)=>{
      this.product = response.data;
    })
  }

  ngOnInit(): void {
  }

}
