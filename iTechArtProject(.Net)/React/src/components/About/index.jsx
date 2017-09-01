import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import Menu from './menu.jsx';
import Contacts from './contacts.jsx';
import Vacancies from './vacancies.jsx';
import News from './news.jsx';


class About extends React.Component{
  componentDidMount(){
    this.props.init();
  }
  render(){
    return (
      <main className="aboutPage">
          <Menu/>
          <Route path={`${this.props.match.url}/contacts`} component={Contacts}/>
          <Route path={`${this.props.match.url}/vacancies`} render={()=><Vacancies vacancies={this.props.vacancies}/>}/>
          <Route path={`${this.props.match.url}/news`} render={()=><News news={this.props.news}/>}/>
          <Route exact path={this.props.match.url} render={() => ( <Redirect to={`${this.props.match.url}/news`}/>)}/>
      </main>);
  }
};
export default About;