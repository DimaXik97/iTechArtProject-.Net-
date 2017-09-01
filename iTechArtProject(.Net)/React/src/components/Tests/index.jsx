import React from 'react';
import ContainerElements from "./../ContainerElements/index.jsx"
import Sort from "./../../containers/Sort.js"

class Test extends React.Component{/*({tests,addTest,deleteTest, changeTest})=> */
constructor(props) {
  super(props);
  this.addElement = this.addElement.bind(this);
  this.deleteElement = this.deleteElement.bind(this);
}
componentDidMount(){
  this.props.init(this.props.match.params.category);
}
addElement(){
  this.props.addTest(this.props.match.params.category);
}
deleteElement(id){
  this.props.deleteTest(this.props.match.params.category, id)
}
render(){
  let isAdmin = window.location.pathname.indexOf("/admin/")==0;
  return (
    <main>
        <h1 className="title">Выберете тест:<Sort orderFields={this.props.orderFields} field={this.props.field} changeOrderField={this.props.changeOrderField}/></h1>
        <ContainerElements
          url={window.location.pathname}
          data={this.props.tests.map((element)=>{return {
            id:element.id,
            text: element.name,
            isReady: element.isReady}
            }
          )}
          isAdmin={isAdmin}
          addElement={this.addElement}
          deleteElement={this.deleteElement}
          changeCheckBox={this.props.changeTest}
        />
    </main>
  );
}
};
export default Test;