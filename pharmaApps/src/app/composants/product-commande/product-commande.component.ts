import { Component, OnInit } from '@angular/core';
import { ApiProviderService } from 'src/app/shared/apiProvider.service';

@Component({
  selector: 'app-product-commande',
  templateUrl: './product-commande.component.html',
  styleUrls: ['./product-commande.component.css']
})
export class ProductCommandeComponent implements OnInit {
  commande : any = [];

  constructor(private api : ApiProviderService) { }

  ngOnInit() {
    this.getCommandList()
  }

  // get command list 
  getCommandList() {
    this.api.getCommande().subscribe((res)=> {
      this.commande = res;
      console.log(this.commande)
    })
  }

}
