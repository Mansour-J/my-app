import React, { useState } from 'react';
import { NavItem } from './../expandable-nav-item';

export const Navigation = ({ items }) => {
  const renderItem = (item, idx) => {
    if (item.children) {
      return <NavItem item={item}>
        <ul key={item.id}>
          {item.children.map(renderItem)}
        </ul>
      </NavItem>
    }

    return <NavItem item={item} />;
  }

  return (
    <ul>
      {items.map(renderItem)}
    </ul>
  );
}