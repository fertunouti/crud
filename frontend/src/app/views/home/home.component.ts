import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

declare var M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  prestadores : any = []
  paginaAtual = 0;
  itensPorPagina = 2; // Número de prestadores por página
  totalPrestadores = 0;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  myObject = {
    "conteudo": [
      {
        "id": 1,
        "imgUrl": null,
        "nome": "Marinete1",
        "regiao": "NORTE",
        "servicoValor": "150.00"
      },
      {
        "id": 2,
        "imgUrl": null,
        "nome": "Marinete2",
        "regiao": "NORTE",
        "servicoValor": "150.00"
      },
      {
        "id": 3,
        "imgUrl": null,
        "nome": "Marinete3",
        "regiao": "NORTE",
        "servicoValor": "150.00"
      },
      {
        "id": 4,
        "imgUrl": null,
        "nome": "Marinete4",
        "regiao": "NORTE",
        "servicoValor": "150.00"
      },
      {
        "id": 5,
        "imgUrl": null,
        "nome": "Marinete5",
        "regiao": "NORTE",
        "servicoValor": "150.00"
      },
      {
        "id": 6,
        "imgUrl": null,
        "nome": "Marinete6",
        "regiao": "NORTE",
        "servicoValor": "150.00"
      },
      {
        "id": 7,
        "imgUrl": null,
        "nome": "Marinete 7 da Silva",
        "regiao": "NORTE",
        "servicoValor": "150.00"
      },
      {
        "id": 8,
        "imgUrl": null,
        "nome": "Marinete 8 da Silva",
        "regiao": "NORTE",
        "servicoValor": "150.00"
      },
      {
        "id": 9,
        "imgUrl": null,
        "nome": "Sueli Cavalcante",
        "regiao": "CENTRO",
        "servicoValor": "150.00"
      }
    ],
    "paginação": 2,
    "totalElementos": 9,
    "totalPages": 3,
    "pageAtual": 1
  };
  ngOnInit(): void {
    this.atualizarPrestadores();
    this.totalPrestadores = this.myObject.totalElementos;
    
  }
  ngAfterViewInit() {
    this.prestadores.paginator = this.paginator;
  }

  atualizarPrestadores(): void {
    const startIndex = (this.paginaAtual - 1) * this.itensPorPagina;
    const endIndex = startIndex + this.itensPorPagina;
    this.prestadores = this.myObject.conteudo.slice(startIndex, endIndex);
  }

  mudarPagina(numeroPagina: number): void {
    if (numeroPagina >= 1 && numeroPagina <= this.myObject.totalPages) {
      this.paginaAtual = numeroPagina;
      this.atualizarPrestadores();
    }
  }
  gerarArrayPaginas(): number[] {
    return Array.from({ length: this.myObject.totalPages }, (_, index) => index + 1);
  }
  avancarPagina(): void {
    if (this.paginaAtual < this.myObject.totalPages) {
      this.paginaAtual++;
      this.atualizarPrestadores();
    }
  }

  retrocederPagina(): void {
    if (this.paginaAtual > 1) {
      this.paginaAtual--;
      this.atualizarPrestadores();
    }
  }

  irParaPrimeiraPagina(): void {
    this.paginaAtual = 1;
    this.atualizarPrestadores();
  }

  irParaUltimaPagina(): void {
    this.paginaAtual = this.myObject.totalPages;
    this.atualizarPrestadores();
  }


}
