import React, { Component } from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import CustomerDelete from "./CustomerDelete";

class Customer extends Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.id}</TableCell>
        <TableCell>
          <img
            src={this.props.image}
            alt="profile"
            width="64px"
            height="64px"
          />
        </TableCell>
        <TableCell>{this.props.name}</TableCell>
        <TableCell>{this.props.birthday}</TableCell>
        <TableCell>{this.props.gender}</TableCell>
        <TableCell>{this.props.job}</TableCell>
        <TableCell>
          <CustomerDelete
            id={this.props.id}
            stateRefresh={this.props.stateRefresh}
          />
        </TableCell>
      </TableRow>
    );
  }
}

export default Customer;
