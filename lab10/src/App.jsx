import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
      super(props)
      this.state = {
        productos:[
          
            {
              "codigo": 1,
              "descripcion": "Coca cola",
              "precio": 2.33
            },
            {
              "codigo": 2,
              "descripcion": "Fanta",
              "precio": 1.7
            }
          
        ],
        recuperado: false
      }     
    }
    componentDidMount() {
      fetch('http://localhost:5173/api/producto/')
        .then((response) => {
          return response.json()
        })
        .then((prod) => {
          this.setState({ productos: prod, recuperado: true})
        })
    }
    mostrarTabla() {
      return (
        <div>
          <table border="1">
          <thead>
            <tr>
              <th>Código</th>
              <th>Descripción</th>
              <th>Precio</th>                    
            </tr>
          </thead>
          <tbody>  
            {this.state.productos.map(prod => {
              return (
                <tr key={ prod.codigo}>
                  <td>{ prod.codigo}</td>
                  <td>{ prod.descripcion}</td>
                  <td>{ prod.precio}</td>
                </tr>
              );
            })}
          </tbody>
          </table>
        </div>
      );
    }  
    render() {
      if (this.state.recuperado)
        return this.mostrarTabla()
      else
        return this.mostrarTabla()
    }
  
}
export default App