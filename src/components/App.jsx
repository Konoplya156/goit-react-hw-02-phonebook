import { Component } from 'react';
import Contacts from './Contacts';
import SearchBox from './SearchBox';
import ContactForm from './ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = (data, actions) => {
    console.log(actions);
    const { contacts } = this.state;

    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].number === data.number) {
        alert(
          `${data.number} is already in your contacts with name:  ${contacts[i].name}`
        );
        return;
      }
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
    actions.resetForm();
  };

  formSubmitHandler = data => {
    const { contacts } = this.state;

    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].number === data.number) {
        alert(
          `${data.number} is already in your contacts with name:  ${contacts[i].name}`
        );
        return;
      }
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getfilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normilizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normilizedFilter)
    );
  };

  delContact = evt => {
    const { contacts } = this.state;
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].id === evt.currentTarget.id) {
        contacts.splice(i, 1);
        this.setState(prevState => ({
          contacts: [...prevState.contacts],
        }));
      }
    }
  };

  render() {
    return (
      <div className="container">
        <h1>PhoneBook</h1>
        <ContactForm handleSubmit={this.handleSubmit} />

        <h2>Contacts</h2>
        <SearchBox value={this.state.filter} onChange={this.changeFilter} />
        <Contacts
          contacts={this.getfilteredContacts()}
          deleteContact={this.delContact}
        />
      </div>
    );
  }
}