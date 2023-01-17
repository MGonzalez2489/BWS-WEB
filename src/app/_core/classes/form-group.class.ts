import { FormGroup } from '@angular/forms';

export abstract class BWSFormGroup extends FormGroup {
  isSubmited?: boolean;
}
