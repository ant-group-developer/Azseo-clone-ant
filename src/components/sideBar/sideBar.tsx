import { Box, Typography } from '@mui/material';
import SideBarButton from './sideBarButton';
import SideBarMenu from './sideBarMenu';

export default function SideBar({ open }: { open: boolean }) {
    return (
        <Box
            sx={{
                position: 'relative',
                padding: open ? '40px 12px' : '',
                height: '100vh',
                width: '240px',
                minWidth: '240px',
                overflow: 'auto',
                '&:hover': {
                    overflow: 'auto',
                },
                '&::-webkit-scrollbar': {
                    width: '6px',
                },
                '&::-webkit-scrollbar-track': {
                    background: '#f1f1f1',
                    borderRadius: '10px',
                },
                '&::-webkit-scrollbar-thumb': {
                    background: '#ccc',
                    borderRadius: '10px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                    background: '#ccc',
                },
            }}
            // onClick={toggleDrawer(false)}
        >
            <Box>
                <Typography
                    fontSize={'1.4rem'}
                    fontWeight={700}
                    color="rgb(63, 66, 84)"
                    variant="h3"
                >
                    Nguyễn Hào
                </Typography>
                <Typography
                    variant="subtitle1"
                    textOverflow={'ellipsis'}
                    noWrap
                >
                    nguyendinhhao20033@gmail.com
                </Typography>
            </Box>

            <Box margin={'2rem 0'}>
                <Box
                    padding={'12px'}
                    bgcolor={'rgb(219 234 254)'}
                    borderRadius={'.5rem .5rem 0 0'}
                    display={'flex'}
                    justifyContent={'space-between'}
                >
                    <Typography>Funds</Typography>
                    <Typography fontWeight={700} color="rgb(30 121 228)">
                        $0
                    </Typography>
                </Box>
                <Box
                    padding={'12px'}
                    borderRadius={'0 0 .5rem .5rem'}
                    display={'flex'}
                    justifyContent={'space-between'}
                    border={'1px solid rgb(229, 231, 235)'}
                >
                    <Typography>Inprogress</Typography>
                    <Typography fontWeight={700}>0</Typography>
                </Box>
            </Box>

            <Box>
                <SideBarButton icon> New order </SideBarButton>
                <SideBarButton icon bgColor="rgb(22, 163, 74)">
                    Deposit
                </SideBarButton>
            </Box>

            <SideBarMenu />

            <Box>
                <SideBarButton
                    icon={false}
                    bgColor="white"
                    textColor="Black"
                    border
                >
                    Logout
                </SideBarButton>
            </Box>
        </Box>
    );
}
