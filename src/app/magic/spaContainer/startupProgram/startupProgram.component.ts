///<reference path="../../../_nav.ts"/>
import {
    Component
} from '@angular/core';
import {
    TaskBaseMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
import {navItems} from '../../../_nav';
@Component({
    selector: 'mga-startupProgram',
    providers: [...magicProviders],
    styleUrls: ['./startupProgram.component.css'],
    templateUrl: './startupProgram.component.html',
})
export class startupProgram extends TaskBaseMagicComponent
{
  public navItems = navItems;
  public sidebarMinimized = true;
}
