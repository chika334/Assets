import React, { Component } from 'react';
import { Table, Container, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem, getItems } from '../actions/softwareAction';
import '../css/proform.css';

class Software extends Component {
  constructor(props) {
    super(props)

    this.state = {
      departmentName: '',
      listOfAssets: '',
      tableSoftware: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
    software: PropTypes.object.isRequired,
    addItem: PropTypes.func.isRequired,
    getItems: PropTypes.func.isRequired
  }

  handleClick(e) {
    e.preventDefault();

    var number = Math.random() // 0.9394456857981651
    number.toString(36); // '0.xtis06h6'
    var randomID = number.toString(36).substr(2, 9); // 'xtis06h6'

    const { departmentName, listOfAssets, tableSoftware } = this.state

    let newItem = this.state.tableSoftware

    newItem.push({
      key: randomID,
      uniqueId: randomID,
      departmentName,
      listOfAssets
    });

    this.setState({
      tableSoftware: newItem
    })

    this.props.addItem(tableSoftware[0]);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  componentDidMount() {
    this.props.getItems()
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const { software } = this.props.software
    // console.log(software)

    const admin = (
      <form onSubmit={this.handleClick}>
        <div className="department">
          <label htmlFor="departmentName">Department Name: </label>
          <input type="text" name="departmentName" onChange={this.handleChange} />
        </div>

        <div className="asset">
          <label htmlFor="Assets">Asset: </label>
          <input type="text" name="listOfAssets" onChange={this.handleChange} />
        </div>

        <button type="button" id="add" onClick={this.handleClick}>Add item</button>
      </form>
    )
    return (
      <section className="App">
        <header>
          <h1>Software Department</h1>
        </header>

        <section>
          <Container>
            {
              isAuthenticated && user.isAdmin ? admin : null
            }
          </Container>

          <section>
            <Container>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Department Name</th>
                    <th>Asset</th>
                    <th>Unique Id</th>
                  </tr>
                </thead>
                <tbody>
                  {software.map((newItem, index) => (
                    // console.log(newItem)
                    newItem.tableSoftware.map(({ _id, departmentName, listOfAssets, uniqueId }) => (
                      <tr key={_id}>
                        <td>{index}</td>
                        <td>{departmentName}</td>
                        <td>{listOfAssets}</td>
                        <td>{uniqueId}</td>
                      </tr>
                    ))
                  ))}
                </tbody>
              </Table>
            </Container>
          </section>
        </section>
      </section >
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  software: state.software,
})

export default connect(mapStateToProps, { addItem, getItems })(Software)
