import { Component } from 'react';
import styles from '../Form/Form.module.css';
import shortid from 'shortid';

class Form extends Component {
  state = {
    name: '',
    number: ''
  }
  loginInputId = shortid.generate();
    
  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = event => {
  event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();

  }
  
  reset = () => {
    this.setState({
      name: '',
      number: ''
    });
  }
  render() {
    return (
      <form
        className={styles.form}
        onSubmit={this.handleSubmit}
      >
        <label>
          Name
          <input
            type="text"
            name="name"
            id={this.loginInputId}
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number
          <input
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}          
          />
        </label>
        <button type="submit">Add contact</button>
      </form>   
    )
  }
}
export default Form;