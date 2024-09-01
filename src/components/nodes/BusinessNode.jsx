import React from 'react'
import ArrowRightIcon from '../../assets/icons/ArrowRightIcon';

export default function BusinessNode() {
    return (
      <section
        id="business-node"
        className="w-1/2 h-full flex flex-col justify-around p-1 bg-white bg-opacity-60 rounded-2xl"
      >
        <header className='w-full h-auto flex justify-between items-center px-1'>
          <h2 className="text-2xl p-2 text-black">Business</h2>
          <ArrowRightIcon />
        </header>
        <section className="border h-5/6 w-full rounded-2xl bg-black bg-opacity-60"></section>
      </section>
    );
}
