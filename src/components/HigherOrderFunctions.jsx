import React from 'react'
import '../hof.css'

class HigherOrderFunctions extends React.Component {

  constructor(){
    super()
    this.state = {
        userData: [
            { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
            { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
            { id: '3', name: 'John', user_type: 'Teacher', age:24,years: 2},
            { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
            { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
        ]
    }
  }
  listAllItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((user) => (
        <React.Fragment key={user.id}>
            <li className="list-elements">
                <span>Id: {user.id}</span>
                <span>Name : {user.name}</span>
                <span>User Type: {user.user_type}</span>
           </li>
        </React.Fragment>
    ))
    return mapRows
  }
    listData_userType = (userType) => {
    const data = this.state.userData
    let filtered_data=data.filter(user =>user.user_type===userType)
    const mapRows = filtered_data.map(user => 
      <React.Fragment key={user.id}>
      <li className="list-elements">
          <span>Id: {user.id}</span>
          <span>Name : {user.name}</span>
          <span>User Type: {user.user_type}</span>
     </li>
     </React.Fragment>
    )
    return mapRows
    }
    listData_startWithJ = () => {
      const data = this.state.userData
      let filtered_data=data.filter(user =>user.name[0]==='J')
      const mapRows = filtered_data.map(user => 
        <React.Fragment key={user.id}>
        <li className="list-elements">
            <span>Id: {user.id}</span>
            <span>Name : {user.name}</span>
            <span>User Type: {user.user_type}</span>
       </li>
     </React.Fragment>
      )
      return mapRows
    }
    listData_age = () => {
      const data = this.state.userData
      let filtered_data=data.filter(user =>user.age>20 && user.age<=50)
      const mapRows = filtered_data.map(user => 
        <React.Fragment key={user.id}>
        <li className="list-elements">
            <span>Id: {user.id}</span>
            <span>Name : {user.name}</span>
            <span>User Type: {user.user_type}</span>
       </li>
       </React.Fragment>
      )
      return mapRows
    }
    totalExp = () => {
      const data = this.state.userData
      let filtered_data=data.filter(user =>user.user_type === 'Designer')
      let total = filtered_data.reduce((sum,curr)=>sum + curr.years,0)
      return total
    }
  
  render() {
    return (
      <>
      <div className='progression-1'>
      <h1>Display all items</h1>
      <div className="display-box">
        <ul>{this.listAllItems()} </ul>
      </div>
      </div>
      <div className='progression-2'>
      <h1>Display based on user type</h1>
      <div className="display-box">
        <ul>{this.listData_userType('Designer')} </ul>
      </div>
      </div>
      <div className='progression-3'>
      <h1>Filter all names starting with the letter J </h1>
      <div className="display-box">
        <ul>{this.listData_startWithJ()} </ul>
      </div>
      </div>
      <div className='progression-4'>
      <h1>Filter the data based on the age</h1>
      <div className="display-box">
        <ul>{this.listData_age()} </ul>
      </div>
      </div>
      <div className='progression-5'>
      <h1>Total years of experience of the designers: {this.totalExp()}</h1>
      </div>
      </>
    )
  }
}

export default HigherOrderFunctions
