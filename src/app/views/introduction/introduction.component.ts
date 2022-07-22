import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css',]  
})
export class IntroductionComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: '通信软件开发与应用',
      icon: 'info',
      routeUrl: ''
    }
  }

  ngOnInit(): void {
  }

}
