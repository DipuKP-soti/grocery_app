import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../data.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  cardStyle = {
    width: '15rem',
    marginLeft: '15px'
  }

  public categories: any[] = [];
  public catImages: any[] = [];
  catId : any;

  constructor(private dataService: DataService,private router: Router) {
    this.dataService.getCategories().subscribe((data:any)=>{
      this.categories = data.data;
    });
  }

  ngOnInit(): void {
  }

  onClickHandler(category: any){
    // console.log(category)
    this.catId = category.catId
    this.router.navigateByUrl('products/cat/'+this.catId);
  }

}
