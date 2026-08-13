@echo off
setlocal
cd /d "%~dp0"

echo ============================================
echo  DSTR Lingo - push this folder to GitHub
echo ============================================
echo.
echo Folder: %CD%
echo.

if not exist "package.json" (
  echo ERROR: package.json is not here, so this is the wrong folder.
  echo Put this file INSIDE the dstrlingosource folder and run it again.
  echo.
  pause
  exit /b 1
)

if not exist ".git" (
  echo This folder is not a git repository yet. Creating one...
  git init
  if errorlevel 1 goto fail
  echo.
)

git branch -M main
git add .
git commit -m "Add Exam Room unit from Mock 2 questions"

git remote remove origin >nul 2>&1
git remote add origin https://github.com/humweinchen/DSTR_Test.git
if errorlevel 1 goto fail

echo.
echo --------------------------------------------
echo  About to push to:
echo    https://github.com/humweinchen/DSTR_Test
echo.
echo  This REPLACES what is on GitHub with the
echo  files in this folder. That is what you want
echo  here - same project, plus the new unit.
echo.
echo  Press Ctrl+C to cancel, or
echo --------------------------------------------
pause

git push -u origin main --force
if errorlevel 1 goto fail

echo.
echo ============================================
echo  Pushed successfully.
echo.
echo  The site rebuilds by itself. In a minute or
echo  two, check:
echo    https://humweinchen.github.io/DSTR_Test/
echo ============================================
echo.
pause
exit /b 0

:fail
echo.
echo ============================================
echo  Something went wrong.
echo  Copy the red text above and send it to Claude.
echo ============================================
echo.
pause
exit /b 1
