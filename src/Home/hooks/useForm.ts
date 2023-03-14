import { useState } from "react";

type FormFields = {
    [key: string]: string;
}
  
type UseForm = {
    formState: FormFields;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onResetForm: () => void;
}

export const useForm = (initialForm: FormFields = {}): UseForm => {
    const [formState, setFormState] = useState<FormFields>(initialForm);

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onResetForm = (): void => {
        setFormState(initialForm);
    };

    return {
        formState,
        onInputChange,
        onResetForm,
    };
};