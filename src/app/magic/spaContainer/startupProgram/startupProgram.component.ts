///<reference path="../../../_nav.ts"/>
import {
    Component
} from '@angular/core';
import {
    BaseTaskMagicComponent,
    magicProviders
} from "@magic-xpa/angular";
import {navItems} from '../../../_nav';
@Component({
    selector: 'mga-startupProgram',
    providers: [...magicProviders],
    styleUrls: ['./startupProgram.component.css'],
    templateUrl: './startupProgram.component.html',
})
export class startupProgram extends BaseTaskMagicComponent
{
  public navItems = navItems;
  public sidebarMinimized = true;
}
