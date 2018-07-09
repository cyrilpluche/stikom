import { Component, OnInit } from '@angular/core';
import 'jspdf-autotable';

declare var jsPDF: any;

@Component({
  selector: 'app-pdf-performance-report',
  templateUrl: './pdf-performance-report.component.html',
  styleUrls: ['./pdf-performance-report.component.scss']
})
export class PdfPerformanceReportComponent implements OnInit {

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
      ["Staff Name", "Test name", "", ""]
    ];

    var doc = new jsPDF('l', 'pt');

    doc.autoTableSetDefaults({
      margin: {top: 30},
      addPageContent: function (data) {
        doc.setFontSize(14);
        doc.text('STAFF PERFORMANCE REPORT', 320, 50);
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
      {title: "WORK PROJECT", dataKey: "1"},
      {title: "", dataKey: "2"},
      {title: "TARGET", dataKey: "3"},
      {title: "", dataKey: "4"},
      {title: "", dataKey: "5"},
      {title: "REALISATION", dataKey: "6"},
      {title: "", dataKey: "7"},
      {title: "PERFORMANCE \n VALUE", dataKey: "8"}
    ];
    var rows2 = [
      ["", "", "", "OUTPUT QUANTITY", "DURATION", "","OUTPUT QUANTITY", "", ""],
      ["(1)", "(2)", "(3)", "(4)", "(5)", "(6)", "(7)", "(8)", "(11)"],
      ["1", "in fernetum momentum descriptim di activitatum", "1", "Laporan", "2", "Jam", "1", "Paket Kegiatan", ""],
      ["2", "in fernetum momentum descriptim di activitatum", "1", "Laporan", "2", "Jam", "1", "Paket Kegiatan", ""],
      ["3", "in fernetum momentum descriptim di activitatum", "1", "Laporan", "2", "Jam", "1", "Paket Kegiatan", ""],
      ["4", "in fernetum momentum descriptim di activitatum", "1", "Laporan", "2", "Jam", "1", "Paket Kegiatan", ""],
      ["5", "in fernetum momentum descriptim di activitatum", "1", "Laporan", "2", "Jam", "1", "Paket Kegiatan", ""],
      ["6", "in fernetum momentum descriptim di activitatum", "1", "Laporan", "2", "Jam", "1", "Paket Kegiatan", ""],
      ["","TOTAL PERFORMANCE VALUE","","","","","","",""]
    ];


    doc.autoTable(columns2, rows2, {
      theme: 'plain',
      styles: {
        overflow: 'linebreak',
        lineColor: 0,
        lineWidth: 0.3,
        halign: 'left',
        cellPadding: 2
      },
      headerStyles: {
        fontSize: 8,
        halign: 'center',
      },
      showHeader: 'everyPage',
      startY: 100,
      drawRow: function (row, data) {
        // Colspan
        doc.setFontStyle('bold');
        doc.setFontSize(8);

      },
      drawCell: function (cell, data) {
        // Rowspan
        doc.setFontSize(8);


      }
    });


    doc.save("performance-report.pdf");

  }





}
