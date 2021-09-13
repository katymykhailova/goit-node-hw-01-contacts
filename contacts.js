const fs = require('fs/promises');
const path = require('path');
const { v4 } = require('uuid');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

const updateContacts = async contacts => {
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
};

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    error.message = 'Cannot read contacts file';
    throw error;
  }
};

const getContactById = async contactId => {
  try {
    const contacts = await listContacts();
    const contact = contacts.find(i => i.id.toString() === contactId);
    if (!contact) {
      throw new Error('Id is not valid');
    }
    return contact;
  } catch (error) {
    throw error;
  }
};

const removeContact = async contactId => {
  try {
    const contacts = await listContacts();
    const idx = contacts.findIndex(i => i.id.toString() === contactId);
    if (!idx) {
      throw new Error('Id is not valid');
    }
    contacts.splice(idx, 1);
    await updateContacts(contacts);
    return 'Success remove';
  } catch (error) {
    throw error;
  }
};

const addContact = async (name, email, phone) => {
  try {
    const newContact = { id: v4(), name, email, phone };
    const contacts = await listContacts();
    contacts.push(newContact);
    await updateContacts(contacts);
    return newContact;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
