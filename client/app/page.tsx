"use client"
import React, { useEffect, useState } from "react"
import Clock from "react-live-clock"

export default function Home() {
	const d = new Date()

	let market = "closed"
	if ((d.getUTCHours() < 23 && d.getUTCHours() > 14) || (d.getUTCHours() >= 13 && d.getUTCMinutes() >= 30)) {
		market = "open"
	}

	const [lb, setlb] = useState([{rank: "Rank", player: "Name", portfolio_value: "Net Worth", transactions: "Trades"},])
	const [wl, setwl] = useState([{ticker: "Ticker", company: "Company", price: "0"},])

	useEffect(() => {
		fetch("http://127.0.0.1:4201/api/leaderboard")
		.then(response => response.json())
		.then(data => setlb(data))
	}, [])

	useEffect(() => {
		fetch("http://127.0.0.1:4201/api/watchlist")
		.then(response => response.json())
		.then(data => setwl(data))
	}, [])

	return (
		<div className="flex flex-row w-full h-[94%] px-3 py-5">
		  	<div className="flex flex-col w-[50%] h-full pr-2">
				<div className="w-full h-[28%] my-[1%] bg-[#333333] rounded-2xl">
					<div className="flex flex-row w-full py-6 px-7 place-content-between">
						<h2 className="text-4xl">
							{ d.toLocaleDateString('en-US', { weekday: "long", year: "numeric", month: "long", day: "numeric", }) }
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
		    	<div className="w-full h-[48%] my-[1%] bg-[#333333] rounded-2xl py-6 px-7">
					<h2 className="text-4xl mb-2"> 
						Leaderboard
					</h2>
					<div className="flex flex-row w-full bg-[#232323] h-[15%] rounded-xl my-2 items-center">
						<p className="text-xl w-[20%] text-center">Rank</p>
						<p className="text-xl w-[30%] text-center">Name</p>
						<p className="text-xl w-[25%] text-center">Net Worth</p>
						<p className="text-xl w-[25%] text-center">Trades</p>
					</div>
					<div className="overflow-y-scroll h-[73%]">
						{ lb.map((entry) => (
							<div className="flex flex-row w-full bg-[#434343] h-12 rounded-xl my-2 items-center" key={ entry.rank }>
								<p className="text-xl w-[20%] text-center">{ entry.rank }</p>
								<p className="text-xl w-[30%] text-center">{ entry.player }</p>
								<p className="text-xl w-[25%] text-center">{ entry.portfolio_value }</p>
								<p className="text-xl w-[25%] text-center">{ entry.transactions }</p>
							</div>
						))} 
					</div>
		    	</div>
  		    	<div className="w-full h-[48%] my-[1%] bg-[#333333] rounded-2xl py-6 px-7">
			  		<h2 className="text-4xl mb-2"> 
						Watchlist
					</h2>
					<div className="flex flex-row w-full bg-[#232323] h-[15%] rounded-xl my-2 items-center">
						<p className="text-xl w-[20%] text-center">Ticker</p>
						<p className="text-xl w-[60%] text-center">Company</p>
						<p className="text-xl w-[20%] text-center">Price</p>
					</div>
					<div className="overflow-y-scroll h-[73%]">
						{ wl.map((entry) => (
							<div className="flex flex-row w-full bg-[#434343] h-12 rounded-xl my-2 items-center" key={ entry.ticker }>
								<p className="text-xl w-[20%] text-center">{ entry.ticker }</p>
								<p className="text-xl w-[60%] text-center">{ entry.company }</p>
								<p className="text-xl w-[20%] text-center">{ entry.price }</p>
							</div>
						))} 
					</div>
				</div>
		  	</div>
		</div>
	  )
}
