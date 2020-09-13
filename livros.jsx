import React from 'react';
import { Table , Panel , PanelGroup, Button, Grid, Row , Col } from 'rsuite';
import './livros.css';
const { Column, HeaderCell, Cell } = Table;

export default () => {

  const livros = [
    { id: 1 , autor: 'Noah Gordon' , titulo: 'O Físico' ,  ano: 1986 , foto: 'https://images-na.ssl-images-amazon.com/images/I/51-4KZj9e3L._SX345_BO1,204,203,200_.jpg' } ,
    { id: 2 , autor: 'Noah Gordon' , titulo: 'Xaman' ,  ano: 1992 , foto: 'https://m.media-amazon.com/images/I/51ZOZ5oxHuL._SY346_.jpg'} ,
    { id: 3 , autor: 'Fiodor Dostoievski' , titulo: 'Crime e Castigo' , ano: 1866 , foto: 'https://images-na.ssl-images-amazon.com/images/I/51UVouCrsXL._SX327_BO1,204,203,200_.jpg'} ,
    { id: 4 , autor: 'Ray Bradburry' , titulo: 'Fahrenheit 451' ,  ano: 2009 , foto: 'https://blackwells.co.uk/jacket/l/9780006546061.jpg'} ,
    { id: 5 , autor: 'Milan Kundera' , titulo: 'A Insustentável Leveza do Ser' ,  ano: 1984 , foto: 'https://images-na.ssl-images-amazon.com/images/I/51sIPA1XisL._SX344_BO1,204,203,200_.jpg'} ,
    { id: 6 , autor: 'Machado de Assis' , titulo: 'Dom Casmurro' , ano: 1899 , foto: 'https://images-americanas.b2w.io/produtos/imagens/7176126/7176127_1GG.jpg' } ,
    { id: 7 , autor: 'Fiodor Dostoievski' , titulo: 'Noites Brancas' ,  ano: 1848 , foto: 'https://images-na.ssl-images-amazon.com/images/I/51abtTuOi8L._SX346_BO1,204,203,200_.jpg'} ,
    { id: 8 , autor: 'Bernard Cornwell' , titulo: 'As crônicas de Artur - Rei do Inverno' ,  ano: 1995 , foto: 'https://images-na.ssl-images-amazon.com/images/I/61FEEdiB-JL._SX343_BO1,204,203,200_.jpg'} ,
]

return (
        <>

  {livros.map(item=>(  
    <Panel key={item.id} shaded bordered bodyFill style={{ display: 'inline-block' , width: 300 }}>
      < img src={item.foto} width="100%" height="auto" />
        <Panel header={ item.titulo + ' - ' + item.autor}>
          <Grid fluid>
            <Row className="show-grid">
              <Col sm={12}> <strong>{ item.ano}</strong></Col>
              <Col sm={12}><Button color="violet"> Detalhes </Button></Col>
            </Row>
          </Grid>
        </Panel>
    </Panel>


        ))}


   
         </>
    )
}

