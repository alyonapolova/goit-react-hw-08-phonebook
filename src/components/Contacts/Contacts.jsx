import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
} from '@mui/material';

import { EditContactForm } from 'components/Form/FormUpdate';
import {
  deleteContact,
  getContacts,
  updateContact,
} from 'redux/contacts/operations';
import { authLoggedIn } from 'redux/auth/selectors';
import {
  selectorContacts,
  selectorFilteredContacts,
  selectorIsLoading,
} from 'redux/contacts/selectors';
import Filter from 'components/Form/FormFilter';
import Loader from 'components/Loader/Loader';

const defaultTheme = createTheme();

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);
  const isLoggedIn = useSelector(authLoggedIn);
  const isLoading = useSelector(selectorIsLoading);
  const [editContact, setEditContact] = useState(null);

  const filteredContacts = useSelector(selectorFilteredContacts);

  useEffect(() => {
    isLoggedIn && dispatch(getContacts());
  }, [isLoggedIn, dispatch]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
    if (editContact && editContact.id === id) {
      setEditContact(null);
    }
  };

  const handleEdit = contact => {
    setEditContact(contact);
  };

  const handleUpdate = updatedInfo => {
    dispatch(updateContact({ id: editContact.id, info: updatedInfo }));
    setEditContact(null);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 4,
            pb: 3,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h5"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Contacts
            </Typography>
          </Container>
        </Box>

        <Filter />
        {isLoading && <Loader />}
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Grid container spacing={4}>
            {contacts &&
              filteredContacts.map(contact => (
                <Grid item key={contact.id} xs={12} sm={5} md={6}>
                  {contact === editContact ? (
                    <EditContactForm
                      contact={editContact}
                      onUpdate={handleUpdate}
                    />
                  ) : (
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {contact.name}
                        </Typography>
                        <Typography>{contact.number}</Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          onClick={() => handleEdit(contact)}
                        >
                          Edit
                        </Button>
                        <Button
                          size="small"
                          onClick={() => handleDelete(contact.id)}
                        >
                          Delete
                        </Button>
                      </CardActions>
                    </Card>
                  )}
                </Grid>
              ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
