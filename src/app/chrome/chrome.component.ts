import { Component, OnInit } from '@angular/core';
import { TitleService } from '../shared/title.service';
import { onSideNavChange, animateText, onMainContentChange } from '../shared/animations';
 
@Component({
  selector: 'chrome',
  templateUrl: './chrome.component.html',
  styleUrls: ['./chrome.component.scss'],
  animations: [onSideNavChange, animateText, onMainContentChange]
})
export class ChromeComponent implements OnInit {
  screenTitle: string;
 
  public sideNavState: boolean = false;
  public linkText: boolean = false;
 
  navLinks: any[] = [
    { path: '', name: 'Dashboard', icon: 'dashboard' },
    { path: 'requests', name: 'Requests', icon: 'create' },
    { path: 'assets', name: 'Assets', icon: ' web_asset' },
    { path: 'data-mining', name: 'Data Mining', icon: 'storage' },
    { path: 'comm-center', name: 'Messages', icon: 'mail' },
    { path: 'watch-lists', name: 'Watch Lists', icon: 'view_list' },
    { path: 'reports', name: 'Reports', icon: 'folder' },
    { path: 'help', name: 'Help', icon: 'help' }
  ];
 
  constructor(private titleService: TitleService) { }
 
  ngOnInit(): void {
    this.titleService.currentTitle
    .subscribe(data => this.screenTitle = data)
  }
 
  backBtn() {
    window.history.back();
  }
 
  onSidenavToggle(event) {
    this.sideNavState = !this.sideNavState;
    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 500)
    event.preventDefault(); // prevents bubbling down, stopPropagation() prevents bubbling up
  }

  onMouseOut() {
    this.sideNavState = !this.sideNavState;
    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 500) 
  }
 

}
 