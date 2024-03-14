import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { updatePost } from "../../store/posts/postSlice";

const UpdatePost = ({ open, setOpen, editData }) => {
  console.log("edite     sasa", editData);
  const [updateData, setUpdateData] = useState({ firstName: "", email: "" });
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setUpdateData({
      firstName: editData?.firstName,
      email: editData?.email,
    });
  }, [editData]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();

  console.log("updateDataupdateDataupdateData ", updateData);
  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log("000000000000000 ", editData?._id);
    dispatch(updatePost({data:updateData, id:editData?._id}));
    console.log("eeeeeeeeeeeeeeeeeeeeeee ", e)
    handleClose();
    setUpdateData({
      firstName:"",
      email:""
     })
  };
  return (
   
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
     >
          <div>
            <h1>update Form</h1>
            <TextField
              id="outlined-multiline-flexible"
              // label="FirstName"
              multiline
              maxRows={4}
              value={updateData?.firstName}
              onChange={(e) =>
                setUpdateData((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }))
              }
            />
            <TextField
              id="outlined-textarea"
              // label="email"
              placeholder="Placeholder"
              multiline
              value={updateData?.email}
              onChange={(e) =>
                setUpdateData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <br />
            <Button
              variant="contained"
              sx={{
                marginTop: "30px",
                marginLeft: "40%",
                marginBottom: "50px",
              }}
              color="success"
              onClick={handleSubmitForm}
            >
              update
            </Button>
           
          </div>
          <div></div>
   
      </Dialog>
   
  );
};

export default UpdatePost;
