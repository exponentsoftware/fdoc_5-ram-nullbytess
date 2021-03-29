import React, { Component } from 'react'
import axios from 'axios'
import '../App.css';
class DataList extends Component {
	constructor(props) {
		super(props)

		this.state = {
      children: [],
      errorMsg: ''
		}
	}

	componentDidMount() {
		axios
			.get('https://restcountries.eu/rest/v2/all')
			.then(response => {
                console.log(response)
				console.log(response.data)
				this.setState({ children: response.data})
			})
			.catch(error => {
        console.log(error)
        this.setState({errorMsg: 'Error retrieving data'})
			})
	}

	render() {
		const { children, errorMsg } = this.state;
        console.log(children.length)
		return (
			<div >
                <div className = "heading">
				<h1 >Data List</h1>
                </div>
            <table>
               <tbody>
                   <div className = "data">
                  {
					//   to show the data
					//   .sort((a,b) => a.language.countries && b.language.countries >= 3)
					children.sort((a,b) => a.area - b.area).reverse().slice(0, 10).map(res =>
                        <tr>
                            <td> <div>country : "{res.name}" area : {res.area}</div></td>
                        </tr> 
                       )
				  }
			  </div>
               </tbody>
            </table>
			</div>
		)
	}
}

export default DataList