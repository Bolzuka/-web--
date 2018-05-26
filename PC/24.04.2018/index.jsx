import React from 'react';
import { render as r } from 'react-dom';

const data = {
     "users":[
     {
      "login":"student",
      "password":"tneduts"
     },
     {
      "login":"myuserlogin",
      "password":"mypas"
     },
     {
      "login":"prof",
      "password":"fessor"
     },
     {
      "login":"ego",
      "password":"selfish"
     }]
};

function GetStars(n) {
	let r = '';
	for(let i = 0; i < n; i++) {
		r = r + '⭐️';
	}
	return r;
}

const Person = ({stars, text}) => <span><b>{ text.toUpperCase() }</b>: { GetStars(stars) }</span>;
// yarn run build

const PersonList = () => {
	return data.users.map((user, i) =><div>{i+1}: <Person text={user.login} stars={user.login.length} /></div>)
}


r(
    <PersonList />,
	document.querySelector('.cont'),
);