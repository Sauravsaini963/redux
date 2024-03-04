import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const UpdatePost = ({open , setOpen}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
 <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <h1>update Form</h1>
        <TextField
          id="outlined-multiline-flexible"
          label="FirstName"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-textarea"
          label="email"
          placeholder="Placeholder"
          multiline
        /><br/>
        <Button variant="contained"  sx={{ marginTop: '30px', marginLeft:'40%', marginBottom:'50px' }} color="success">
         update
        </Button>
      </div>
      <div>
    
    
     
      </div>
    </Box>

      </Dialog>
    </React.Fragment>
  );
}

export default UpdatePost