import { useModalStore } from '@/hooks/useModal';
import { PlatformData } from '@/modules/Platform/types';
import { Props } from '@/types';
import { Box, Button, Modal, Typography } from '@mui/material';

export default function DeletePlatform(props: Props) {
    const closeModal = useModalStore((state) => state.closeModal);
    const dataEdit = useModalStore((state) => state.dataEdit as PlatformData);
    return (
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
                    p: 4,
                }}
            >
                <Box>
                    <Typography variant="h6">
                        Delete {dataEdit?.name}
                    </Typography>
                    <Typography variant="body1" m={'1rem 0'}>
                        Are you sure? This item will be permanently deleted
                    </Typography>
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
                        onClick={closeModal}
                        type="submit"
                        variant="contained"
                        sx={{ width: '10%' }}
                    >
                        OK
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}
