# Git & GitHub Notes

## 📌 1. Introduction to Git
| Command | Description |
|---------|------------|
| `git` | Version control system to track changes in code. |
| `git --version` | Check installed Git version. |

## 📂 2. Git Init and Hidden Folder
| Command | Description |
|---------|------------|
| `git init` | Initialize a new Git repository. |
| `.git/` | Hidden folder storing Git history & configurations. |

## 📝 3. Git Commits and Logs
| Command | Description |
|---------|------------|
| `git add <file>` | Stage file for commit. |
| `git commit -m "message"` | Save changes with a message. |
| `git log` | View commit history. |

## ⚙️ 4. Git Internal Working and Configs
| Command | Description |
|---------|------------|
| `git config --global user.name "Your Name"` | Set user name. |
| `git config --global user.email "your@email.com"` | Set user email. |
| `git config --list` | View all configurations. |

## 🔀 5. Git Merge and Conflicts
| Command | Description |
|---------|------------|
| `git branch` | List branches. |
| `git checkout -b new-branch` | Create & switch to a new branch. |
| `git merge branch-name` | Merge branch into the current branch. |
| ⚠ **Conflict** | Manually resolve merge conflicts in files before committing. |

## 🔄 6. Git Diff and Stashing
| Command | Description |
|---------|------------|
| `git diff` | Show changes before committing. |
| `git stash` | Temporarily save changes. |
| `git stash pop` | Restore stashed changes. |

## 🚀 7. Git Rebase
| Command | Description |
|---------|------------|
| `git rebase branch-name` | Apply commits on top of another branch. |
| `git rebase --abort` | Abort ongoing rebase. |
| `git rebase --continue` | Continue after resolving conflicts. |

## 🌍 8. Pushing Code to GitHub
| Command | Description |
|---------|------------|
| `git remote add origin <repo-url>` | Connect local repo to GitHub. |
| `git push -u origin main` | Push code to GitHub. |
| `git pull origin main` | Fetch & merge latest changes from GitHub. |

## 🔗 9. Pull Request & Open Source Contribution
| Steps | Description |
|---------|------------|
| **Fork a repo → Clone → Create a branch → Make changes → Push changes** | Standard open-source contribution process. |
| `git push origin branch-name` | Push branch to remote. |
| **Open a Pull Request (PR) on GitHub.** | Request maintainers to review and merge changes. |
| 🚀 Maintainers review & merge your PR. | Final step in contribution. |

---
