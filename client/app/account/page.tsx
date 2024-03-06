"use client"
import React, { useEffect, useState } from "react"

export default function Account() {
	const [message, setMessage] = useState("")
	const [isLoading, setIsLoading] = useState(false)
	const [user, setUser] = useState({ email: "...", password: "...", watchlist: "...", game: "..." });

	useEffect(() => {
		fetch("http://127.0.0.1:4201/api/account")
		.then(response => response.json())
		.then(data => setUser(data))
	}, [])

    async function updateInfo(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setIsLoading(true)
		setMessage("Loading...")

		try {
			const response = await fetch('http://127.0.0.1:4201/api/account', {
			  method: 'POST',
			  headers: {
				"Content-Type": "application/json",
			  },
			  body: JSON.stringify(user),
			})
	   
			// Handle response if necessary
			const data = await response.json()
			setMessage(data)
		} catch (error) {
			// Handle error if necessary
			console.error(error)
		} finally {
			setIsLoading(false) // Set loading to false when the request completes
		}
    }

    return (
        <>
          	<div className="w-[35%] h-[auto] mt-[5%] bg-[#333333] rounded-2xl m-[auto] pt-5 px-5">
            	<h1 className='text-6xl font-bold text-center'>
                	Account
           		</h1>
              	<form className="flex w-[100%] py-5 flex-col items-center" onSubmit={updateInfo}>
					<div className="flex w-[100%] items-center p-3">
						<label htmlFor="mail" className="text-3xl mx-3 w-[30%]">Email: </label>
						<input type="email" id="mail" width="" className="bg-[#232323] outline-[#434343] flex-1 h-10 rounded-xl px-2" 
						onChange={(e) => setUser({ ...user, email: e.target.value })} value={user.email} required/>
					</div>
					<div className="flex w-[100%] items-center p-3">
						<label htmlFor="password" className="text-3xl mx-3 w-[30%]">Password: </label>
						<input type="password" id="password" width="" className="bg-[#232323] outline-[#434343] flex-1 h-10 rounded-xl px-2" 
						onChange={(e) => setUser({ ...user, password: e.target.value })} value={user.password} required/>
					</div>
					<div className="flex w-[100%] items-center p-3">
						<label htmlFor="watchlist" className="text-3xl mx-3 w-[30%]">Watchlist: </label>
						<input type="text" id="watchlist" width="" className="bg-[#232323] outline-[#434343] flex-1 h-10 rounded-xl px-2" 
						onChange={(e) => setUser({ ...user, watchlist: e.target.value })} value={user.watchlist} required/>
					</div>
					<div className="flex w-[100%] items-center p-3">
						<label htmlFor="game" className="text-3xl mx-3 w-[30%]">Game: </label>
						<input type="text" id="game" width="" className="bg-[#232323] outline-[#434343] flex-1 h-10 rounded-xl px-2" 
						onChange={(e) => setUser({ ...user, game: e.target.value })} value={user.game} required/>
					</div>
					<button type="submit" className="text-2xl w-[30%] h-10 bg-[#0085FF] rounded-xl m-2" disabled={ isLoading }>{message ? message : "Save"}</button>
              	</form>
          	</div>
        </>
    )
}