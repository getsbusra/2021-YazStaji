import React, { Component } from 'react';
import CustomersService from '../services/CustomersService';


class ListCustomersComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            customers: []
        }
        this.addCustomers = this.addCustomers.bind(this);
        this.editCustomers = this.editCustomers.bind(this);
        this.deleteCustomers = this.deleteCustomers.bind(this);
    }

    deleteCustomers(id) {
        CustomersService.deleteCustomers(id).then(res => {
            this.setState({ customers: this.state.customers.filter(customers => customers.id !== id) });

        });
    }

    /* viewCustomers(id){
         this.props.history.push(`/update-customers/${id}`);
     }*/

    editCustomers(id) {
        this.props.history.push('/update-customers/${id}');


    }
    componentDidMount() {
        CustomersService.getCustomers().then((res) => {
            this.setState({ customers: res.data });
        });
    }

    addCustomers() {
        this.props.history.push('/add-customers/_add');


    }



    render() {
        return (
            <div>
                <h2 className="text-center">Customers List</h2>
                <div className="row"></div>
                <button className="add-button" onClick={this.addCustomers} >Add Customers</button>

                <br></br>
                <div className="row">
                    <table className="table table-striped table bordered">
                        <thead>
                            <tr>

                                <th>Company Name</th>
                                <th>Contact Name</th>
                                <th>Contact Title</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>Postal Code</th>
                                <th>Country</th>
                                <th>Phone</th>
                                <th>Fax</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.customers.map(
                                    customers =>
                                        <tr key={customers.id}>
                                            <td> {customers.company_name} </td>
                                            <td> {customers.contact_name} </td>
                                            <td> {customers.contact_title} </td>
                                            <td> {customers.address} </td>
                                            <td> {customers.city} </td>
                                            <td> {customers.postal_code} </td>
                                            <td> {customers.country} </td>
                                            <td> {customers.phone} </td>
                                            <td> {customers.fax} </td>
                                            <td>
                                                <button onClick={() => this.editCustomers(customers._id)} className="button">Update</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteCustomers(customers.id)} className="button">Delete</button>
                                            </td>


                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListCustomersComponent;