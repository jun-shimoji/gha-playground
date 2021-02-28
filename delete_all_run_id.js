const fs = require("fs");
const execSync = require('child_process').execSync
const OWNER    = process.argv[2]
const REPO     = process.argv[3]
const USAGE    = '/actions/runs'
const gh_runs  = 'gh api repos/' + OWNER + '/' + REPO + USAGE

try {
    const buff = fs.readFileSync("deletelist.txt", "utf8");
    const arry  = buff.split('\n').filter(Boolean)
    arry.forEach( (v, i) => {
        command = gh_runs + '/' + v + ' -X DELETE'
        console.log(i, command)
        execSync(command, (err, stdout, stderr) => {
            if(err) console.log(err)
            if(stderr) console.log(stderr)
        })
    })
  }
catch(e) {
  console.log(e.message);
}
