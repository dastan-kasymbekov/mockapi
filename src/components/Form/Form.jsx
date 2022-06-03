import React, {Component} from 'react';
import "bootstrap"

  class Form extends Component {

    constructor(props) {
      super(props);
      this.state = {
        Name: "",
        Group: "",
        Year: "",
        Phone: "",
        Email: ""
      };
      this.onChangeHandler = this.onChangeHandler.bind(this);
    }
    onChangeHandler(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
    render() {
      return (
        <div>
          <h3>Заполните форму</h3>
          <br />
          <form>
            <label>Name: </label>
            <input
              type="text"
              name="Name"
              placeholder="Enter name"
              onChange={this.onChangeHandler}
            />
            <label>Group: </label>
            <input
              type="text"
              name="Group"
              placeholder="enter name"
              onChange={this.onChangeHandler}
            />
            <label>Year: </label>
            <input
              type="number"
              name="Year"
              placeholder="Enter year"
              onChange={this.onChangeHandler}
            />
            <label>Phone: </label>
            <input
              type="text"
              name="Phone"
              placeholder="Enter phone"
              onChange={this.onChangeHandler}
            />
            <label>E-mail: </label>
            <input
              type="text"
              name="Email"
              placeholder="Enter e-mail"
              onChange={this.onChangeHandler}
            />
          </form>
          <br />
          <hr />
          <p>Data</p>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div>
      );
    }
  }



export default Form;