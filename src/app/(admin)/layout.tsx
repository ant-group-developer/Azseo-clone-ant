'use client';

import { Layout, Menu } from 'antd';
import Title from 'antd/es/typography/Title';
import { Upload, User, Video } from 'lucide-react';
import { PropsWithChildren } from 'react';
export default function AdminLayout({ children }: PropsWithChildren) {
    const { Sider, Content } = Layout;
    return (
        <Layout>
            <Sider
                theme="light"
                trigger={null}
                collapsible
                collapsed={false}
                width={'15%'}
            >
                <Title level={4}>Hào</Title>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '0',
                            icon: <User size={18} />,
                            label: 'Managerment',
                        },
                        {
                            key: '1',
                            icon: <User size={18} />,
                            label: 'nav 1',
                        },
                        {
                            key: '2',
                            icon: <Video size={18} />,
                            label: 'nav 2',
                        },
                        {
                            key: '3',
                            icon: <Upload size={18} />,
                            label: 'nav 3',
                        },
                    ]}
                />
            </Sider>
            <Content className="w-full">{children}</Content>
        </Layout>
    );
}
