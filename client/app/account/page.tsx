"use client"

export default function Account() {
    async function updateInfo(event: React.FormEvent<HTMLFormElement>) {

    }

    return (
        <>
          	<div className="w-[35%] h-[auto] mt-[5%] bg-[#333333] rounded-2xl m-[auto] pt-5 px-5">
            	<h1 className='text-6xl font-bold text-center'>
                	Account
           		</h1>
              	<form className="flex w-[100%] py-5 flex-col items-center" onSubmit={updateInfo} method="post">
					<div className="flex w-[100%] items-center p-3">
						<label htmlFor="mail" className="text-3xl mx-3 w-[30%]">Email: </label>
						<input type="email" id="mail" width="" className="bg-[#232323] outline-[#434343] flex-1 h-10 rounded-xl px-2"></input>
					</div>
					<div className="flex w-[100%] items-center p-3">
						<label htmlFor="password" className="text-3xl mx-3 w-[30%]">Password: </label>
						<input type="password" id="password" width="" className="bg-[#232323] outline-[#434343] flex-1 h-10 rounded-xl px-2"></input>
					</div>
					<div className="flex w-[100%] items-center p-3">
						<label htmlFor="watchlist" className="text-3xl mx-3 w-[30%]">Watchlist: </label>
						<input type="text" id="watchlist" width="" className="bg-[#232323] outline-[#434343] flex-1 h-10 rounded-xl px-2"></input>
					</div>
					<button type="submit" className="text-2xl w-[30%] h-10 bg-[#0085FF] rounded-xl m-2">Save</button>
              	</form>
          	</div>
        </>
    )
}