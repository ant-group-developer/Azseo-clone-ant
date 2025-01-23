/* eslint-disable @typescript-eslint/no-explicit-any */
import { useModalStore } from '@/hooks/useModal';
import { PlatformData } from '@/modules/Platform/types';
import { Box, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { ReactNode, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import UploadIcon from '../../public/cloud-computing.svg';

const activeStyle = {
    borderColor: '#2196f3 !important',
};

const acceptStyle = {
    borderColor: '#00e676 !important',
};

const rejectStyle = {
    borderColor: '#ff1744 !important',
};

interface DropzoneProps {
    getFile?: (file: File | undefined, type: any) => void;
    acceptFiles: any;
    name?: any;
    uploadTitle: ReactNode;
    uploadProgress?: number;
    iconSrc?: string;
    error?: boolean;
    setValue?: any;
    defaultValue?: any;
}

export default function Dropzone({
    acceptFiles,
    uploadTitle,
    getFile,
    error,
}: DropzoneProps) {
    const theme = useTheme();
    const {
        getRootProps,
        getInputProps,
        isDragAccept,
        acceptedFiles,
        isDragReject,
        isDragActive,
    } = useDropzone({
        accept: acceptFiles,
        maxFiles: 1,
        // onDrop,
        noClick: true,
        onDropAccepted: (acceptedFiles) => getFile?.(acceptedFiles?.[0], name),
    });

    const style_accept_file: any = useMemo(
        () => ({
            ...(isDragActive ? activeStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
        }),
        [isDragActive, isDragAccept, isDragReject]
    );
    const dataEdit = useModalStore((state) => state.dataEdit as PlatformData);

    const file = acceptedFiles?.[0];
    const fileUrl = file instanceof File ? URL.createObjectURL(file) : '';
    return (
        <Box display={'flex'} flexDirection={'column'} width={'100%'}>
            <Box
                {...getRootProps()}
                component="label"
                sx={{
                    width: '100%',
                    height: '100px',
                    bgcolor: 'white',
                    color: 'black',
                    border: error
                        ? '1px solid red !important'
                        : '1px solid #ccc !important',
                    ':hover': {
                        borderColor: `${theme.palette.primary.main} !important`,
                    },
                    borderColor: style_accept_file,
                }}
            >
                <Box
                    height={'100%'}
                    justifyContent={'center'}
                    display={'flex'}
                    alignItems={'center'}
                    flexDirection={'column'}
                >
                    <Image
                        src={UploadIcon}
                        width={40}
                        height={40}
                        alt="Upload Icon"
                    />
                    <Typography variant="h6" color="#ababab">
                        {uploadTitle}
                    </Typography>
                </Box>
                <input
                    {...getInputProps()}
                    type="file"
                    accept="image/*"
                    hidden
                />
            </Box>
            <Box>
                {(dataEdit?.icon || file) && (
                    <Box
                        display={'flex'}
                        marginTop={'1rem'}
                        bgcolor={'#f5f5f5'}
                        p={'.5rem'}
                    >
                        <Box
                            width={'100%'}
                            display={'flex'}
                            justifyContent={'space-between'}
                            gap={1}
                            alignItems={'center'}
                        >
                            <Box>
                                <Image
                                    src={dataEdit?.icon ?? fileUrl}
                                    alt="icon"
                                    width={50}
                                    height={1}
                                />
                            </Box>
                            <Typography
                                variant="body2"
                                flex={3}
                                sx={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    textWrap: 'nowrap',
                                }}
                            >
                                {dataEdit?.icon ?? file?.name}
                            </Typography>
                            {/* <IconButton sx={{ width: '40px' }}>
                                <Image
                                    alt="icon"
                                    width={25}
                                    height={1}
                                    src={TrashIcon}
                                />
                            </IconButton> */}
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    );
}
