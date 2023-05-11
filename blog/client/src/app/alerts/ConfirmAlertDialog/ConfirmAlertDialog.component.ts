import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ConfirmAlertDialog',
  template: `
    <h2 mat-dialog-title>{{ title }}</h2>
    <div mat-dialog-content>{{ message }}</div>
    <div mat-dialog-actions>
      <button mat-button color="primary" (click)="onConfirmClick()">Confirm</button>
      <button mat-button (click)="onCancelClick()">Cancel</button>
    </div>
  `
})
export class ConfirmAlertDialogComponent {
  title: string;
  message: string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmAlertDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title;
    this.message = data.message;
  }


  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

  onCancelClick(): void {
    this.dialogRef.close(false);
  }

}
