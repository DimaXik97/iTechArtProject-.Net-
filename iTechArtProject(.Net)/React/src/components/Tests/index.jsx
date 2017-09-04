import React from 'react';
import ContainerElements from "./../ContainerElements/index.jsx"
import Sort from "./../../containers/Sort.js"

class Test extends React.Component{/*({tests,addTest,deleteTest, changeTest})=> */
constructor(props) {
  super(props);
  this.addElement = this.addElement.bind(this);
  this.deleteElement = this.deleteElement.bind(this);
  this.changeIsReadyElement = this.changeIsReadyElement.bind(this);
  this.changeNameElement = this.changeNameElement.bind(this);
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
changeIsReadyElement(id, data){
  this.props.changeIsReadyTest(this.props.match.params.category, id, data);
}
changeNameElement(id, data){
  this.props.changeNameTest(this.props.match.params.category, id, data);
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
          changeCheckBox={this.changeIsReadyElement}
        />
    </main>
  );
}
};
export default Test;