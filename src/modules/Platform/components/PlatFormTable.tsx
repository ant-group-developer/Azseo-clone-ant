import { formatDate } from '@/helper';
import { useModalStore } from '@/hooks/useModal';
import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material';
import { Edit, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { PLATFORM_MODAL } from '../enums';
import { PlatformData } from '../types';

export default function PlatFormTable({ data }: { data: PlatformData[] }) {
    const openModal = useModalStore((state) => state.openModal);
    const rows = data.map((item: PlatformData) => ({
        id: item.id,
        name: item.name,
        icon: item.icon,
        dateCreated: item.dateCreated,
    }));

    const handleEdit = (item: PlatformData) => {
        openModal(PLATFORM_MODAL.EDIT, item);
    };

    const handleDelete = (item: PlatformData) => {
        openModal(PLATFORM_MODAL.DELETE, item);
    };
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead sx={{ bgcolor: '#fafafa' }}>
                    <TableRow>
                        <TableCell sx={{ fontWeight: '700', width: '10%' }}>
                            No.
                        </TableCell>
                        <TableCell sx={{ fontWeight: '700', width: '20%' }}>
                            Name
                        </TableCell>
                        <TableCell sx={{ fontWeight: '700', width: '20%' }}>
                            Icon
                        </TableCell>
                        <TableCell sx={{ fontWeight: '700', width: '20%' }}>
                            Date created
                        </TableCell>

                        <TableCell sx={{ fontWeight: '700', width: '10%' }}>
                            Actions
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((item, index) => (
                        <TableRow key={item.id}>
                            <TableCell sx={{ padding: '6px 16px' }}>
                                {index + 1}
                            </TableCell>
                            <TableCell sx={{ padding: '6px 16px' }}>
                                {item.name}
                            </TableCell>
                            <TableCell sx={{ padding: '6px 16px' }}>
                                <Image
                                    src={item.icon}
                                    alt={item.name}
                                    width="24"
                                    height="24"
                                />
                            </TableCell>
                            <TableCell sx={{ padding: '6px 16px' }}>
                                {formatDate(item.dateCreated)}
                            </TableCell>
                            <TableCell sx={{ padding: '6px 16px' }}>
                                <IconButton onClick={() => handleEdit(item)}>
                                    <Edit color="blue" size={18} />
                                </IconButton>
                                <IconButton
                                    sx={{
                                        ':hover': { bgcolor: '#dc262633' },
                                        ml: '1rem',
                                    }}
                                    onClick={() => handleDelete(item)}
                                >
                                    <Trash2 color="red" size={18} />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
