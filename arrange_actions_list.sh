#!/bin/bash

# Check arguments
if [ $# -eq 0 ]; then
  echo 'usage: ./arrange_actions_list.sh $OWNER $REPO $workflow_id'
  exit 1
fi

# display arguments
echo "OWNER: " $1
echo "Repository: " $2
echo "workflow_id: " $3
echo ""

# Check workflows
command1="gh api repos/$1/$2/actions/workflows"
echo $command1
echo -ne "Execute? [y/N] > "
read answer1
if [ "$answer1" == "y" ]; then
    $command1
fi

# Make delete list
echo -ne "Make deletelist.txt? [y/N] > "
read answer2
if [ "$answer2" == "y" ]; then
    node get_all_run_id.js $1 $2 $3
    echo "Done: Make deletelist.txt"
fi

# Delete run_ids
echo -ne "Delete all run_id of workflow_id: $3 ? [y/N] > "
read answer3
if [ "$answer3" == "y" ]; then
    node delete_all_run_id.js $1 $2
    echo "Done: Delete all run_id"
fi
