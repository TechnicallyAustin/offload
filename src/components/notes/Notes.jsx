import { Button } from '@nextui-org/react';
import React from 'react'
import AddIcon from '../../assets/icons/AddIcon';


export default function Notes() {
    return (
      <section className="w-2/6 h-16 p-4 border rounded-2xl bg-white bg-opacity-70 rounded-2xl flex justify-between items-center">
        <article className="w-full h-full flex justify-around items-center gap-2">
          <Button className="w-3/4" color="primary" variant="ghost">
            Notes
          </Button>
          <Button className="" color="warning" variant="shadow">
            <AddIcon />
          </Button>
        </article>
      </section>
    );
}
