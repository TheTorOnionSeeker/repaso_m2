import React from 'react';

export default class Home extends React.Component{
	
	/*constructor(props){
		super(props);
		this.state={
			name:'Guillermo'
		}
	}*/

	// this.setState -> para modificar el estado. Modifico todo lo que tengo definido(modifico el estado completo)

	render(){
		return(
			<div>
				HOME
			</div>
			)
	}
}

// CICLO DE VIDA DE UN COMPONENTE:
// 1. CONSTRUCTOR
// 2. RENDER
// 3. COMPONENTDIDMOUNT (sólo componentes de clase) ||
//    useEffect(()=> {},[]) (sólo componentes funcionales)

// POSIBLES CAMBIOS
// HUBO UN CAMBIO EN UN VALOR DE UNA PROP? || HUBO UN CAMBIO EN UN ESTADO?
// HUBO UN FORCEUPDATE()?

//UPDATE
  // 1. SHOULDCOMPONENTUPDATE (componente de clase) -> true/false
  // 2. RENDER() ¡¡¡NO SE VUELVE A EJECUTAR EL CONSTRUCTOR!!!
  // 3. DIDCOMPONENTUPDATE (componentes de clase) ||
  //     useEffect(()=> {},[dependencies]) (componentes funcionales)

// SI EL COMPONENTE VA A DESAPARECER DEL DOM
// COMPONENTWILLUNMOUNT() (componente de clase) ||
// useEffect(()=> return()=>{}) (componentes funcionales)