# Git Exercise 2: Ignore unwanted files

## Goal
Ignore `.log` files and `log` folders using `.gitignore`.

## Commands

```bash
cd GitDemo
touch app.log
mkdir -p log
echo "temporary data" > log/debug.txt
```

Create or edit `.gitignore`:

```bash
notepad++ .gitignore
```

Add these lines:

```gitignore
*.log
log/
```

Check status and verify the ignored items stay out of Git:

```bash
git status
git add .gitignore
git commit -m "Add gitignore rules for logs"
git status
```

## Expected result
- `.log` files are ignored
- the `log/` folder is ignored
- only `.gitignore` is tracked and committed
