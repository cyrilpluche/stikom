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
          doc.autoTableText("STANDARD OPERATION PROCEDURE \n SOP Name", data.settings.margin.left + data.table.width / 2, row.y + row.height, {
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
      ["","","",""]
    ];


    doc.autoTable(columns, rows, {
      theme: 'plain',
      styles: {
        lineColor: 0,
        lineWidth: 1},
      showHeader: 'never',
      startY: 210,
      drawRow: function (row2, data2) {
        // Colspan
        doc.setFontStyle('bold');
        doc.setFontSize(10);
        if (row2.index === 6) {
          doc.setTextColor(0,0,0);
          doc.rect(data2.settings.margin.left, row2.y, data2.table.width, 40, 'S');
          doc.autoTableText("Objective :", data2.settings.margin.left + data2.table.width / 2, row2.y + row2.height, {
            halign: 'left',
            valign: 'middle'
          });
          data2.cursor.y += 60;
        }
      },
      drawCell: function (cell2, data2) {
        // Rowspan
        if (data2.row.index === 6) {
          if (data2.column.dataKey === '1') {
            if (data2.row.index % 6 === 0 && data2.row.index !== 6) {
              doc.rect(cell2.x, cell2.y,45, cell2.height * 6, 'S');
              doc.autoTableText("", cell2.x + cell2.width/2 , cell2.y + cell2.height * 6 / 2, {
                halign: 'left',
                valign: 'middle'
              });
            }
            return false;
          }
          return false;
        }

      }
    });

    doc.addPage();

    var columns = [  {title: "0", dataKey: "0"},
      {title: "1", dataKey: "1"},
      {title: "2", dataKey: "2"},
      {title: "3", dataKey: "3"},
      {title: "4", dataKey: "4"},
      {title: "5", dataKey: "5"},
      {title: "6", dataKey: "6"},
      {title: "7", dataKey: "7"},
      {title: "8", dataKey: "8"}
    ];
    var rows = [
      ["No","Activity", "Unit 1", "Unit 2","Unit 3","Unit 4","Supporting \n Materials/input","Duration","Output"],
      ["1","description", "schema","schema","schema", "schema","text","time", "text"],
      ["2","description", "schema","schema","schema", "schema","text","time", "text"],
      ["3","description", "schema","schema","schema", "schema","text","time", "text"],
      ["4","description", "schema","schema","schema", "schema","text","time", "text"],

    ];


    doc.autoTable(columns, rows, {
      theme: 'plain',
      styles: {
        lineColor: 0,
        lineWidth: 1},
      showHeader: 'never',
      startY: 10,
      drawRow: function (row2, data2) {
        // Colspan
        doc.setFontStyle('bold');
        doc.setFontSize(10);
      },
      drawCell: function (cell2, data2) {
        // Rowspan

      }
    });



    doc.save("sop.pdf");




  }
}
