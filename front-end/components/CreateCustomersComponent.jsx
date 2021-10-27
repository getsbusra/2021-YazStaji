import React, { Component } from 'react';
import CustomersService from '../services/CustomersService';

class CreateCustomersComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            company_name: '',
            contact_name: '',
            contact_title: '',
            address: '',
            city: '',
            postal_code: '',
            country: '',
            phone: '',
            fax: ''

        }
        this.changeCompanyNameHandler = this.changeCompanyNameHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeContactNameHandler = this.changeContactNameHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changePhoneHandler = this.changePhoneHandler.bind(this);
        this.changeCountryHandler = this.changeCountryHandler.bind(this);
        this.changePostalCodeHandler = this.changePostalCodeHandler.bind(this);
        this.changeFaxHandler = this.changeFaxHandler.bind(this);
        this.changeContactTitleHandler = this.changeContactTitleHandler.bind(this);
        this.saveOrUpdateCustomers = this.saveOrUpdateCustomers.bind(this);
    }

    componentDidMount() {
        if (this.state.id === '_add') {
            return
        } else {
            CustomersService.getCustomersById(this.state.id).then((res) => {
                let customers = {
                    postal_code: this.state.postal_code,
                    company_name: this.state.company_name,
                    contact_name: this.state.contact_name,
                    contact_title: this.state.contact_title,
                    address: this.state.address,
                    country: this.state.country,
                    city: this.state.city,
                    phone: this.state.phone,
                    fax: this.state.fax
                };
                this.setState({
                    company_name: customers.company_name,
                    contact_name: customers.contact_name,
                    contact_title: customers.contact_title,
                    address: customers.address,
                    city: customers.city,
                    postal_code: customers.postal_code,
                    country: customers.postal_code,
                    phone: customers.phone,
                    fax: customers.fax
                });
            });
        }
    }
    saveOrUpdateCustomers = (event) => {
        event.preventDefault();
        let customers = {
            postal_code: this.state.postal_code,
            company_name: this.state.company_name,
            contact_name: this.state.contact_name,
            contact_title: this.state.contact_title,
            address: this.state.address,
            country: this.state.country,
            city: this.state.city,
            phone: this.state.phone,
            fax: this.state.fax
        };
        console.log('customers =>' + JSON.stringify(customers));


        if (this.state.id === '_add') {
            CustomersService.createCustomers(customers).then(res => {
                this.props.history.push('/customers');
            });
        } else {
            CustomersService.updateCustomers(customers, this.state.id).then(res => {
                this.props.history.push('/customers');
            });
        }
    }


    changeAddressHandler = (event) => {
        this.setState({ address: event.target.value });
    }
    changeCompanyNameHandler = (event) => {
        this.setState({ company_name: event.target.value });
    }
    changeContactNameHandler = (event) => {
        this.setState({ contact_name: event.target.value });
    }
    changeContactTitleHandler = (event) => {
        this.setState({ contact_title: event.target.value });
    }
    changeCityHandler = (event) => {
        this.setState({ city: event.target.value });
    }
    changePostalCodeHandler = (event) => {
        this.setState({ postal_code: event.target.value });
    }
    changeCountryHandler = (event) => {
        this.setState({ country: event.target.value });
    }
    changePhoneHandler = (event) => {
        this.setState({ phone: event.target.value });
    }
    changeFaxHandler = (event) => {
        this.setState({ fax: event.target.value });
    }
    cancel() {
        this.props.history.push('/customers');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Customer</h3>
        } else {
            return <h3 className="text-center">Update Customer</h3>
        }
    }




    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Company Name</label>
                                        <input placeholder="Company Name" name="company_name"
                                            className="form-control" value={this.state.company_name} onChange={this.changeCompanyNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Contact Name</label>
                                        <input placeholder="Contact Name" name="contact_name"
                                            className="form-control" value={this.state.contact_name} onChange={this.changeContactNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Contact Title</label>
                                        <input placeholder="Contact Title" name="contact_title"
                                            className="form-control" value={this.state.contact_title} onChange={this.changeContactTitleHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Address</label>
                                        <input placeholder="Address" name="address"
                                            className="form-control" value={this.state.address} onChange={this.changeAddressHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> City</label>
                                        <input placeholder="City" name="city"
                                            className="form-control" value={this.state.city} onChange={this.changeCityHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Postal Code</label>
                                        <input placeholder="Postal Code" name="postal_code"
                                            className="form-control" value={this.state.postal_code} onChange={this.changePostalCodeHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Country</label>
                                        <input placeholder="Country" name="country"
                                            className="form-control" value={this.state.country} onChange={this.changeCountryHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone</label>
                                        <input placeholder="Phone" name="phone"
                                            className="form-control" value={this.state.phone} onChange={this.changePhoneHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Fax</label>
                                        <input placeholder="Fax" name="fax"
                                            className="form-control" value={this.state.fax} onChange={this.changeFaxHandler} />
                                    </div>


                                    <button className="btn btn-success" onClick={this.saveOrUpdateCustomers}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default CreateCustomersComponent;
