import React from 'react'
import ArrowRightIcon from '../../assets/icons/ArrowRightIcon';

export default function FocusNode() {
    return (
      <section
        id="focus"
        className="w-full h-1/4 flex flex-col justify-around p-1 bg-white bg-opacity-60 rounded-2xl"
      >
        <header className="w-full h-auto flex justify-between items-center px-1">
          <h2 className="text-2xl p-2 text-black">Today's Focus</h2>
          <ArrowRightIcon />
        </header>
        <section className="border h-5/6 w-full rounded-2xl bg-black bg-opacity-60"></section>
      </section>
    );
}
