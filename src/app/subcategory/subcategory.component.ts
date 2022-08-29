import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  public subId : any;
  public catId: any;

  subCategoryStyle = {
    width: '20%',
    marginRight : '0'
  }

  public subCategories : any[] = [];

  constructor(private dataService: DataService, private router: Router,private activatedRoute: ActivatedRoute) {
    this.catId = activatedRoute.snapshot.paramMap.get('catId');
    this.dataService.getSubCategories(this.catId).subscribe((response:any)=>{
      this.subCategories = response.data;
    })
  }

  ngOnInit(): void {
  }

  onClickHandler(sub:any){
    // console.log(sub)
    this.subId = sub.subId;
    this.router.navigateByUrl('/products/sub/' + this.subId);
  }

}
