import { HttpParams, HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MAT_DIALOG_DATA, MatDialogRef,
  MatDialogActions, MatDialogContent, MatDialogClose,MatDialogTitle} from "@angular/material/dialog";
import { ConfigService } from '../config/config.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private configService: ConfigService ) { }

  ngOnInit(): void {
  }

  openWindow(): void {

    let params = new HttpParams();

    params = params.append('firstParameter', 'a');
    params = params.append('secondParameter', 'b');

    this.configService.get('http://localhost/test.php',  {params} ).subscribe(value =>{
    // value

    console.log(value)
    },
    error => {

      console.log(error)
    });




    const dialogConfig = new MatDialogConfig();

      dialogConfig.position = {
        'top': '0',
        left: '0'
      };

    dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;

        dialogConfig.data = {
          id: 1,
          title: 'Angular For Beginners'
      };

        //this.dialog.open(DialogContentExampleDialog, dialogConfig);

        const dialogRef = this.dialog.open(DialogContentExampleDialog, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", data)
    );




    //const dialogRef = this.dialog.open(DialogContentExampleDialog);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }


}

@Component({
  selector: 'dialog-content-example-dialog',
  template: `
    <h1 mat-dialog-title>Message</h1>

      <button class="mat-raised-button"(click)="close()">Close</button>
      <button class="mat-raised-button mat-primary"(click)="save()">Save</button>

  `,
})
export class DialogContentExampleDialog  implements OnInit  {
  description:string = "";

  constructor(
    private dialogRef: MatDialogRef<DialogContentExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
     ) {
      this.dialogRef.close();

      this.dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output------:", this.data)
    );
  }
  ngOnInit() {}


  close(): void {
    this.dialogRef.close();

    this.dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output------:", this.data)
  );


  }
  save() {

  }
}




