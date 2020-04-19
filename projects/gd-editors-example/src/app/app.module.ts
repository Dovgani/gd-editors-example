import { FormsModule         } from '@angular/forms';
import { BrowserModule       } from '@angular/platform-browser';
import { NgModule            } from '@angular/core';
import { CommonModule        } from '@angular/common'; 

import { GDWindowModule      } from 'gd-window';
import { GDCommonModule      } from 'gd-common';
import { GDComboeditorModule } from 'gd-comboeditor';
import { GDColoreditorModule } from 'gd-coloreditor';
import { GDDateeditorModule  } from 'gd-dateeditor';
import { GDTexteditorModule  } from 'gd-texteditor';

import { AppComponent        } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,

    GDCommonModule,
    GDTexteditorModule,
    GDColoreditorModule,
    GDDateeditorModule,
    GDComboeditorModule,

    GDWindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
