import { Component, OnInit } from '@angular/core';
import { ApiProviderService } from 'src/app/shared/apiProvider.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  product: any = [];
  constructor(private api: ApiProviderService) {}

  ngOnInit() {
    this.getproducts();
  }

  // get all products
  getproducts() {
    this.api.getProduct().subscribe((res) => {
      this.product = res;
      console.log(this.product);
    });
  }
}
