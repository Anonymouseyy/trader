import React, { useEffect, useState } from "react"

export function PageHeader() {
  return <header className="">
    <div className='absolute top-1/2 translate-y-[-50%] w-full z-[1]'>
      <h1 className='flex flex-col text-6xl gap-6 font-bold w-full items-center text-center='>
        <span className='z-[1] text-5xl'>
          Trader
        </span>
      </h1>
    </div>
  </header>
}
