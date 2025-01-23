import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button, Typography, useTheme } from '@mui/material';
import Link from 'next/link';
import { SideBarButtonProps } from './interface';

export default function SideBarButton({
    icon,
    bgColor,
    textColor,
    children,
    border,
}: SideBarButtonProps) {
    const theme = useTheme();
    const backgroundColor = bgColor || theme.palette.primary.main;
    return (
        <Link href={'/'}>
            <Button
                sx={{
                    backgroundColor,
                    width: '100%',
                    color: textColor ?? 'white',
                    p: '.5rem 2rem',
                    border: border ? '1px solid #ccc' : 'none',
                    margin: '.5rem 0',
                    ':hover': {
                        opacity: '.8',
                        border: border
                            ? `1px solid ${theme.palette.primary.main}`
                            : 'none',
                    },
                    borderRadius: '0.5rem',
                }}
            >
                {icon && (
                    <AddCircleOutlineIcon
                        sx={{ fontSize: '1rem', marginRight: '.5rem' }}
                    />
                )}
                <Typography variant="body1">{children}</Typography>
            </Button>
        </Link>
    );
}
