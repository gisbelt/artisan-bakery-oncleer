import { useState } from "react";

interface Text {
    title: string;
    description: string;
}

export const useModal = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isModalOpenText, setIsModalOpenText] = useState<boolean>(false);
    const [selectedImageUrl, setSelectedImageUrl] = useState<string>('');
    const [selectedText, setSelectedText] = useState<Text>({
        title: '',
        description: ''
    });

    const handleOpen = (imageUrl: string) => {
        setSelectedImageUrl(imageUrl);
        setIsModalOpen(true);
    };

    const handleOpenModal = (title: string, description: string) => {
        setSelectedText({ title: title, description: description })
        setIsModalOpenText(true);
        console.log(selectedText);
    }

    const handleClose = () => setIsModalOpen(false);

    const handleCloseText = () => setIsModalOpenText(false);

    return {
        isModalOpen,
        isModalOpenText,
        selectedImageUrl,
        selectedText,
        handleOpen,
        handleClose,
        handleOpenModal,
        handleCloseText
    }
  
}
