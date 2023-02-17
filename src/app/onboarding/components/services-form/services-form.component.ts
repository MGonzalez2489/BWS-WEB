import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BWSFormGroup } from '@core/classes';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { DestroyHook } from '@shared/components';
import { ConfirmationModalComponent } from '@shared/components/confirmation-modal/confirmation-modal.component';
import { ConfirmationModalResultEnum } from '@shared/enums';
import { ICategory, IService, IUser } from '@shared/models';
import { CreateArtistServiceAction } from '@store/actions/artist-services.actions';
import { GetServicesAction } from '@store/actions/provider.actions';
import { SetOpenedModalAction } from '@store/actions/ui.actions';
import { selectCategories, selectServices } from '@store/selectors';
import { AppState } from '@store/states/app.state';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-services-form',
  templateUrl: './services-form.component.html',
  styleUrls: ['./services-form.component.scss'],
})
export class ServicesFormComponent extends DestroyHook implements OnInit {
  @Input()
  user: IUser;

  @Output()
  finishOnboarding = new EventEmitter<true>();

  categories: ICategory[];
  services: IService[];
  userServices: any;
  form: BWSFormGroup;

  closeResult = '';
  constructor(
    private modalService: NgbModal,
    private store$: Store<AppState>,
    private fb: FormBuilder
  ) {
    super();
    //return this.user?.artistProfile?.services || [];
  }
  ngOnInit(): void {
    this.initializeForm();
    //this.deleteService();
    this.store$
      .select(selectCategories)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.categories = data;
      });

    this.store$
      .select(selectServices(''))
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.services = data;
      });
  }
  initializeForm(): void {
    this.form = this.fb.group({
      category: new FormControl(-1, [Validators.required]),
      service: new FormControl(-1, [Validators.required]),
      cost: new FormControl(0, [Validators.required, Validators.min(1)]),
    });
  }

  get formC() {
    return this.form.controls;
  }
  selectCategory(value: any): void {
    this.store$.dispatch(GetServicesAction({ category: value }));
  }
  createService(): void {
    if (this.form.valid) {
      this.store$.dispatch(
        CreateArtistServiceAction({
          userId: this.user.publicId,
          serviceId: this.form.value.service,
          cost: this.form.value.cost,
        })
      );
    }
  }
  finishOnboardingFn(): void {
    this.finishOnboarding.emit(true);
  }
  deleteService(): void {
    const modal = this.modalService.open(ConfirmationModalComponent);
    (modal.componentInstance as ConfirmationModalComponent).title =
      'titulo de prueba';
    (modal.componentInstance as ConfirmationModalComponent).message =
      'message de prueba';

    modal.closed.subscribe((data: ConfirmationModalResultEnum) => {
      if (data === ConfirmationModalResultEnum.Yes) {
        alert('yes');
      } else {
        alert('no');
      }
    });
  }

  open(content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
    });
    this.store$.dispatch(SetOpenedModalAction());
  }
}
