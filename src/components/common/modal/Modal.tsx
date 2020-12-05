import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Slide from '@material-ui/core/Slide';
import CloseIcon from '@material-ui/icons/Close';
import Form from '@components/form/Form';
import { toggleModal } from 'src/context/actionCreators';
import { Store } from 'src/context/store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '40ch',
      },
      maxWidth: '768px',
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

export default function TransitionsModal({ modalOpen }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(modalOpen);

  React.useEffect(() => {
    setOpen(modalOpen);
  });

  const { state: context, dispatch } = React.useContext(Store);

  const handleClose = () => {
    toggleModal({
      dispatch,
      payload: false,
    });
    console.log(context);
  };

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Slide in={open}>
          <div className={classes.paper}>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <CloseIcon onClick={handleClose} fontSize='small' style={{ position: 'absolute', top: '30px' }} />
            </div>
            <Form />
          </div>
        </Slide>
      </Modal>
    </div>
  );
}
