# Git Exercise 3: Branching and merging

## Goal
Create a branch, make changes there, merge it back to master, and clean up the branch.

## Commands

Create the branch and inspect available branches:

```bash
cd GitDemo
git branch GitNewBranch
git branch -a
git checkout GitNewBranch
```

Add a file and commit it:

```bash
echo "Branch work started" > branch-note.txt
git add branch-note.txt
git commit -m "Add branch note"
git status
```

Switch back to master and compare:

```bash
git checkout master
git diff master GitNewBranch
git log --oneline --graph --decorate --all
```

If you have P4Merge configured, use it as your diff tool from Git settings, then compare master and branch visually.

Merge and clean up:

```bash
git merge GitNewBranch
git log --oneline --graph --decorate
git branch -d GitNewBranch
git status
```

## Expected result
- Branch is created and used for changes
- Branch merges into master cleanly
- Branch gets deleted after merge
