const execSync = require('child_process').execSync
const OWNER    = process.argv[2]
const REPO     = process.argv[3]
const USAGE    = '/actions/runs'
const gh_runs  = 'gh api repos/' + OWNER + '/' + REPO + USAGE + ' --paginate'
const workflowid = process.argv[4]
const jq       = 'jq \'.workflow_runs[] | select(.workflow_id == ' + workflowid + ') | .id\' > deletelist.txt'

command = gh_runs + '|' + jq
console.log(command)
execSync(command, (err, stdout, stderr) => {
    if (err) console.log(err)
})

