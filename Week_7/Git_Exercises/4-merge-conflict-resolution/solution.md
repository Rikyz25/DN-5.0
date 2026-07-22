# Git Exercise 4: Resolve a merge conflict

## Goal
Create a conflict between master and a branch, resolve it with a 3-way merge, then clean up the branch.

## Commands

Start clean and create the working branch:

```bash
cd GitDemo
git status
git checkout -b GitWork
```

Create and update `hello.xml` on the branch:

```bash
echo "<message>Branch version</message>" > hello.xml
git add hello.xml
git commit -m "Add hello.xml on branch"

echo "<message>Branch version updated</message>" > hello.xml
git add hello.xml
git commit -m "Update hello.xml on branch"
```

Switch to master and create a conflicting version:

```bash
git checkout master
echo "<message>Master version</message>" > hello.xml
git add hello.xml
git commit -m "Add hello.xml on master"
```

Inspect history and differences:

```bash
git log --oneline --graph --decorate --all
git diff master GitWork
```

Merge and resolve the conflict:

```bash
git merge GitWork
```

Open the conflict in your 3-way merge tool or editor, keep the final content you want, then:

```bash
git add hello.xml
git commit -m "Resolve merge conflict for hello.xml"
```

Ignore any backup file created by the merge tool:

```bash
echo "*.orig" >> .gitignore
git add .gitignore
git commit -m "Ignore merge backup files"
```

Clean up the branch:

```bash
git branch -a
git branch -d GitWork
git log --oneline --graph --decorate
```

## Expected result
- A real merge conflict is created
- The conflict is resolved and committed
- Backup files are ignored
- The branch is removed after merge
