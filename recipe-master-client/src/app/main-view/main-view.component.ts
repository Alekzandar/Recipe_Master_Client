import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
	encapsulation: ViewEncapsulation.None,
	styles: [`
    .dark-modal .modal-content {
      background-color: #292b2c;
      color: white;
    }
    .dark-modal .close {
      color: white;
    }
    .light-blue-backdrop {
      background-color: #5cb3fd;
    }
  `]
})
export class MainViewComponent {

	closeResult: string;

	constructor(private modalService: NgbModal) {}

	openVerticallyCentered(content) {
		this.modalService.open(content, { centered: true, size: 'lg' });
  }
	openVerticallyCentereda(contenta) {
		this.modalService.open(contenta, { centered: true, size: 'lg' });
	}
}

