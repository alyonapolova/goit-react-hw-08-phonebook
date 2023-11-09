import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import Avatar from '@mui/material/Avatar';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import {
  StyledLink,
  StyledName,
  StyledNav,
  StyledUser,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <StyledNav>
      <StyledUser>
        <Avatar
          sx={{
            bgcolor: 'secondary.main',
            width: 25,
            height: 25,
            '@media screen and (min-width: 768px)': { width: 40, height: 40 },
            '@media screen and (min-width: 1024px)': { width: 50, height: 50 },
          }}
        >
          <PermIdentityIcon
            sx={{
              fontSize: 15,
              '@media screen and (min-width: 768px)': { fontSize: 25 },
              '@media screen and (min-width: 1024px)': { fontSize: 30 },
            }}
          />
        </Avatar>
        <StyledName>Hi, {user.name}!</StyledName>
      </StyledUser>
      <StyledLink onClick={() => dispatch(logOutUser())}>LogOut</StyledLink>
    </StyledNav>
  );
};
