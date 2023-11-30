import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/interfaces/libro';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  libros!: Libro[];
   
  constructor() {
    this.cargarLibros();
  }

  ngOnInit() {
  }
//Eliminacion de un Libro
  eliminarLibro(libro: Libro) {
    for(var i= 0; i <= this.libros.length;i++){
      if (this.libros[i].nombre == libro.nombre){
          this.libros.splice(i,1)
      }
      console.log(this.libros)
    }
  }
  cargarLibros() {
    this.libros = [
      {
        nombre: "Pez trepando un arbol", genero: "Ciencia",
        precio: 2000, autor: "Heer", imagen: "https://images.cdn1.buscalibre.com/fit-in/360x360/cc/f6/ccf638fed0cab46d6af4930a72bd2d76.jpg",
      },
      {          
        nombre: "Harry Potter", genero: "Fantasia",
        precio: 15000, autor: "Rowling", imagen: "https://http2.mlstatic.com/libro-harry-potter-y-la-piedra-filosofal-pdf-D_NQ_NP_890715-MLM25281969645_012017-F.jpg"
      },
      {
        nombre: "Lo mejor de mi", genero: "Romantico",
        precio: 7000, autor: "Spark", imagen: "https://tse1.mm.bing.net/th?id=OIP.IVMJbDOhM5Ks0Wuw-mRr-QHaLQ&pid=Api&P=0&h=180"
      }, 
      {
        nombre: "Principito", genero: "Fantasia",
        precio: 7000, autor: "Antoine", imagen: "https://tse4.mm.bing.net/th?id=OIP.5ppgJvxoeRePzLc2Tf0qTwHaK-&pid=Api&P=0&h=180"
      },
      {
        nombre: "Generacion Idiota", genero: "Politica",
        precio: 2000, autor: "Laje", imagen: "https://tse2.mm.bing.net/th?id=OIP.g8RlzQeRNeQxVWinbV7euwHaLG&pid=Api&P=0&h=180"
      },
      {
        nombre: "Sinsajo", genero: "Fantasia",
        precio: 20000, autor: "Collins", imagen: "https://3.bp.blogspot.com/-4tl2bVfXrxU/UpncVa3Cs-I/AAAAAAAADeI/cUO1f2xi2lM/s1600/sinsajo-ebook-9788427200630.jpg"
      },
      {
        nombre: "Psicoanalista", genero: "Psicologia",
        precio: 20000, autor: "Katzenb", imagen: "https://tse2.mm.bing.net/th?id=OIP.P5YWViZu270_ZbSuaeV6lgHaLZ&pid=Api&P=0&h=180"
      },
      {
        nombre: "Desarrollo Movil", genero: "Informatica",
        precio: 25000, autor: "Vaquero", imagen: "https://m.media-amazon.com/images/I/71hiVIVRGyL._SY522_.jpg"
      },
      {
        nombre: "Artes Marciales", genero: "Deportes",
        precio: 8000, autor: "Cochran", imagen: "https://images.cdn2.buscalibre.com/fit-in/360x360/c1/a3/c1a3b40d1552da9053cca872889f671c.jpg"
      },
      {
        nombre: "Habitos Atomicos", genero: "Crecimiento Personal",
        precio: 18000, autor: "Clear", imagen: "https://m.media-amazon.com/images/I/71prwdyuE7L._AC_UF1000,1000_QL80_.jpg"
      },
      {
        nombre: "Fitness", genero: "Deportes",
        precio: 9000, autor: "Souto", imagen: "https://bebooks.io/wp-content/uploads/2022/01/libro-fitness-toda-la-verdad.jpg"
      },
    ] 
  }
}
