import React, { Component } from 'react'
import { Table, Container } from 'react-bootstrap'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

export class Networking extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // DepartmentName: '',
      Asset: '',
      UniqueId: '',
      tableContent: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  static propTypes = {
    auth: PropTypes.object.isRequired
  }

  handleClick(e) {
    e.preventDefault();

    let tableContent = [...this.state.tableContent];

    tableContent.push({
      UniqueId: this.state.UniqueId,
      Asset: this.state.Asset
    })

    this.setState({
      tableContent,
      UniqueId: '',
      Asset: ''
    })
    // Don't forget to check if the inputs are corrects

    // Here i generate a random number for the key propriety that react need
    // let randomID = Math.floor(Math.random() * 999999);

    // recreate a new object and stock the new line in
    // let newTab = this.state.tableContent;
    // newTab.push({
    //   key: randomID,
    //   title: "",
    //   amount: "" // Don't forget to get the value of the inputs here
    // });

    // this.setState({
    //   tableContent: newTab
    // });

    // Clear the content of the inputs

    // the state has changed, so the tab is updated.
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const admin = (
      <form>
        <label htmlFor="DepartmentName">Department Name</label>
        <input type="text" name="DepartmentName" onChange={this.handleChange} />

        <label htmlFor="Asset">Amount</label>
        <input type="text" name="Asset" onChange={this.handleChange} />

        <label htmlFor="UniqueId">Unique Id</label>
        <input type="text" name="UniqueId" onChange={this.handleChange} />

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

              {/* <h1>Items</h1> */}
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
                  {this.state.tableContent.map((item) =>
                    <tr key={item.key}>
                      <td>{item.title}</td>
                      <td>{item.amount}</td>
                      {/* <td> */}
                      {/* Here add the onClick for the action "remove it" on the span */}
                      {/* <span>Remove it</span> */}
                      {/* </td> */}
                      <td></td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </Container>
          </section>
        </section>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, null)(Networking)
