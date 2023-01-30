import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { DestroyHook } from '@shared/components';
import { ICategory, IService, IUser } from '@shared/models';
import {
  CreateArtistServiceAction,
  GetServicesAction,
  SetOpenedModalAction,
} from '@store/actions';
import { getCategories, getServices } from '@store/selectors';
import { BWSState } from '@store/states';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-services-form',
  templateUrl: './services-form.component.html',
  styleUrls: ['./services-form.component.scss'],
})
export class ServicesFormComponent extends DestroyHook implements OnInit {
  @Input()
  user: IUser;
  categories: ICategory[];

  services: IService[];
  form: FormGroup;

  closeResult = '';
  constructor(
    private modalService: NgbModal,
    private store$: Store<BWSState>,
    private fb: FormBuilder
  ) {
    super();
  }

  ngOnInit(): void {
    this.initializeForm();

    this.store$
      .select(getCategories)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.categories = data;
      });

    this.store$
      .select(getServices)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.services = data;
        if (this.services && this.services.length > 0)
          this.form.patchValue({ service: this.services[0].publicId });
      });
  }
  initializeForm(): void {
    this.form = this.fb.group({
      category: new FormControl(0, [Validators.required]),
      service: new FormControl(null, [Validators.required]),
      cost: new FormControl(0, [Validators.required, Validators.min(1)]),
    });
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

  open(content) {
    const modal = this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
    });
    this.store$.dispatch(SetOpenedModalAction());
  }
}
