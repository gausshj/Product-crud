import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products!: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']
  
  constructor(private productService: ProductService) { }

  dataSource = new MatTableDataSource<Product>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
      this.dataSource.data = products;
      this.dataSource.paginator = this.paginator;
    })
  }
  
}
