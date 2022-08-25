
import * as async from "github://kwruntime/std@1.1.19/util/async.ts"
main = () -> 
	console.log "Hi, from coffeescript, waiting 2 seconds ..."
	await async.sleep(2000)
	console.log "Hi again!"
	throw new Error("Forced error")

main()
