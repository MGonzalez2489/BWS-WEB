import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectError } from '@store/selectors';
import { AppState } from '@store/states/app.state';

@Component({
  standalone: true,
  selector: 'app-error-message',
  imports: [CommonModule],
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent {
  lastMessage$ = this.store$.select(selectError);
  constructor(private store$: Store<AppState>) {}
}
