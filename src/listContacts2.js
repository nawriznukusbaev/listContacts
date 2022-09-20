import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';

class ListContacts extends React.Component {
    constructor(props) {
        super(props);
        let name, phone, email, arr = [];
        name = '';
        phone = '';
        email = '';
        this.arr = arr
        this.name = name;
        this.email = email;
        this.phone = phone;

        this.state = {
            contacts: arr,
            name: name,
            phone: phone,
            email: email,
            count:0

        }

        this.ShowForm = this.ShowForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.removeContact = this.removeContact.bind(this);
        this.ShowContacts = this.ShowContacts.bind(this);
        this.addContact = this.addContact.bind(this);
        this.showLists = this.showLists.bind(this);
    }

    handleChange(event) {
        switch (event.target.id) {
            case 'name':
                return this.setState({name: event.target.value});
            case 'phone':
                return this.setState({phone: event.target.value});
            case 'email':
                return this.setState({email: event.target.value});
        }
    }

    addContact() {
        this.arr.push({
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email
        })
        this.setState({contacts: this.arr, name: '', phone: '', email: '',count:this.state.count+1})

    }

    removeContact(event) {
        event.preventDefault();
        let contact = event.target.parentElement.parentElement;
        this.arr.splice(contact.dataset.id, 1);
        this.setState({
            contacts: this.arr,
        });
    }

    showLists(){
        let divStyle = {
            width:"100%",
            display: "flex",
            flexDirection: "column",
            height: "50vh",
            alignItems: "space-around"
        }
        let listStyle={
            listStyle:"none",
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
            fontSize:"20px",
            borderBottom: "solid 1px black",
            paddingBottom:"10px"
        }
        let titleStyle = {

            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderBottom: "solid 2px black",
            marginBottom: "20px",
            flex:1
        }
        return(<><div  style={{flex:2}}>
            <div style={{display:"flex", flexDirection:"column",justifyContent:"center"}}>
            <div style={titleStyle}>
                <h1> Список контактов</h1>
            </div>
            <div style={divStyle}>
                <ul style={listStyle}>
                    <li>Имя</li>
                    <li>Номер телефона</li>
                    <li>Электронная почта</li>
                    <li></li>
                </ul>
                {this.state.contacts.map((item, index) => {
                    return <this.ShowContacts item={item} key={index} id={index}  />
                })}
            </div>
            </div>
        </div>
        </>);

    }

    ShowContacts(props) {

        if(this.state.count===0){
            return (<h1>Пустой</h1>);
        }
        else return ((<ul style={{listStyle:"none",
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-around",
                fontSize:"20px"}} data-id={props.id}>
                <li>{props.item.name}</li>
                <li>{props.item.phone}</li>
                <li>{props.item.email}</li>
                <li><button onClick={this.removeContact}>Удалить</button></li>
            </ul>));
    }

    ShowForm() {
        let divStyle, formStyle, titleStyle, formWithTitle, divSeparator;
        divStyle = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "50vh",
            alignItems: "center"
        }
        formStyle = {
            width: "300px",
            height: "40px"
        }
        titleStyle = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderBottom: "solid 2px black",
            marginBottom: "20px",
        }
        formWithTitle = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",

        }
        divSeparator = {
            display:"flex",
            flexDirection:"column",
            flex:"1 1 25%",
            borderRight: "solid 2px black",

        }


        return (<div style={{display:"flex",flexDirection:"row"}}>
            <div className={'showForm'} style={divSeparator}>
                <div style={titleStyle}>
                    <h1> Добавить</h1>
                </div>
                <div style={divStyle}>
                    <div style={formWithTitle}>
                        <h2>Имя</h2>
                        <input style={formStyle} value={this.state.name} type={"text"} onChange={this.handleChange}
                               id={"name"}/>
                    </div>
                    <div style={formWithTitle}>
                        <h2>Телефон</h2>
                        <input style={formStyle} value={this.state.phone} type={"text"} onChange={this.handleChange}
                               id={"phone"}/>
                    </div>
                    <div style={formWithTitle}>
                        <h2>Электронная почта</h2>
                        <input style={formStyle} value={this.state.email} type={"email"} onChange={this.handleChange}
                               id={"email"}/>
                    </div>
                    <button style={formStyle} onClick={this.addContact}><h2>Добавить</h2></button>
                </div>

            </div>
            {<this.showLists/>}
        </div>);

    }


    render() {
        return (
            <>
                <this.ShowForm/>
            </>
        );
    }
}

export default ListContacts;


reportWebVitals();