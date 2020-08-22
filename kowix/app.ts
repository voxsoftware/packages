// kowix LATEST ...

main()

async function main(){

	
	let version 
	for(let i=0;i<process.argv.length;i++){
		let arg = process.argv[i]
		if(arg == "--version"){
			// una versión en específico
			version = process.argv[i+1]
			process.argv.splice(i, 2)
		}
	}

	
	let package = null, json 
	try{

		if(version){
			try{
				try{
					json = await kawix.KModule.import("gh+/voxsoftware/packages/kowix/releases.ts", {
						force: true
					})	
				}catch(e){
					json = await kawix.KModule.import("gh+/voxsoftware/packages/kowix/releases.ts")	
				}
			}catch(e){}

			if(json) {
				package =json[version]
				if(!package){
					console.error("Failed getting version: " + version)
					process.exit(1)
				}
			}

		}
		

		if(!package){
			package = await kawix.KModule.import("gh+/voxsoftware/packages/kowix/package.json", {
				force: true
			})
		}
	}catch(e){
		console.warn("Failed getting latest version of kowix, now getting cached version")
		package = await kawix.KModule.import("gh+/voxsoftware/packages/kowix/package.json")
	}



	process.env.SELF_INCLUDE= "1"
	await kawix.KModule.import(`gh+/kodhework/kawix@${package.kawix.std}/std/dist/register.js`)
	await kawix.KModule.import(`/virtual/@kawix/std/package/kwa/register`)

	await kawix.KModule.import(`gh+/kodhework/kawix@${package.kawix.dhs}/dhs/dist/register.js`)
	await kawix.KModule.import(`gh+/kodhework/kawix@${package.kawix.kivi}/kivi/dist/register.js`)
	await kawix.KModule.import(`gh+/kodhework/kawix@${package.kawix.gix}/gix/dist/register.js`)
	


	
	let mod = await kawix.KModule.import(`gh+/voxsoftware/packages/kowix/${package.version || version}.kwa`)
	mod.Program.main()

}
