import { Avatar, Badge } from '@nextui-org/react';
import React from 'react'
import LinkIcon from '../../assets/icons/LinkIcon';
import AddIcon from '../../assets/icons/AddIcon';
import SearchIcon from '../../assets/icons/SearchIcon';


export default function ProfileMenu() {
    return (
      <section className="w-2/5 h-16 border rounded-2xl bg-white bg-opacity-60 flex justify-between">
        <article className="w-auto p-2 h-16 flex gap-2 justify-center items-center">
          <Badge content="5" size="lg" color="primary" placement="top-right">
            <Avatar
              radius="lg"
              size="md"
              src="../src/assets/images/profile.jpg"
            />
          </Badge>
          <p>Austin Johnson</p>
        </article>
        <section className="w-3/6 h-auto flex justify-around p-2 items-center">
          <LinkIcon />
          <AddIcon />
          <SearchIcon />
        </section>
      </section>
    );
}
