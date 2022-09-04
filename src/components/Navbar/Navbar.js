import * as React from 'react';

export default function Navbar() {    
  return (
      <nav className="nav">
          <a href="/" className="site-title">Bad Bank</a>
          <ul>
            <li className="active">
            <a href="/">Home</a>
            </li>
            <li><a href="/login">Login</a></li>
            <li><a href="/createaccount">Create Acccount</a></li>
            <li>
              <a href="/deposit">Deposit</a></li>
            <li>
             <a href="/withdraw">Withdraw</a></li>
             <li>
              <a href="/alldata">All Data</a></li>
          </ul>
      </nav>
    )
}

