import { Component       } from '@angular/core';
import { AfterViewInit   } from '@angular/core';
import { GDCommonService } from 'gd-common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls:  ['./app.component.css']
})
export class AppComponent implements AfterViewInit
{
    public  constructor( private service : GDCommonService )
    {
    }

    public ngAfterViewInit(): void
    {
        // disable browser contextmenu
        document.addEventListener( 'contextmenu', (event : any) => event.preventDefault() );   
    }    

    public  onColorValueChanged( item : string ) : void {  alert( item );  }  
    public  onDateValueChanged ( item : string ) : void {  alert( item );  }  
    public  onTextValueChanged ( item : string ) : void {  alert( item );  }  
    public  onComboValueChanged( data : any )
    {
        switch( data.id )
        {
            case '1' :  alert( data.name );  break;
            case '2' :  alert( data.name );  break;
            case '3' :  alert( data.name );  break;
            default  :  alert( data.name );  break;
        }
    }  
}
