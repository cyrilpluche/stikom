import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-helper',
  templateUrl: './text-helper.component.html',
  styleUrls: ['./text-helper.component.scss']
})
export class TextHelperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  firstLetterUpperCase(string: string)
  {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}
