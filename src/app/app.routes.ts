import { Routes } from '@angular/router';

export const routes: Routes = [
    {   
        path: '', redirectTo: 'product', pathMatch: 'full' 
    },
    {
        path: 'product',
        loadComponent: () => import('./components/product/product.component').then((m) => m.ProductComponent),
    },
];
