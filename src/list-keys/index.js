import React, { Component } from 'react'

export default class ListsKeys extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [
                { name: "Hoang", age: 18 },
                { name: "Hoang1", age: 19 },
                { name: "Hoang2", age: 20 },
                { name: "Hoang3", age: 21 }
            ],
        }
    }
    renderTable = () => {
        const { listData } = this.state;
        return listData.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div>
                <h3>*ListKeys</h3>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()} 
                    </tbody>
                </table>
            </div>
        )
    }
}
