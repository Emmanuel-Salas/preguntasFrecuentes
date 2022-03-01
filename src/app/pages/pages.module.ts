import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { UTMAPModule } from './utmap/utmap.module';

@NgModule({
    declarations: [
        PagesComponent,
        
        
    ],
    exports: [
        PagesComponent,
      
    ],
    imports: [
       
        RouterModule,
        CommonModule,
        FormsModule,
        UTMAPModule,
       
    ]
})

export class PagesModule { }
