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

	let market = "closed"
	if ((d.getUTCHours() < 23 && d.getUTCHours() > 14) || (d.getUTCHours() >= 13 && d.getUTCMinutes() >= 30)) {
		market = "open"
	}

	return (
		<div className="flex flex-row w-full h-[94%] px-3 py-5">
		  <div className="flex flex-col w-[50%] h-full pr-2">
			<div className="w-full h-[28%] my-[1%] bg-[#333333] rounded-2xl">
				<div className="flex flex-row w-full py-6 px-7 place-content-between">
					<h2 className="text-4xl">
						{ d.toLocaleDateString(undefined, options) }
					</h2>
					<Clock 
          				format={'h:mm:ss a'} 
          				ticking={true}
						className="text-4xl align-right"/> 
				</div>
				<h2 className="text-6xl w-full text-center m-2">
					Market is { market }
				</h2>
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
