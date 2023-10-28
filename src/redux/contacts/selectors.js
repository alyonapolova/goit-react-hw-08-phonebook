import { createSelector } from '@reduxjs/toolkit';

export const selectorContacts = state => state.contacts.contacts;
export const getStatusFilter = state => state.contacts.filter;
export const selectorIsLoading = state => state.contacts.isLoading;

export const selectorFilteredContacts = createSelector(
  selectorContacts,
  getStatusFilter,
  (contacts, filter) =>
    contacts
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts
);
