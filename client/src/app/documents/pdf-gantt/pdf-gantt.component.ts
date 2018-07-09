import { Component, OnInit } from '@angular/core';
import 'jspdf-autotable';

declare var jsPDF: any;

@Component({
  selector: 'app-pdf-gantt',
  templateUrl: './pdf-gantt.component.html',
  styleUrls: ['./pdf-gantt.component.scss']
})
export class PdfGanttComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.download();
  }
  download() {

    var columns = [{title: "0", dataKey: "0"},
      {title: "1", dataKey: "1"},
      {title: "2", dataKey: "2"},
      {title: "3", dataKey: "3"}
    ];
    var rows = [
      ["Work Code", "00000000", "Project Code", "24200"],
      ["Name of Project", "lumbuk tagagatum in ferne memonerisatum", "", ""],
    ];

    var doc = new jsPDF('l', 'pt');

    doc.autoTableSetDefaults({
      margin: {top: 30},
      addPageContent: function(data) {
        doc.setFontSize(14);
        doc.text('GANTT CHART', 380, 50);
      }
    });

    doc.autoTable(columns, rows, {
      theme: 'plain',
      styles: {
        lineColor: 0,
        lineWidth: 0
      },
      showHeader: 'never',
      startY: 60,
      drawRow: function (row, data) {
        // Colspan
        doc.setFontStyle('bold');
        doc.setFontSize(10);

      },
      drawCell: function (cell, data) {
        // Rowspan

      }
    });



    var columns2 = [{title: "No", dataKey: "0"},
      {title: "Activity", dataKey: "1"},
      {title: "Target Date", dataKey: "2"},
      {title: "Finished Date", dataKey: "3"},
      {title: "Evaluation", dataKey: "4"},
      {title: "Staff Name", dataKey: "5"},
      {title: "Sign", dataKey: "6"},
      {title: "Note", dataKey: "7"}
    ];
    var rows2 = [
      ["1", "Step I Process", "", "", "", "Staff 1", "", ""],
      ["2", "Step II Process", "", "", "", "Staff 1, Staff 2", "", ""],
      ["3", "Step III Process", "", "", "", "Staff 1", "", ""],
      ["4", "Step IV Process", "", "", "", "Staff 1", "", ""],
      ["5", "Step V Process", "", "", "", "Staff 1", "", ""],
      ["6", "Step VI Process", "", "", "", "Staff 1", "", ""],
      ["7", "Step VII Process", "", "", "", "Staff 1", "", ""],
      ["8", "Step VIII Process", "", "", "", "Staff 1", "", ""],
      ["9", "Step IX Process", "", "", "", "Staff 1", "", ""],
      ["1", "Step X Process", "", "", "", "Staff 1", "", ""],
    ];




    doc.autoTable(columns2, rows2, {
      theme: 'plain',
      styles: {
        lineColor: 0,
        lineWidth: 1
      },
      showHeader: 'everyPage',
      startY: 120,
      drawRow: function (row, data) {
        // Colspan
        doc.setFontStyle('bold');
        doc.setFontSize(10);

      },
      drawCell: function (cell, data) {
        // Rowspan

      }
    });


    doc.save("Gantt-charts.pdf");
  }

}
