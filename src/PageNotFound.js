import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom';
export default class PageNotFound extends Component {
  constructor(props) {
      super(props);
      this.state = {
          showRedirect: false
      }
  }
  componentDidMount() {
      setTimeout(() => {
          this.setState({
              showRedirect: true
          })
      }, 2000)
  }

  render() {
    return (
      <div>
        <h1>404 - Page Not Found</h1>
        <Link to="/">
        Click here to go home or you will be redirected
        </Link> {/* this causes a tiny memory link because setTimeout is still running */}
        {this.state.showRedirect ? <Redirect to="/" /> : null }
      </div>
    )
  }
}


