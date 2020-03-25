import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Course extends Component {

    // componentDidMount(){
    //   console.log(this.props);
    // }

    render () {
        // let course = null;
        // if(this.props.match.params.id){
        //   return (
        //     <Course id={this.props.id}>
        // <h1>{this.props.title}</h1>
        // <p>You have selected the Course with ID: {this.props.match.params.id}</p>
        //     </Course>
        //   )
        // }
        return (
            <div className="Course">
              <h1>Course Title</h1>
              <p>You have selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default withRouter(Course);
