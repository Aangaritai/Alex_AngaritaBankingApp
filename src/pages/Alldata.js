import { useContext } from "react";
import { UserContext } from "../context";
import Card from "../context";
import * as React from 'react';

function AllData() {
  const ctx = useContext(UserContext);
  
  
  const TableBody = () => {
    const userdata = ctx.users.filter((item) => item.name != "");
    const rows = userdata.map((row, index) => {
      return (
        /* eslint eqeqeq: 0 */
        <tr key={index}>
          <th scope="row">{index + 1}</th>
          <td>{row.name}</td>
          <td>{row.email}</td>
          <td>{row.password}</td>
          <td>{row.balance}</td>
        </tr>
      );
    });

    return <tbody>{rows}</tbody>;
  };

  const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col">Balance</th>
        </tr>
      </thead>
    );
  };

  return (
    <Card
      txtcolor="dark"
      header="All data"
      body={
        <div className="table-responsive">
          <table className="table table-striped">
            <TableHeader />
            <TableBody />
          </table>
        </div>
      }
    />
  );
}

export default AllData;
