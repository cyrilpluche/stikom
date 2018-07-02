import { Component, OnInit } from '@angular/core';
import { SopService } from "../../objects/sop/sop.service";
import { Sop } from "../../objects/sop/sop";

@Component({
  selector: 'app-sop-list',
  templateUrl: './sop-list.component.html',
  styleUrls: ['./sop-list.component.css']
})
export class SopListComponent implements OnInit {

  /* ----- Data ----- */
  errorMessage: string = "";
  sopList: [Sop];
  sopSelected: Sop = new Sop();
  buttonsTitles: string [] = ['Modify SOP informations', 'Create or modify activites', 'Create or modify jobs'];
  buttonsLinks: string [] = ['', 'activity-creation', 'job-list'];

  constructor(private _sopService: SopService) { }



  ngOnInit() {
    this.getAllSop();
    this._sopService.removeSopIdLocal();
    console.log(this.buttonsTitles)
  }

  getAllSop(){
    this._sopService.selectAll()
      .subscribe( (res) => {
        console.log(res['data']);
        this.sopList=res['data'];
        },
        error => {
          console.log("ERREUR : ",error);
        });
  }

  deleteSop(sop_id) {
    this._sopService.delete(sop_id).subscribe((res) => {
        this.errorMessage = "";
        this.getAllSop();
      },
      error => {
        this.errorMessage = error.error.message;
      });
  }

  selectSop(clickedSop){
    this.sopSelected = clickedSop;
    localStorage.setItem('Sop_id', clickedSop.sop_id);
  }

  sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("sop-table");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.getElementsByTagName("TR");
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  search() {
    // Declare variables
    var input, filter, table, tr, td, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("sop-table");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      console.log(td);
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

}
