import { useDispatch, useSelector } from 'react-redux';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { logOutUser } from 'redux/auth/operations';
import { authUser } from 'redux/auth/selectors';

import Avatar from '@mui/material/Avatar';
import {
  StyledLink,
  StyledName,
  StyledNav,
  StyledUser,
} from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(authUser);

  return (
    <StyledNav>
      <StyledUser>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <PermIdentityIcon />
        </Avatar>
        <StyledName>Hi, {user.name}!</StyledName>
      </StyledUser>
      <StyledLink onClick={() => dispatch(logOutUser())}>LogOut</StyledLink>
    </StyledNav>
  );
};
export default UserMenu;
