### githubのCLI
* gh
    * https://cli.github.com/

### ghaでの利用

* REST API
    * https://docs.github.com/en/rest/reference/actions#list-workflow-runs-for-a-repository

* workflowの一覧を確認

```
gh api repos/:OWNER/:REPO/actions/workflows
```

* workflow_idを確認

```
gh api repos/linefukuoka/:REPO-develop/actions/runs| jq .workflow_runs[].workflow_id
```

* run_idを確認

```
gh api repos/linefukuoka/:REPO-develop/actions/runs| jq .workflow_runs[].id
```

* 指定workflow_idのrun_idを確認
    * workflow_idを 1111111 とする
```
gh api repos/:OWNER/:REPO/actions/runs --paginate|jq '.workflow_runs[] | select(.workflow_id == 1111111) | .id' > deletelist.txt
```

* 指定run_idを削除
    * runidを 222222222 とする

```
gh api repos/:owner/:rep/actions/runs/260847608 -X DELETE
gh api repos/linefukuoka/:REPO-develop/actions/runs/260847608 -X DELETE
```
