import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getLastError } from '@store/selectors';
import { BWSState } from '@store/states';

@Component({
  standalone: true,
  selector: 'app-error-message',
  imports: [CommonModule],
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent {
  lastMessage$ = this.store$.select(getLastError);
  constructor(private store$: Store<BWSState>) {}
}
