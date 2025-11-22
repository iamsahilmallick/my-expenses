import { Theme } from '@mui/material/styles';

const CommonStyling = (_theme: Theme) => ({
  img: {
    maxWidth: '100%',
    height: 'auto',
  },
  a: {
    display: 'inline-block',
    textDecoration: 'none',
  },

  'p:last-child': {
    marginBottom: 0,
  },
  ul: {
    padding: 0,
    margin: 0,
    listStyle: 'none',
  },
});

export default CommonStyling;
