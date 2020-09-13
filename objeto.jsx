import React from 'react';
import { Table } from 'rsuite';

export default () => {

  const livros = [
    { id: 1 , autor: 'Noah Gordon' , titulo: 'O Físico' ,  ano: 1986} ,
    { id: 2 , autor: 'Noah Gordon' , titulo: 'Xaman' ,  ano: 1992} ,
    { id: 3 , autor: 'Fiodor Dostoievski' , titulo: 'Crime e Castigo' , ano: 1866} ,
    { id: 4 , autor: 'Ray Bradburry' , titulo: 'Fahrenheit 451' ,  ano: 2009} ,
    { id: 5 , autor: 'Milan Kundera' , titulo: 'A Insustentável Leveza do Ser' ,  ano: 1984} ,
    { id: 6 , autor: 'Machado de Assis' , titulo: 'Dom Casmurro' , ano: 1899 } ,
    { id: 7 , autor: 'Fiodor Dostoievski' , titulo: 'Noites Brancas' ,  ano: 1848} ,
    { id: 8 , autor: 'Bernard Cornwell' , titulo: 'As crônicas de Artur - Rei do Inverno' ,  ano: 1995} ,
]

    console.log(livros)

    const { Column, HeaderCell, Cell } = Table;

    return (
        <>
     <div>
        <Table height={420} data={livros}>
          <Column width={50} align="center" resizable>
            <HeaderCell>Id</HeaderCell>
            <Cell dataKey="id" />
          </Column>

          <Column width={100} resizable>
            <HeaderCell>Autor</HeaderCell>
            <Cell dataKey="autor" />
          </Column>

          <Column width={100} resizable>
            <HeaderCell>Título</HeaderCell>
            <Cell dataKey="titulo" />
          </Column>

          <Column width={200} resizable>
            <HeaderCell>Ano</HeaderCell>
            <Cell dataKey="ano" />
          </Column>
        </Table>
      </div>


         <ul>
           { livros.map(item=>(
               <li> {item.autor} - {item.titulo} - {item.ano} </li>
           ) ) }
         </ul>

         
         </>
    )
}