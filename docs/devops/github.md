# GitHub

## Branches

### Clear commits

```shell:no-line-numbers
git checkout --orphan latest_branch

git commit -am "commit message"

git branch -D <branch>

git branch -m <branch>

git push -f <branch>

```

## Worklow/Actions

### Delete History

::: tip
Needed packages `xargs`, `gh` and `jq`
:::

```shell:no-line-numbers
OWNER=<your user/org name>
REPO=<repo name>

# list workflows
gh api -X GET /repos/$OWNER/$REPO/actions/workflows | jq '.workflows[] | .name,.id'

# copy the ID of the workflow you want to clear and set it
WORKFLOW_ID=<workflow id>

# list runs
gh api -X GET /repos/$OWNER/$REPO/actions/workflows/$WORKFLOW_ID/runs | jq '.workflow_runs[] | .id'

# delete runs (you'll have to run this multiple times if there's many because of pagination)
gh api -X GET /repos/$OWNER/$REPO/actions/workflows/$WORKFLOW_ID/runs | jq '.workflow_runs[] | .id' | xargs -I{} gh api -X DELETE /repos/$OWNER/$REPO/actions/runs/{}
```