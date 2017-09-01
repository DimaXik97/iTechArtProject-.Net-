import React from 'react';

import UserInfo from "./../UserInfo/index.jsx"
import UserStatistics from "./../UserStatistics/index.jsx"
import ContainerElements from "./../ContainerElements/index.jsx"

class User extends React.Component{
  componentDidMount(){
    this.props.init(this.props.match.params.id?this.props.match.params.id:this.props.userId, "user");
  }
  render(){
    let isAdmin = window.location.pathname.indexOf("/admin/")==0;
    let userQuestions=(
      <ContainerElements url={"/admin/question"} 
        data={this.props.questions.map((element)=>{return {id:element.id, text: `${element.test.name} (${element.test.category}) ${element.date}`}})}/>);
    return (
      <main>
          <UserInfo user={{name:this.props.user.name, surname: this.props.user.surName}} photo={this.props.user.photo} isAdmin={isAdmin}/>
          <UserStatistics statistics={this.props.statistics}/>
          {isAdmin?userQuestions:undefined}
      </main>
    );
  }
};
export default User;