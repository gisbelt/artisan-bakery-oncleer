import { useState } from "react";

export const useModal = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedImageUrl, setSelectedImageUrl] = useState<string>('');

    const handleOpen = (imageUrl: string) => {
        setSelectedImageUrl(imageUrl);
        setIsModalOpen(true);
    };

    const handleClose = () => setIsModalOpen(false);

    return {
        isModalOpen,
        selectedImageUrl,
        handleOpen,
        handleClose
    }
  
}
