import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { TitleService } from '../shared/title.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private titleService: TitleService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.titleService.changeTitle('Home');
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

}
