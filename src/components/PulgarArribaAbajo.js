import React, { Component } from 'react';
class PulgarArribaAbajo extends Component {
    //es lo primero que se inicializa en la clase el constructor
    constructor(props) {
        super(props);
        console.log('Constructor');
    }
//Actualización
//Una actualización puede ser causada por cambios en los props o el estado. Estos métodos se llaman en el siguiente orden cuando un componente se vuelve a renderizar:
    shouldComponentUpdate() {
      console.log('shouldComponentUpdate');
      return true
    }
//Montaje del componente
//se invoca inmediatamente después de montar un componente (insertado en el árbol). La inicialización que requiere nodos DOM debería ir aquí. Si necesita cargar datos desde un punto final remoto, este es un buen lugar para instanciar la solicitud de red.
    componentDidMount() {
      console.log('componentDidMount');
    }
 //   se invoca inmediatamente después de que se produce la actualización. Este método no se llama para el renderizado inicial.
 //Use esto como una oportunidad para operar en el DOM cuando el componente se haya actualizado. Este también es un buen lugar para hacer solicitudes de red siempre que compare los accesorios actuales con los accesorios anteriores (por ejemplo, una solicitud de red puede no ser necesaria si los accesorios no han cambiado).
    componentDidUpdate() {
      console.log('componentDidUpdate');
    }
//se invoca inmediatamente antes de que un componente se desmonte y se destruya. Realice cualquier limpieza necesaria en este método, como invalidar temporizadores, cancelar solicitudes de red o limpiar cualquier suscripción creada componentDidMount().
//Usted no debe llamar setState() en componentWillUnmount()porque nunca será volver a representar el componente. Una vez que se desmonta una instancia de componente, nunca se volverá a montar.
    componentWillUnmount() {
      console.log('componentWillUnmount');
    }

    render() {
        console.log('Render');
        const { color } = this.props;
        return (
          <div className="color-box" style={{ backgroundColor: color, width: '100px', height: '100px' }}>
            {color}
          </div>
        );
    }
}

export default PulgarArribaAbajo;
