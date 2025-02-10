import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frase',
  standalone: false,
  templateUrl: './frase.component.html',
  styleUrl: './frase.component.css'
})
export class FraseComponent implements OnInit {
  frases:string[] = [
    "“Talk is cheap. Show me the code.” - Linus Torvalds",
            "“Programs must be written for people to read, and only incidentally for machines to execute.” - Harold Abelson",
            "“The best code is its own comment.” - Robert C. Martin",
            "“Before software can be reusable it first has to be usable.” - Ralph Johnson",
            "“Simplicity is the ultimate sophistication.” - Leonardo da Vinci",
            "“Don’t worry if it doesn’t work right. If everything did, you’d be out of a job.” - Doug Linder",
            "“Hardware is what makes a machine fast; software is what makes a fast machine slow.” - Craig Bruce",
            "“The quality of a program is measured by how easy it is to change.” - Kent Beck",
            "“The faster a solution works, the faster you can experiment.” - Jeff Atwood"
  ];

  fraseActual: string = '';
  indice: number = 0;

  constructor() { }

  ngOnInit(): void {
      this.cambiarFrase(); //Mostrar la primera frase
      setInterval(() => this.cambiarFrase(), 6000); //Cambiar frase cada 6s
  }

  cambiarFrase(): void {
    const fraseElemento = document.getElementById("frase");
    if(fraseElemento) {
      fraseElemento.style.opacity = '0';

      setTimeout(() => {
        this.fraseActual = this.frases[this.indice];
        this.indice = (this.indice+1) % this.frases.length;
        fraseElemento.style.opacity= '1';
      }, 1000);
    }
  }
}
