@echo off
title Plant Care
cd /d "%~dp0"

rem Make sure Node is reachable even if PATH was not refreshed after install
set "PATH=C:\Program Files\nodejs;%PATH%"

where npm >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found. Install it from https://nodejs.org and try again.
  pause
  exit /b 1
)

if not exist node_modules (
  echo Installing dependencies, first run only...
  call npm install
)

echo.
echo Starting Plant Care at http://localhost:5173
echo Keep this window open while you use the app. Close it to stop.
echo.

rem Open the browser once the server is listening
start "" /b cmd /c "timeout /t 3 /nobreak >nul && start http://localhost:5173"

call npm run dev -- --port 5173 --strictPort
pause
