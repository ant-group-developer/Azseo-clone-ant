'use client';

import CreateUploadPlatForm from '@/components/createUploadPlatForm';
import DeletePlatform from '@/components/deletePlatform';
import TitlePage from '@/components/titleHeader';
import { useFilter } from '@/hooks/useFilter';
import { useModalStore } from '@/hooks/useModal';
import AppSearch from '@/modules/Dashboard/components/AppSearch';
import { defaultFilterParam } from '@/modules/Dashboard/constants';
import PlatFormTable from '@/modules/Platform/components/PlatFormTable';
import { PLATFORM_MODAL } from '@/modules/Platform/enums';
import usePlatform from '@/modules/Platform/hooks/usePlatform';
import { Box, Button } from '@mui/material';

export default function PlatForm() {
    const { dataFilter, onSearch } = useFilter(defaultFilterParam);
    const openModal = useModalStore((state) => state.openModal);
    const typeModal = useModalStore((state) => state.typeModal);
    const { data } = usePlatform(dataFilter);
    return (
        <Box p="2.5rem 1.75rem">
            <Box textAlign={'center'}>
                <TitlePage> Platform </TitlePage>
            </Box>
            <Box display={'flex'} justifyContent={'space-between'}>
                <AppSearch
                    value={dataFilter.keyword || ''}
                    onChange={onSearch}
                />
                <Button
                    onClick={() => openModal(PLATFORM_MODAL.CREATE)}
                    variant="contained"
                >
                    Create
                </Button>
            </Box>
            <Box margin={'2rem 0'}>
                <PlatFormTable data={data.data} />
            </Box>
            {(typeModal === PLATFORM_MODAL.CREATE ||
                typeModal === PLATFORM_MODAL.EDIT) && <CreateUploadPlatForm />}
            {typeModal === PLATFORM_MODAL.DELETE && <DeletePlatform />}
        </Box>
    );
}
