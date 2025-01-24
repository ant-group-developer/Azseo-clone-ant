import { Box, Card, CardContent, Typography } from '@mui/material';

interface OrdersProps {
    present: number;
    progress: number;
}

export default function Orders({ present, progress }: OrdersProps) {
    const textStyle = {
        color: 'var(--title-color)',
        fontWeight: 700,
    };

    return (
        <Card variant="outlined" sx={{ borderRadius: '.5rem' }}>
            <Typography
                color="var(--title-color)"
                fontWeight={700}
                variant="h6"
                textAlign="left"
                p="1rem 1.5rem"
            >
                Orders
            </Typography>
            <hr />
            <CardContent sx={{ p: '1.5rem 8rem' }}>
                <Box display="flex" justifyContent="space-between">
                    <Box>
                        <Typography style={textStyle} variant="h5">
                            {present ?? 0}
                        </Typography>
                        <Typography variant="body1">In progress</Typography>
                    </Box>
                    <Box>
                        <Typography style={textStyle} variant="h5">
                            {progress ?? 0}
                        </Typography>
                        <Typography variant="body1">Completed</Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}
