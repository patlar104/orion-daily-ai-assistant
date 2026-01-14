# Git Commit Helper Script
# Helps make commits following conventional commits format

param(
    [Parameter(Mandatory=$false)]
    [ValidateSet('feat','fix','docs','style','refactor','perf','test','chore','build','ci')]
    [string]$Type,
    
    [Parameter(Mandatory=$false)]
    [string]$Scope,
    
    [Parameter(Mandatory=$false)]
    [string]$Description,
    
    [switch]$Interactive
)

function Show-CommitHelp {
    Write-Host "`n📝 Git Commit Helper - Conventional Commits" -ForegroundColor Cyan
    Write-Host "=" -NoNewline -ForegroundColor Cyan; Write-Host ("=" * 50) -ForegroundColor Cyan
    Write-Host "`nUsage:" -ForegroundColor Yellow
    Write-Host "  .\commit-helper.ps1 -Interactive"
    Write-Host "  .\commit-helper.ps1 -Type feat -Description 'add new feature'"
    Write-Host "  .\commit-helper.ps1 -Type fix -Scope ui -Description 'resolve button styling'"
    Write-Host "`nCommit Types:" -ForegroundColor Yellow
    Write-Host "  feat:     New feature for the user"
    Write-Host "  fix:      Bug fix for the user"
    Write-Host "  docs:     Documentation changes"
    Write-Host "  style:    Code style/formatting (no logic change)"
    Write-Host "  refactor: Code refactoring"
    Write-Host "  perf:     Performance improvement"
    Write-Host "  test:     Test additions/updates"
    Write-Host "  chore:    Maintenance (deps, config, etc.)"
    Write-Host "  build:    Build system changes"
    Write-Host "  ci:       CI/CD changes"
}

function Get-InteractiveCommit {
    Write-Host "`n📝 Interactive Commit Creator" -ForegroundColor Cyan
    Write-Host "=" -NoNewline -ForegroundColor Cyan; Write-Host ("=" * 50) -ForegroundColor Cyan
    
    # Get type
    Write-Host "`nSelect commit type:" -ForegroundColor Yellow
    Write-Host "1. feat     - New feature"
    Write-Host "2. fix      - Bug fix"
    Write-Host "3. docs     - Documentation"
    Write-Host "4. style    - Formatting/CSS"
    Write-Host "5. refactor - Code restructuring"
    Write-Host "6. chore    - Maintenance"
    Write-Host "7. Other    - (type manually)"
    
    $typeChoice = Read-Host "`nEnter number (1-7)"
    $typeMap = @{
        '1' = 'feat'
        '2' = 'fix'
        '3' = 'docs'
        '4' = 'style'
        '5' = 'refactor'
        '6' = 'chore'
    }
    
    if ($typeChoice -eq '7') {
        $commitType = Read-Host "Enter commit type"
    } else {
        $commitType = $typeMap[$typeChoice]
    }
    
    # Get scope (optional)
    $commitScope = Read-Host "`nEnter scope (optional, press Enter to skip)"
    
    # Get description
    $commitDesc = Read-Host "`nEnter commit description (required)"
    
    # Build commit message
    if ($commitScope) {
        $commitMsg = "${commitType}(${commitScope}): ${commitDesc}"
    } else {
        $commitMsg = "${commitType}: ${commitDesc}"
    }
    
    Write-Host "`nCommit message:" -ForegroundColor Green
    Write-Host "  $commitMsg" -ForegroundColor White
    
    $confirm = Read-Host "`nProceed with commit? (y/n)"
    if ($confirm -eq 'y' -or $confirm -eq 'Y') {
        git commit -m "$commitMsg"
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Commit successful!" -ForegroundColor Green
        } else {
            Write-Host "❌ Commit failed. Check git hooks output above." -ForegroundColor Red
        }
    } else {
        Write-Host "❌ Commit cancelled" -ForegroundColor Yellow
    }
}

# Main script logic
if ($Interactive) {
    Get-InteractiveCommit
} elseif ($Type -and $Description) {
    if ($Scope) {
        $commitMsg = "${Type}(${Scope}): ${Description}"
    } else {
        $commitMsg = "${Type}: ${Description}"
    }
    
    Write-Host "`nCommitting with message:" -ForegroundColor Green
    Write-Host "  $commitMsg" -ForegroundColor White
    
    git commit -m "$commitMsg"
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Commit successful!" -ForegroundColor Green
    } else {
        Write-Host "❌ Commit failed. Check git hooks output above." -ForegroundColor Red
    }
} else {
    Show-CommitHelp
}
