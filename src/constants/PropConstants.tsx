export interface NavItemProps {
    title: string,
    href: React.RefObject<HTMLDivElement> | string,
    key: string
};

export interface NavBarProps {
    width: Number
};