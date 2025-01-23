import { useModalStore } from '@/hooks/useModal';
import { PlatformData } from '@/modules/Platform/types';
import { Props } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    Box,
    Button,
    IconButton,
    Modal,
    TextField,
    Typography,
    useTheme,
} from '@mui/material';
import { X } from 'lucide-react';
import { Controller, useForm } from 'react-hook-form';
import { infer as Infer, z } from 'zod';
import Dropzone from './dropzone';

export default function CreateUploadPlatForm(props: Props) {
    const theme = useTheme();
    const closeModal = useModalStore((state) => state.closeModal);
    const dataEdit = useModalStore((state) => state.dataEdit as PlatformData);

    const platFormScema = z.object({
        name: z
            .string()
            .min(1, 'Name is required')
            .max(16, 'Name must be at most 16 characters'),
        icon: z.string().min(1, 'Icon is required'),
    });
    type Schema = Infer<typeof platFormScema>;

    const {
        control,
        handleSubmit,
        getValues,
        setValue,

        formState: { errors },
    } = useForm<Schema>({
        mode: 'onChange',
        resolver: zodResolver(platFormScema),
        defaultValues: {
            name: dataEdit?.name || '',
            icon: dataEdit?.icon || '',
        },
    });

    const defaultValue = {
        name: getValues('name'),
        icon: getValues('icon'),
    };

    function getFile(file: File | undefined) {
        if (file) {
            const fileUrl = URL.createObjectURL(file);
            setValue('icon', fileUrl);
        }
    }

    const onSubmit = (data: Schema) => {
        console.log('Submitted Data:', data);
    };

    return (
        <div>
            <Modal
                {...props}
                open
                onClose={closeModal}
                sx={{
                    '.MuiBox-root': {
                        border: 'none',
                        borderRadius: '0.5rem',
                        outline: 'none',
                    },
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 500,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                    }}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box
                            display={'flex'}
                            justifyContent={'space-between'}
                            p={'1rem 2rem 0rem 2rem'}
                            alignItems={'center'}
                        >
                            <Typography
                                id="modal-modal-title"
                                variant="h6"
                                component="h2"
                            >
                                {dataEdit?.id ? ' Update' : 'Create'}
                            </Typography>
                            <IconButton onClick={closeModal}>
                                <X />
                            </IconButton>
                        </Box>
                        <Box p={'0rem 2rem 2rem 2rem'}>
                            <Box display={'flex'} alignItems={'center'} mt={2}>
                                <Controller
                                    name="name"
                                    control={control}
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            variant="outlined"
                                            label="Name"
                                            size="small"
                                            error={!!errors.name}
                                            helperText={errors.name?.message}
                                            sx={{
                                                width: '100%',
                                                '& .MuiOutlinedInput-root': {
                                                    '&:hover fieldset': {
                                                        borderColor:
                                                            theme.palette
                                                                .primary.main,
                                                    },
                                                },
                                            }}
                                        />
                                    )}
                                ></Controller>
                            </Box>

                            <Box display={'flex'} alignItems={'center'} mt={2}>
                                <Controller
                                    name="icon"
                                    control={control}
                                    render={({ field }) => (
                                        <Dropzone
                                            {...field}
                                            uploadTitle={
                                                'Drag and drop your image icon here'
                                            }
                                            acceptFiles={{
                                                'image/*': ['.jpeg', '.png'],
                                            }}
                                            getFile={getFile}
                                            error={!!errors.icon}
                                            setValue={setValue}
                                            defaultValue={defaultValue}
                                        />
                                    )}
                                ></Controller>
                            </Box>

                            <Box
                                display={'flex'}
                                justifyContent={'flex-end'}
                                gap={2}
                                mt={2}
                            >
                                <Button
                                    onClick={closeModal}
                                    variant="outlined"
                                    sx={{ width: '10%' }}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    sx={{ width: '10%' }}
                                >
                                    {dataEdit?.id ? ' Update' : 'Create'}
                                </Button>
                            </Box>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
