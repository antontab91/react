import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      student: '',
      occupation: '',
      about: '',
    }

  }

  handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    const val = type === 'checkbox' ? checked : value; // если у нас тип данных чекбокс тогда записываем в состояние чекнутый он или нет , если не чек бокс - тогда запаисываем велью 

    this.setState({
      [name]: val,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit} className="login-form">
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
          <label className="form-label" htmlFor="name">Name</label>
          <input
            onChange={this.handleChange}
            value={this.state.name}
            className="form-input"
            type="text"
            id="name"
            name="name"
          />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="student">Student</label>
          <input
            onChange={this.handleChange}
            value={this.state.student}
            className="form-input"
            type="checkbox"
            id="student"
            name="student"
          />
        </div>
        <div className="form-control">
          <label className="form-label" id="occupation" htmlFor="occupation">Occupation</label>
          <select
            onChange={this.handleChange}
            value={this.state.occupation}
            name="occupation"
            className="form-input"
          >
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="coconut">Sidney</option>
            <option value="mango">Berlin</option>
          </select>
        </div>
        <div className="form-control">
          <label className="form-label" id="about" htmlFor="about">About</label>
          <textarea
            onChange={this.handleChange}
            value={this.state.about}
            name="about"
            className="form-input"
          />
        </div>
        <button className="submit-button" type="submit">Submit</button>
      </form>
    )
  }
}

export default UserForm;