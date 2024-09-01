import React from 'react'
import AlertIcon from '../../assets/icons/AlertIcon';
import { Badge } from '@nextui-org/react';
import ShareIcon from '../../assets/icons/ShareIcon';
import TrashIcon from '../../assets/icons/TrashIcon';
import WarningIcon from '../../assets/icons/WarningIcon';
import MenuIcon from '../../assets/icons/MenuIcon';

export default function OptionMenu() {
    return (
      <section className="w-3/6 h-16 p-2 border rounded-2xl bg-white bg-opacity-60 flex justify-between items-center">
        <p className="text-center p-2 text-lg">OFFLOAD OS</p>
        <section className="w-3/5 h-full flex justify-around items-center">
          <article className="w-auto p-2 h-full flex gap-1 justify-center items-center">
            <AlertIcon />
            <Badge
              content="5"
              size="lg"
              color="primary"
              placement="top-right"
            ></Badge>
          </article>
          <ShareIcon />
          <TrashIcon />
          <WarningIcon />
          <MenuIcon />
        </section>
      </section>
    );
}
