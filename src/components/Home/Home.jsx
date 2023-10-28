import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { HomeDiv, LeftDiv, RightDiv } from './Home.styled';
import img from './img.jpeg';

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeDiv>
      <LeftDiv>
        <h1>The Free Online Contact Book </h1>
        <h2>The Easiest Way to Collect All Your Friends' Phone Numbers</h2>
        <Stack direction="row" spacing={2}>
          <Button
            onClick={() => {
              navigate('/register');
            }}
            variant="contained"
            color="secondary"
          >
            Get started
          </Button>
        </Stack>
      </LeftDiv>
      <RightDiv>
        <img
          alt="Contact book"
          src={img}
          width="400"
          onClick={() => navigate('/contacts')}
        />
      </RightDiv>
    </HomeDiv>
  );
};

export default Home;
