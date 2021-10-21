import React from 'react';

export const NavItem = ({ item, children }) => {
    return <li
        key={item.id}
        id={item.id}
    >
        {item.name}
        {children}
    </li>
}