import { Component, OnInit } from '@angular/core';
import 'jspdf-autotable';

declare var jsPDF: any;

@Component({
  selector: 'app-pdf-progress-evaluation',
  templateUrl: './pdf-progress-evaluation.component.html',
  styleUrls: ['./pdf-progress-evaluation.component.scss']
})
export class PdfProgressEvaluationComponent implements OnInit {

  is_week:boolean=false;
  is_month:boolean=true;
  is_trimester:boolean=false;
  is_year:boolean=false;
  constructor() { }

  ngOnInit() {
    this.download();
  }
  download() {

    if(this.is_week)
    {
      //=========================== START WEEK MODEL =================================
      var columns = [{title: "0", dataKey: "0"},
        {title: "1", dataKey: "1"},
        {title: "2", dataKey: "2"},
        {title: "3", dataKey: "3"}
      ];
      var rows = [
        ["Work Code", "00000000", "Project Code", "24200"],
        ["Name of Project", "lumbuk tagagatum in ferne memonerisatum", "", ""],
        ["Start Date", "1-Jan-18", "", ""],
        ["Finished Date", "31-Jan-18", "", ""],
      ];

      var doc = new jsPDF('l', 'pt');

      doc.autoTableSetDefaults({
        margin: {top: 30},
        addPageContent: function(data) {
          doc.setFontSize(14);
          doc.text('VOLUME PROGRESS EVALUATION', 320, 50);
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
        {title: "Staff Name", dataKey: "1"},
        {title: "Total Target", dataKey: "2"},
        {title: "Total Target \n vs Details", dataKey: "3"},
        {title: "", dataKey: "4"},
        {title: "", dataKey: "5"},
        {title: "", dataKey: "6"},
        {title: "", dataKey: "7"},
        {title: "", dataKey: "8"},
        {title: "", dataKey: "9"},
        {title: "", dataKey: "10"},
        {title: "W1", dataKey: "11"},
        {title: "", dataKey: "12"},
        {title: "", dataKey: "13"},
        {title: "", dataKey: "14"},
        {title: "", dataKey: "15"},
        {title: "", dataKey: "16"},
        {title: "", dataKey: "17"},
        {title: "", dataKey: "18"},
        {title: "Total Finished", dataKey: "19"},
        {title: "%", dataKey: "20"},
        {title: "Note", dataKey: "21"}
      ];
      var rows2 = [
        ["", "", "", "", "", "D1", "", "", "D2", "", "", "D3", "", "", "D4", "", "", "D5", "","","",""],
        ["", "", "", "", "Target", "Finished", "%", "Target", "Finished", "%","Target", "Finished", "%", "Target", "Finished", "%", "Target", "Finished", "%","","",""],
        ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "","0","","text"],
        ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "","0","","text"],
        ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "","0","","text"],
        ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "","0","","text"],
        ["TOTAL", "", "0", "Same", "0", "0", "", "0", "0", "", "0", "0", "", "0", "0", "", "0", "0", "","0","",""],
      ];




      doc.autoTable(columns2, rows2, {
        theme: 'plain',
        styles: {
          overflow: 'linebreak',
          lineColor: 0,
          lineWidth: 0.3,
          halign: 'center',
          cellPadding: 2
        },
        headerStyles: {
          fontSize:7
        },
        showHeader: 'everyPage',
        startY: 160,
        drawRow: function (row, data) {
          // Colspan
          doc.setFontStyle('bold');
          doc.setFontSize(6);

        },
        drawCell: function (cell, data) {
          // Rowspan
          doc.setFontSize(6);


        }
      });


      doc.save("progress-evaluation.pdf");

      //=========================== END WEEK MODEL =================================

    }else if(this.is_month)
    {

      //=========================== START MONTH MODEL =================================

      //=========================== START WEEK MODEL =================================
      var columns = [{title: "0", dataKey: "0"},
        {title: "1", dataKey: "1"},
        {title: "2", dataKey: "2"},
        {title: "3", dataKey: "3"}
      ];
      var rows = [
        ["Work Code", "00000000", "Project Code", "24200"],
        ["Name of Project", "lumbuk tagagatum in ferne memonerisatum", "", ""],
        ["Start Date", "1-Jan-18", "", ""],
        ["Finished Date", "31-Jan-18", "", ""],
      ];

      var doc = new jsPDF('l', 'pt');

      doc.autoTableSetDefaults({
        margin: {top: 30},
        addPageContent: function(data) {
          doc.setFontSize(14);
          doc.text('VOLUME PROGRESS EVALUATION', 320, 50);
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
        {title: "Staff Name", dataKey: "1"},
        {title: "Total Target", dataKey: "2"},
        {title: "Total Target \n vs Details", dataKey: "3"},
        {title: "", dataKey: "4"},
        {title: "", dataKey: "5"},
        {title: "", dataKey: "6"},
        {title: "", dataKey: "7"},
        {title: "", dataKey: "8"},
        {title: "", dataKey: "9"},
        {title: "M1", dataKey: "10"},
        {title: "", dataKey: "11"},
        {title: "", dataKey: "12"},
        {title: "", dataKey: "13"},
        {title: "", dataKey: "14"},
        {title: "", dataKey: "15"},
        {title: "Total Finished", dataKey: "19"},
        {title: "%", dataKey: "20"},
        {title: "Note", dataKey: "21"}
      ];
      var rows2 = [
        ["", "", "", "", "", "W1", "", "", "W2", "", "", "W3", "", "", "W4", "","","",""],
        ["", "", "", "", "Target", "Finished", "%", "Target", "Finished", "%","Target", "Finished", "%", "Target", "Finished", "%", "","",""],
        ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "","0","","text"],
        ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "","0","","text"],
        ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "","0","","text"],
        ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "","0","","text"],
        ["TOTAL", "", "0", "Same", "0", "0", "", "0", "0", "", "0", "0", "", "0", "0", "", "0","",""],
      ];




      doc.autoTable(columns2, rows2, {
        theme: 'plain',
        styles: {
          overflow: 'linebreak',
          lineColor: 0,
          lineWidth: 0.3,
          halign: 'center',
          cellPadding: 2
        },
        headerStyles: {
          fontSize:7
        },
        showHeader: 'everyPage',
        startY: 160,
        drawRow: function (row, data) {
          // Colspan
          doc.setFontStyle('bold');
          doc.setFontSize(6);

        },
        drawCell: function (cell, data) {
          // Rowspan
          doc.setFontSize(6);


        }
      });


      doc.save("progress-evaluation.pdf");


      //=========================== END MONTH MODEL =================================

    }else if(this.is_trimester)
    {

      //=========================== START TRIMESTER MODEL =================================

      var columns = [{title: "0", dataKey: "0"},
        {title: "1", dataKey: "1"},
        {title: "2", dataKey: "2"},
        {title: "3", dataKey: "3"}
      ];
      var rows = [
        ["Work Code", "00000000", "Project Code", "24200"],
        ["Name of Project", "lumbuk tagagatum in ferne memonerisatum", "", ""],
        ["Start Date", "1-Jan-18", "", ""],
        ["Finished Date", "31-Jan-18", "", ""],
      ];

      var doc = new jsPDF('l', 'pt');

      doc.autoTableSetDefaults({
        margin: {top: 30},
        addPageContent: function(data) {
          doc.setFontSize(14);
          doc.text('VOLUME PROGRESS EVALUATION', 320, 50);
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
        {title: "Staff Name", dataKey: "1"},
        {title: "Total Target", dataKey: "2"},
        {title: "Total Target \n vs Details", dataKey: "3"},
        {title: "", dataKey: "4"},
        {title: "", dataKey: "5"},
        {title: "", dataKey: "6"},
        {title: "", dataKey: "7"},
        {title: "", dataKey: "8"},
        {title: "", dataKey: "9"},
        {title: "T1", dataKey: "10"},
        {title: "", dataKey: "11"},
        {title: "", dataKey: "12"},
        {title: "", dataKey: "13"},
        {title: "", dataKey: "14"},
        {title: "", dataKey: "15"},
        {title: "Total Finished", dataKey: "19"},
        {title: "%", dataKey: "20"},
        {title: "Note", dataKey: "21"}
      ];
      var rows2 = [
        ["", "", "", "", "", "M1", "", "", "M2", "", "", "M3", "", "", "M4", "","","",""],
        ["", "", "", "", "Target", "Finished", "%", "Target", "Finished", "%","Target", "Finished", "%", "Target", "Finished", "%", "","",""],
        ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "","0","","text"],
        ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "","0","","text"],
        ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "","0","","text"],
        ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "","0","","text"],
        ["TOTAL", "", "0", "Same", "0", "0", "", "0", "0", "", "0", "0", "", "0", "0", "", "0","",""],
      ];




      doc.autoTable(columns2, rows2, {
        theme: 'plain',
        styles: {
          overflow: 'linebreak',
          lineColor: 0,
          lineWidth: 0.3,
          halign: 'center',
          cellPadding: 2
        },
        headerStyles: {
          fontSize:7
        },
        showHeader: 'everyPage',
        startY: 160,
        drawRow: function (row, data) {
          // Colspan
          doc.setFontStyle('bold');
          doc.setFontSize(6);

        },
        drawCell: function (cell, data) {
          // Rowspan
          doc.setFontSize(6);


        }
      });


      doc.save("progress-evaluation.pdf");

      //=========================== END TRIMESTER MODEL =================================

    }else if(this.is_year)
    {

      //=========================== START YEAR MODEL =================================

      var columns = [{title: "0", dataKey: "0"},
        {title: "1", dataKey: "1"},
        {title: "2", dataKey: "2"},
        {title: "3", dataKey: "3"}
      ];
      var rows = [
        ["Work Code", "00000000", "Project Code", "24200"],
        ["Name of Project", "lumbuk tagagatum in ferne memonerisatum", "", ""],
        ["Start Date", "1-Jan-18", "", ""],
        ["Finished Date", "31-Jan-18", "", ""],
      ];

      var doc = new jsPDF('l', 'pt');

      doc.autoTableSetDefaults({
        margin: {top: 30},
        addPageContent: function(data) {
          doc.setFontSize(14);
          doc.text('VOLUME PROGRESS EVALUATION', 320, 50);
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
        {title: "Staff Name", dataKey: "1"},
        {title: "Total Target", dataKey: "2"},
        {title: "Total Target \n vs Details", dataKey: "3"},
        {title: "", dataKey: "4"},
        {title: "", dataKey: "5"},
        {title: "", dataKey: "6"},
        {title: "", dataKey: "7"},
        {title: "", dataKey: "8"},
        {title: "", dataKey: "9"},
        {title: "Y1", dataKey: "10"},
        {title: "", dataKey: "11"},
        {title: "", dataKey: "12"},
        {title: "", dataKey: "13"},
        {title: "", dataKey: "14"},
        {title: "", dataKey: "15"},
        {title: "Total Finished", dataKey: "19"},
        {title: "%", dataKey: "20"},
        {title: "Note", dataKey: "21"}
      ];
      var rows2 = [
        ["", "", "", "", "", "T1", "", "", "T2", "", "", "T3", "", "", "T4", "","","",""],
        ["", "", "", "", "Target", "Finished", "%", "Target", "Finished", "%","Target", "Finished", "%", "Target", "Finished", "%", "","",""],
        ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "","0","","text"],
        ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "","0","","text"],
        ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "","0","","text"],
        ["01", "Staff I", "", "Same", "", "", "", "", "", "", "", "", "", "", "", "","0","","text"],
        ["TOTAL", "", "0", "Same", "0", "0", "", "0", "0", "", "0", "0", "", "0", "0", "", "0","",""],
      ];




      doc.autoTable(columns2, rows2, {
        theme: 'plain',
        styles: {
          overflow: 'linebreak',
          lineColor: 0,
          lineWidth: 0.3,
          halign: 'center',
          cellPadding: 2
        },
        headerStyles: {
          fontSize:7
        },
        showHeader: 'everyPage',
        startY: 160,
        drawRow: function (row, data) {
          // Colspan
          doc.setFontStyle('bold');
          doc.setFontSize(6);

        },
        drawCell: function (cell, data) {
          // Rowspan
          doc.setFontSize(6);


        }
      });


      doc.save("progress-evaluation.pdf");
      //=========================== END YEAR MODEL =================================

    }

  }

}

