# Start Development Servers
# This script starts both frontend and backend servers

Write-Host "=================================" -ForegroundColor Cyan
Write-Host "Starting Development Servers" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""

# Start Backend Server
Write-Host "Starting Backend Server (Port 5000)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd d:\portfolio-main\server; npm run dev"

# Wait a moment for backend to start
Start-Sleep -Seconds 2

# Start Frontend Server
Write-Host "Starting Frontend Server (Port 3000)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd d:\portfolio-main\client; npm run dev"

Write-Host ""
Write-Host "=================================" -ForegroundColor Green
Write-Host "Servers Started!" -ForegroundColor Green
Write-Host "=================================" -ForegroundColor Green
Write-Host ""
Write-Host "Frontend: http://localhost:3000" -ForegroundColor Cyan
Write-Host "Backend:  http://localhost:5000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Press Ctrl+C in each terminal window to stop the servers" -ForegroundColor Yellow
Write-Host ""
