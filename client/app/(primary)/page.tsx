import React, { useEffect, useState } from "react"

export default function Home() {
	return (
		<div className="flex flex-row w-full h-[94%] px-3 py-5">
		  <div className="flex flex-col w-[50%] h-full pr-2">
			<div className="w-full h-[28%] my-[1%] bg-[#333333] rounded-2xl">
				
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
