# Git Exercise 1: Setup, editor, add file, push and pull

## Goal
Set up Git config, connect Notepad++ as the editor, create a local repo, add a file, and push it to a remote repository.

## Commands

```bash
git --version
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --global --list
```

```bash
notepad++
```

If `notepad++` is not recognized, add its install path to your Windows `PATH`, then reopen Git Bash and try again.

```bash
alias np='notepad++'
git config --global core.editor "notepad++"
git config -e
```

Create and enter the repository:

```bash
mkdir GitDemo
cd GitDemo
git init
ls -la
```

Create the file, check status, and stage it:

```bash
echo "Welcome to Git" > welcome.txt
cat welcome.txt
git status
git add welcome.txt
git status
```

If you want to add more text, open the file in the editor:

```bash
notepad++ welcome.txt
```

After the remote GitLab repository `GitDemo` is created:

```bash
git pull origin master
git push origin master
```

## Expected result
- Git is configured globally
- Notepad++ works as the editor
- `welcome.txt` is tracked
- Local and remote repositories are synced
