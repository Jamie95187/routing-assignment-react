import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Course extends Component {
    state = {
      courseTitle: ''
    }

    componentDidMount(){
      console.log(this.props);
      const query = new URLSearchParams(this.props.location.search);
      for(let param of query.entries()){
        this.setState({courseTitle: param[1]})
      }
    }

    render () {
        return (
            <div className="Course">
              <h1>{this.state.courseTitle}</h1>
              <p>You have selected the Course with ID: {this.props.match.params.courseId}</p>
            </div>
        );
    }
}

export default withRouter(Course);
