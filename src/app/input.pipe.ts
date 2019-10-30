import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name :'inputPipe'
})
export class InputPipe implements PipeTransform{
    transform(value:string): string {
        value = value.replace(/[^\s0-9]+/, '');
        var a = '';
        for(let i = 0; i<16; i+=4){
            a = a + value.slice(i, i+4) + ' ';
        }
        return a;
    }
} 