import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { State } from '../+state';
import { ProductPageActions } from '../+state/actions';
import { getCurrentProduct, getError, getProducts, getShowProductCode } from '../+state/product.selectors';

import { Product } from '../product';
@Component({
  templateUrl: './product-shell.component.html'
})
export class ProductShellComponent implements OnInit {
  products$: Observable<Product[]>;
  selectedProduct$: Observable<Product>;
  displayCode$: Observable<boolean>;
  errorMessage$: Observable<string>;

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(ProductPageActions.loadProducts());
    this.products$ = this.store.select(getProducts);
    this.errorMessage$ = this.store.select(getError);
    this.selectedProduct$ = this.store.select(getCurrentProduct);
    this.displayCode$ = this.store.select(getShowProductCode);
  }

  checkChanged(): void {
    // this.displayCode = !this.displayCode;
    this.store.dispatch(ProductPageActions.toggleProductCode());
  }

  newProduct(): void {
    // this.productService.changeSelectedProduct(this.productService.newProduct());
    this.store.dispatch(ProductPageActions.initializeCurrentProduct());
  }

  productSelected(product: Product): void {
    // this.productService.changeSelectedProduct(product);
    this.store.dispatch(ProductPageActions.setCurrentProduct({ currentProductId: product.id }));
  }

  deleteProduct(product: Product): void {
    if (product && product.id) {
      if (confirm(`Really delete the product: ${product.productName}?`)) {
        this.store.dispatch(ProductPageActions.deleteProduct({ currentProductId: product.id }));
      }
    } else {
      // No need to delete, it was never saved
      this.store.dispatch(ProductPageActions.clearCurrentProduct());
    }
  }

  saveProduct(product: Product): void {
    if (product.id === 0) {
      /* this.productService.createProduct(product).subscribe({
        next: p => this.store.dispatch(ProductPageActions.setCurrentProduct({ currentProductId: p.id })),
        error: err => this.errorMessage = err
      }); */
      this.store.dispatch(ProductPageActions.createProduct({ product }));
    } else {
      /* this.productService.updateProduct(product).subscribe({
        next: p => this.store.dispatch(ProductPageActions.setCurrentProduct({ currentProductId: p.id })),
        error: err => this.errorMessage = err
      }); */
      this.store.dispatch(ProductPageActions.updateProduct({ product }));
    }
  }
}
