import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    size?:number,
    src?:string,
    alt?:string
}

export const Avatar = (props:AvatarProps) => {
    const {
        className,
        size,
        src,
        alt,
    } = props;
    const mods = {};

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,

    }), [size]);

    return (
        <img src={src} alt={alt} style={styles} className={classNames(cls.Avatar, {}, [className])} />
    );
};
