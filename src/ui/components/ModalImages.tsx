import { Modal } from "@mui/material";
import Box from "@mui/material/Box";

interface Props {
    children: React.ReactNode;
    isModalOpen: boolean;
    handleClose: () => void;
}

export const ModalImages = (props: Props) => {

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // width: 400,
        // boxShadow: 24,
        p: 0,
    };

    return (
        <Modal
            open={props.isModalOpen}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {props.children}
            </Box>
        </Modal>
    )
}
