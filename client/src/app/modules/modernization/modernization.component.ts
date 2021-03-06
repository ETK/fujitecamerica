import {
    Component,
    ElementRef,
    ViewChild
} from '@angular/core';
import {
    ActivatedRoute,
    Router
} from '@angular/router';
import {
    BaseProductRouteComponent
} from 'app/core';
import {
    DOMService
} from 'app/services';

@Component({
    selector: 'modernization',
    templateUrl: 'modernization.component.html'
})
export class ModernizationComponent extends BaseProductRouteComponent {

    @ViewChild('autowalks') public autowalks: ElementRef;
    @ViewChild('elevators') public elevators: ElementRef;
    @ViewChild('escalators') public escalators: ElementRef;

    constructor(
        protected domService: DOMService,
        protected route: ActivatedRoute,
        protected router: Router
    ) {
        super('ModernizationComponent', domService, route, router);
    }
}
