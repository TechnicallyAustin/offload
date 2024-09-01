import React from 'react'
import EditIcon from '../../assets/icons/EditIcon';
import MoreIcon from '../../assets/icons/MoreIcon';
import OpenIcon from '../../assets/icons/OpenIcon';
import PowerIcon from '../../assets/icons/PowerIcon';
import SavedIcon from '../../assets/icons/SavedIcon';
import ImageIcon from '../../assets/icons/ImageIcon';
import IdeaIcon from '../../assets/icons/IdeaIcon';
import FinanceIcon from '../../assets/icons/FinanceIcon';

export default function Toolbar() {
    return (
      <section className="w-3/6  h-full p-2 border rounded-2xl bg-white bg-opacity-70 rounded-2xl flex justify-around items-center">
        <article className="w-full h-ffull text-center flex justify-center items-center p-2">
          <EditIcon />
        </article>
        <article className="w-full h-full text-center flex justify-center items-center p-2">
          <MoreIcon />
        </article>
        <article className="w-full h-full text-center flex justify-center items-center p-2">
          <OpenIcon />
        </article>
        <article className="w-full h-full text-center flex justify-center items-center p-2">
          <PowerIcon />
        </article>
        <article className="w-full h-full text-center flex justify-center items-center p-2">
          <SavedIcon />
        </article>
        <article className="w-full h-full text-center flex justify-center items-center p-2">
          <ImageIcon />
        </article>
        <article className="w-full h-full text-center flex justify-center items-center p-2">
          <IdeaIcon />
        </article>
        <article className="w-full h-full text-center flex justify-center items-center p-2">
          <FinanceIcon />
        </article>
      </section>
    );
}
