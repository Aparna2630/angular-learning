import { AbstractControl, FormGroup, ValidationErrors } from "@angular/forms";

export class suriyaValidation {
    static suriyaValidation(value1: string, value2: string): ValidationErrors | null {
     
        return (formGroup: FormGroup) => {
     
        var control1 = formGroup.get(value1);
        var control2 = formGroup.get(value2);
  
        console.log(control1,control2)

        if (control1 && control2) {
         
          if (+(control1.value) > +(control2.value)) {
            return { 'suriyaValidation': true }; 
          }

        }
            return null;

      };
    }
  }
  