import { Component } from '@angular/core';

@Component({
    selector : 'app-body',
    templateUrl : './body.component.html'
})

export class BodyComponent {
    frase: any = {
        Autor: 'Ben Parker',
        mensaje: 'Un gran poder conlleva una gran responsabilidad'
    };
    mostrar = true;
    personas: string [] = ['Yanira', 'Nayelly', 'Brenda', 'Louisa', 'Fernanda'];
}

