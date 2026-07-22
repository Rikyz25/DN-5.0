# Git Exercise 5: Clean up and push back to remote

## Goal
Verify the branch state, pull remote changes, and push pending local work to the remote repository.

## Commands

```bash
cd GitDemo
git status
git branch -a
git pull origin master
git push origin master
git log --oneline --graph --decorate
```

If there are local commits that have not been pushed yet, the `git push` step will publish them to the remote repository.

## Expected result
- Master is clean before and after sync
- Remote changes are pulled successfully
- Pending local commits are pushed to the remote
