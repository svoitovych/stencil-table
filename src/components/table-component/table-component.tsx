import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'table-component',
  styleUrl: 'table-component.css',
  shadow: false,
})
export class TableComponent {
  @State() data = null;
  @State() checkboxesVisible: boolean = false;
  @State() completeChecked: boolean = true;
  @State() unCompleteChecked: boolean = true;
  @State() erroredChecked: boolean = true;

  @State() completeCheckbox = true;
  @State() incompleteCheckbox = true;
  @State() erroredCheckbox = true;

  componentWillLoad() {
    return fetch('https://dummyjson.com/c/2417-c645-45a3-973d')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.data = data;
      });
  }

  buttonClick() {
    this.checkboxesVisible = !this.checkboxesVisible;
    console.log('buttonclicked');
  }

  checkboxClick(e) {
    console.log(e);
  }

  renderTable() {
    return <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Carrier</th>
          <th
              class={{
                "table__status-header--hidden": !this.checkboxesVisible,
                "table__status-header": true
          }}>
            Status
            <button class="table__dropdown-button" onClick={() => this.buttonClick()}></button>
            <div
              class="table__chackbox-wrapper"
              hidden={!this.checkboxesVisible}>
                <form-input
                  inputHandler={() => {
                    this.completeCheckbox = !this.completeCheckbox;
                  }}
                  checked={this.completeCheckbox}
                  name="complete"
                >
                </form-input>
                <form-input
                  inputHandler={() => {
                    this.incompleteCheckbox = !this.incompleteCheckbox;
                  }}
                  checked={this.incompleteCheckbox}
                  name="incomplete"
                >
                </form-input>
                <form-input
                  inputHandler={() => {
                    this.erroredCheckbox = !this.erroredCheckbox;
                  }}
                  checked={this.erroredCheckbox}
                  name="errored"
                >
                </form-input>
            </div>
          </th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
      {this.renderRow(this.data)}
      </tbody>
    </table>
  }

  renderRow(data) {
    const filteredData = data.filter( item =>
      item.status === "COMPLETE" && this.completeCheckbox ||
      item.status === "INCOMPLETE" && this.incompleteCheckbox ||
      item.status === "ERROR" && this.erroredCheckbox
    );

    return filteredData.map((item) => <tr>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.carrier}</td>
      <td>{item.status}</td>
      <td>{item.eventDate}</td>
    </tr>);
  }

  render() {
    return this.data ? this.renderTable() : "No Data";
  }
}
