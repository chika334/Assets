import React, { Component } from 'react'
import { Table, Container, Button } from 'react-bootstrap'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addItem, getItems } from '../actions/tableActions';
// import { getItem } from '../actions/tableActions';

export class Networking extends Component {
  constructor(props) {
    super(props)

    this.state = {
      departmentName: '',
      listOfAssets: '',
      uniqueId: '',
      tableContent: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    addItem: PropTypes.func.isRequired,
    getItems: PropTypes.func.isRequired
  }

  handleClick(e) {
    e.preventDefault();

    // let randomID = Math.floor(Math.random() * 999999);
    var number = Math.random() // 0.9394456857981651
    number.toString(36); // '0.xtis06h6'
    var randomID = number.toString(36).substr(2, 9); // 'xtis06h6'
    // randomID.length >= 9; // false

    const { departmentName, listOfAssets, uniqueId, tableContent } = this.state

    let newItem = this.state.tableContent

    newItem.push({
      key: randomID,
      uniqueId: randomID,
      departmentName,
      listOfAssets
    });

    this.setState({
      tableContent: newItem
    })

    this.props.addItem(tableContent[0]);
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
    const { items } = this.props.item
    // console.log(items)

    const admin = (
      <form onSubmit={this.handleClick}>
        <label htmlFor="departmentName">Department Name</label>
        <input type="text" name="departmentName" onChange={this.handleChange} />

        <label htmlFor="Assets">Asset</label>
        <input type="text" name="listOfAssets" onChange={this.handleChange} />

        <button type="button" id="add" onClick={this.handleClick}>Add item</button>
      </form>
    )
    return (
      <section className="App">
        <header>
          <h1>Network Department</h1>
        </header>

        <section>
          <Container>
            {
              isAuthenticated && user.isAdmin ? admin : console.log('bad')
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
                  {items.map((newItem, index) => {
                    {
                      newItem.tableContent.map(({ _id, departmentName, listOfAssets, uniqueId }) => {
                        return (
                          <tr key={_id}>
                            <td>{index}</td>
                            <td>{departmentName}</td>
                            <td>{listOfAssets}</td>
                            <td>{uniqueId}</td>
                          </tr>
                        )
                      })
                    }
                  })}
                </tbody>
              </Table>
              {/* <Button onSubmit={this.handleSubmit}>Submit</Button> */}
            </Container>
          </section>
        </section>
      </section >
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  item: state.item,
})

export default connect(mapStateToProps, { addItem, getItems })(Networking)
