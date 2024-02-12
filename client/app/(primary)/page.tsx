"use client"
import React, { useEffect, useState } from "react"
import Clock from "react-live-clock"

export default function Home() {
	const d = new Date()
	const options: Intl.DateTimeFormatOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	return (
		<div className="flex flex-row w-full h-[94%] px-3 py-5">
		  <div className="flex flex-col w-[50%] h-full pr-2">
			<div className="w-full h-[28%] my-[1%] bg-[#333333] rounded-2xl">
				<div className="flex flex-row w-full m-4">
					<h2 className="text-5xl">
						{ d.toLocaleDateString(undefined, options) }
					</h2>
					<Clock 
          				format={'h:mm'} 
          				ticking={true}
						className="self-end text-5xl " /> 
				</div>
			</div>
			<div className="w-full h-[68%] my-[1%] bg-[#333333] rounded-2xl">

			</div>
		  </div>
		  <div className="flex flex-col w-[50%] h-full pl-2">
		    <div className="w-full h-[48%] my-[1%] bg-[#333333] rounded-2xl">

		    </div>
  		    <div className="w-full h-[48%] my-[1%] bg-[#333333] rounded-2xl">

			</div>
		  </div>
		</div>
	  )
}
