import { Component, OnInit } from '@angular/core';
import * as jsPDF from 'jspdf'

declare var jsPDF: any; // Important

@Component({
  selector: 'app-pdf-sop',
  templateUrl: './pdf-sop.component.html',
  styleUrls: ['./pdf-sop.component.scss']
})
export class PdfSopComponent implements OnInit {


  constructor() {
    var doc = new jsPDF('p', 'pt');
    var columns = ["ID", "Name", "Country"];
    var rows = [
      [1, "Shaw", "Tanzania"],
      [2, "Nelson", "Kazakhstan"],
      [3, "Garcia", "Madagascar"]
    ];

    doc.autoTable(columns, rows, {
      styles: {fillColor: [100, 255, 255]},
      columnStyles: {
        id: {fillColor: 255}
      },
      tableWidth:[100,50,20],
      margin: {top: 60},
      addPageContent: function(data) {
        doc.text("Header", 40, 30);
      }
    });
    doc.save('table.pdf');
  }

  ngOnInit() {
    this.download();
  }

  download()
  {




    /*var doc = new jsPDF({
      orientation: 'landscape',
      unit: 'in',
      format: [4, 2]
    })

    doc.text('Hello world!', 1, 1)
    doc.save('two-by-four.pdf')*/
  }

}
