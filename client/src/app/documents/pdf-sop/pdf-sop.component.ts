import { Component, OnInit } from '@angular/core';
import * as jsPdf from 'jspdf';
import 'jspdf-autotable';

declare var jsPDF: any;

@Component({
  selector: 'app-pdf-sop',
  templateUrl: './pdf-sop.component.html',
  styleUrls: ['./pdf-sop.component.scss']
})
export class PdfSopComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {
    this.download();
  }

  download() {

    var columns = [  {title: "0", dataKey: "0"},
      {title: "1", dataKey: "1"},
      {title: "2", dataKey: "2"},
      {title: "3", dataKey: "3"}
    ];
    var rows = [
      ["", "Branch Name", "Creation Date", "date"],
      ["", "Department Name", "Revision Date", "Date"],
      ["", "Sub Department Name", "Published Date", "date"],
      ["", "", "Approved By", "name"],
      ["","","",""]
    ];

    var doc = new jsPDF('l', 'pt');


    doc.autoTable(columns, rows, {
      theme: 'plain',
      styles: {
        lineColor: 0,
        lineWidth: 1},
      showHeader: 'never',
      startY: 60,
      drawRow: function (row, data) {
        // Colspan
        doc.setFontStyle('bold');
        doc.setFontSize(10);
        if (row.index === 4) {
          doc.setTextColor(0,0,0);
          doc.rect(data.settings.margin.left, row.y, data.table.width, 40, 'S');
          doc.autoTableText("STANDARD OPERATION PROCEDURE", data.settings.margin.left + data.table.width / 2, row.y + row.height, {
            halign: 'center',
            valign: 'middle'
          });
          data.cursor.y += 60;
        }
      },
      drawCell: function (cell, data) {
        // Rowspan
        if (data.row.index === 4) {
          if (data.column.dataKey === '0') {
            if (data.row.index % 5 === 0) {
              doc.rect(cell.x, cell.y, data.table.width, cell.height * 5, 'S');
              doc.autoTableText("Logo", cell.x + cell.width / 2, cell.y + cell.height * 5 / 2, {
                halign: 'center',
                valign: 'middle'
              });
            }
            return false;
          }
          return false;
        }
      }
    });

    var columns = [  {title: "0", dataKey: "0"},
      {title: "1", dataKey: "1"},
      {title: "2", dataKey: "2"}
    ];
    var rows = [
      ["Base Rule/Regulation","", "Staff Qualifications"],
      ["Content","", "Content"],
      ["Related Working Units","", "Supporting tools"],
      ["Content","", "Content"],
      ["Warning","", "Types of Forms and Reports"],
      ["Content","", "Content"],
    ];


    doc.autoTable(columns, rows, {
      theme: 'plain',
      styles: {
        lineColor: 0,
        lineWidth: 1},
      showHeader: 'never',
      startY: 200,
      drawRow: function (row2, data2) {
        // Colspan
        doc.setFontStyle('bold');
        doc.setFontSize(10);
      },
      drawCell: function (cell2, data2) {
        // Rowspan

          if (data2.column.dataKey === '1') {
            if (data2.row.index % 6 === 0) {
              doc.rect(cell2.x, cell2.y,45, cell2.height * 6, 'S');
              doc.autoTableText("", cell2.x + cell2.width/2 , cell2.y + cell2.height * 6 / 2, {
                halign: 'center',
                valign: 'middle'
              });
            }
            return false;
          }
      }
    });

    doc.save("table.pdf");

    /*

    var doc = new jsPDF('l', 'pt');
    doc.autoTable(columns, rows, {
      theme: "plain",
      styles: {
        lineColor: 0,
        lineWidth: 1},
      columnStyles: {
        id: {fillColor: 255}
      },
      tableWidth:[10,100,20],
      margin: {top: 20},
      addPageContent: function(data) {
      }
    });
    doc.save('table.pdf');

//----------------------------------------------------------
    var doc = new jsPDF({
      orientation: 'landscape',
      unit: 'in',
      format: [4, 2]
    })

    doc.text('Hello world!', 1, 1);
    doc.save('two-by-four.pdf');
  */



  }
}
