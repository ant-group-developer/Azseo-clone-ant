import { Box, Card, CardContent, Typography } from '@mui/material';
import Title from 'antd/es/typography/Title';
import { useFetchStatisticalOverview } from '../hooks/useFetchStatisticalOverview';

export default function AllOrders() {
    const textStyle = { color: 'var(--title-color)', fontWeight: 700 };
    const { data } = useFetchStatisticalOverview();
    return (
        <Card variant="outlined" sx={{ borderRadius: '.5rem' }}>
            <Title
                style={{
                    padding: '0.5rem 1.5rem',
                    textAlign: 'left',
                    color: 'var(--title-color)',
                }}
                level={5}
            >
                All Orders
            </Title>
            <hr />
            <CardContent sx={{ p: '1.5rem 0' }}>
                <Box display="flex" justifyContent="space-evenly">
                    <Box>
                        <Typography style={textStyle} variant="h6">
                            {data.totalOrderCompleted}
                        </Typography>
                        <p>Completed</p>
                    </Box>
                    <Box>
                        <Typography style={textStyle} variant="h6">
                            {' '}
                            {data.totalOrderPartial}{' '}
                        </Typography>
                        <p>Partial</p>
                    </Box>
                    <Box>
                        <Typography style={textStyle} variant="h6">
                            {' '}
                            {data.totalOrderInProgress}{' '}
                        </Typography>
                        <p>In progress</p>
                    </Box>
                    <Box>
                        <Typography style={textStyle} variant="h6">
                            {' '}
                            {data.totalOrderProcessing}{' '}
                        </Typography>
                        <p>Processing</p>
                    </Box>
                    <Box>
                        <Typography style={textStyle} variant="h6">
                            {' '}
                            {data.totalOrderPending}{' '}
                        </Typography>
                        <p>Pending</p>
                    </Box>
                    <Box>
                        <Typography style={textStyle} variant="h6">
                            0
                        </Typography>
                        <p>Queue</p>
                    </Box>
                    <Box>
                        <Typography style={textStyle} variant="h6">
                            {data.totalOrderCanceled}
                        </Typography>
                        <p>Canceled</p>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}
