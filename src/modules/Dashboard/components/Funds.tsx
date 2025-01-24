import { Box, Card, CardContent, Typography } from '@mui/material';

interface FundsProps {
    totalMoney: number;
    totalOrderFinish: number;
}

export default function Funds({ totalMoney, totalOrderFinish }: FundsProps) {
    const textStyle = {
        color: 'var(--title-color)',
        fontWeight: 700,
    };
    return (
        <Card variant="outlined" sx={{ borderRadius: '.5rem' }}>
            <Typography
                style={textStyle}
                variant="h6"
                textAlign="left"
                p="1rem 1.5rem"
            >
                Funds
            </Typography>
            <hr />
            <CardContent sx={{ p: '1.5rem 8rem' }}>
                <Box display="flex" justifyContent="space-between">
                    <Box>
                        <Typography style={textStyle} variant="h5">
                            ${totalMoney ?? 0}
                        </Typography>
                        <Typography variant="body1">Current</Typography>
                    </Box>
                    <Box>
                        <Typography style={textStyle} variant="h5">
                            ${totalOrderFinish ?? 0}
                        </Typography>
                        <Typography variant="body1">Lifetime</Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}
