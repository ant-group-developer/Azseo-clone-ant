import { Box, Card, CardContent, Typography } from '@mui/material';
import { useFetchStatisticalOverview } from '../hooks/useFetchStatisticalOverview';

export default function AllOrders() {
    const { data } = useFetchStatisticalOverview();
    return (
        <Card variant="outlined" sx={{ borderRadius: '.5rem' }}>
            <Typography variant="h6" textAlign="left" p="1rem 1.5rem">
                All Orders
            </Typography>
            <hr />
            <CardContent sx={{ p: '1.5rem 0' }}>
                <Box display="flex" justifyContent="space-evenly">
                    <Box>
                        <Typography variant="h5">
                            {data.totalOrderCompleted}
                        </Typography>
                        <Typography variant="body1">Completed</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h5">
                            {' '}
                            {data.totalOrderPartial}{' '}
                        </Typography>
                        <Typography variant="body1">Partial</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h5">
                            {' '}
                            {data.totalOrderInProgress}{' '}
                        </Typography>
                        <Typography variant="body1">In progress</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h5">
                            {' '}
                            {data.totalOrderProcessing}{' '}
                        </Typography>
                        <Typography variant="body1">Processing</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h5">
                            {' '}
                            {data.totalOrderPending}{' '}
                        </Typography>
                        <Typography variant="body1">Pending</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h5">0</Typography>
                        <Typography variant="body1">Queue</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h5">
                            {data.totalOrderCanceled}
                        </Typography>
                        <Typography variant="body1">Canceled</Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}
