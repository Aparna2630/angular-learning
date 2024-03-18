import { AbstractControl, ValidationErrors } from "@angular/forms";

export class nospace{

  static noSpceValidation(control : AbstractControl):ValidationErrors | null{

        let value = control.value

        if(value.indexOf(' ') >= 0){
            return {noSpaceError : true}
        }else{
            return null
        }

    }
}
