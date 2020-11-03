
import Os from 'os'
import Child from 'child_process'
import Path from 'path'

main()
async function main(){
	let home = Path.join(Os.homedir(),".kawi","npm-inst","yarn@1.17.3")
	Child.spawn(process.argv[0], [Path.join(home,"bin","yarn.js")].concat(process.argv.slice(3)),{
		stdio:'inherit'
	})
}
