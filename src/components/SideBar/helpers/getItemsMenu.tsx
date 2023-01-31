import { MenuProps } from "antd";
import {
    ContainerOutlined,
    DesktopOutlined,
    PieChartOutlined,
  } from '@ant-design/icons';
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Home', '/home', <PieChartOutlined />),
  getItem('Usuários', '/users', <DesktopOutlined />),
  getItem('Perfil', '/profile', <ContainerOutlined />),
  getItem('Sair', '/', <ContainerOutlined />),
];

export default items