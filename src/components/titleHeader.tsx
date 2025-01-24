import Title from 'antd/es/typography/Title';

export default function TitlePage({ children }: { children: string }) {
    return (
        <Title
            className="text-4xl font-bold"
            style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: 'var(--title-color)',
            }}
            level={2}
        >
            {children}
        </Title>
    );
}
