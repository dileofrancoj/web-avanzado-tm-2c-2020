import { Component, OnInit, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent implements OnInit {
  // recibe info del padre
  @Input() value: string;
  constructor() {}

  ngOnInit(): void {}
}
