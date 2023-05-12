import { Modal } from "@mui/material";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

interface Props {
    isModalOpen: boolean;
    title: string;
    description: string;
    handleClose: () => void;
}

export const ModalText = (props: Props) => {

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        color: '#fff',
        bgcolor: '#594c0d',
        border: '0px solid #000',
        borderRadius: '20px',
        boxShadow: 24,
        p: 4,
    };

    return (
        <Modal 
            open={props.isModalOpen}
            onClose={props.handleClose}
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
            backdrop: {
                timeout: 500,
            },
            }}
        >   
            <Fade in={props.isModalOpen}>
                <Box sx={style}>
                    <Typography id="modal-title" variant="h6" component="h2" style={{ fontWeight: '600' }}>
                        { props.title }
                    </Typography>
                    <Typography id="modal-description" sx={{ mt: 2 }} style={{ width: '100%' }} >
                        { props.description }
                    </Typography>
                </Box>
            </Fade>
        </Modal>
    )
}
