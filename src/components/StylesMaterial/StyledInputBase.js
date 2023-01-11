import { styled } from '@mui/material/styles';
import { InputBase } from '@mui/material';
export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: '100%',
  color: theme.palette.mode === 'light' ? 'inherit' : '#acacb4',
  backgroundColor: theme.palette.mode === 'light' ? '#EAF2FE' : '#4b4f55',
  borderRadius: '20px',
  placeholder: '#acacb4',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
