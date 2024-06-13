import { Component, OnInit } from '@angular/core';
import { Liberty  } from '../../model/model';
import { LibertyService } from '../../liberty.service';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrl: './app-home.component.css'
})
export class AppHomeComponent implements OnInit{
  libertyItems: Liberty [] = []

  constructor(private libertyService: LibertyService) { }

  ngOnInit(): void {
    this.libertyService.getLibertyItems().subscribe((data: Liberty[]) => {
      this.libertyItems = data;
    });
  }
}
