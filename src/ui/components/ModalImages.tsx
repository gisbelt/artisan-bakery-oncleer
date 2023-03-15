import { Modal } from "@mui/material";
import Box from "@mui/material/Box";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

interface Props {
    children: React.ReactNode;
    isModalOpen: boolean;
    handleClose: () => void;
}

export const ModalImages = (props: Props) => {

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // width: 400,
        boxShadow: 24,
        p: 0,
        width: {
            xs: '350px',
            md: '70vw',
            lg: '950px'
        },
        maxWidth: '100vw',
        maxHeight: 'auto',
        // overflowY: 'auto',
        border: '0px'
    };

    return (
        <Modal
            // fullScreen={fullScreen}
            open={props.isModalOpen}
            onClose={props.handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box component="div" sx={style}>
                {props.children}
            </Box>
        </Modal>
    )
}
