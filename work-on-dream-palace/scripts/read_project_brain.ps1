param(
    [string]$Root = "",
    [string]$Pack = "core"
)

$ErrorActionPreference = "Stop"

function Test-DreamPalaceRoot {
    param([string]$Path)

    return (Test-Path -LiteralPath (Join-Path $Path "AGENTS.md")) -and
        (Test-Path -LiteralPath (Join-Path $Path ".memory\CORE.md"))
}

function Resolve-DreamPalaceRoot {
    param([string]$RequestedRoot)

    if ($RequestedRoot) {
        $resolved = (Resolve-Path -LiteralPath $RequestedRoot).Path
        if (-not (Test-DreamPalaceRoot -Path $resolved)) {
            throw "Not a Dream Palace Project Brain root: $resolved"
        }
        return $resolved
    }

    $matches = [System.Collections.Generic.List[string]]::new()
    $cursor = Get-Item -LiteralPath (Get-Location).Path

    while ($cursor) {
        $candidates = @(
            $cursor.FullName,
            (Join-Path $cursor.FullName "work\dream-palace"),
            (Join-Path $cursor.FullName "dream-palace")
        )

        foreach ($candidate in $candidates) {
            if ((Test-DreamPalaceRoot -Path $candidate) -and -not $matches.Contains($candidate)) {
                $matches.Add($candidate)
            }
        }

        $cursor = $cursor.Parent
    }

    if ($matches.Count -eq 1) {
        return $matches[0]
    }

    if ($matches.Count -gt 1) {
        throw "Multiple Dream Palace roots found. Pass -Root explicitly: $($matches -join ', ')"
    }

    throw "Dream Palace Project Brain not found. Run inside its workspace or pass -Root."
}

$packMap = @{
    "core"       = $null
    "demo"       = ".memory\DEMO.md"
    "ui-art"     = ".memory\UI_ART.md"
    "characters" = ".memory\CHARACTERS.md"
    "world"      = ".memory\WORLD.md"
    "decisions"  = ".memory\DECISIONS.md"
}

$requestedPacks = @($Pack -split "," | ForEach-Object { $_.Trim().ToLowerInvariant() } | Where-Object { $_ })
foreach ($requestedPack in $requestedPacks) {
    if (-not $packMap.ContainsKey($requestedPack)) {
        throw "Unknown pack '$requestedPack'. Valid packs: $($packMap.Keys -join ', ')"
    }
}

$repoRoot = Resolve-DreamPalaceRoot -RequestedRoot $Root
$files = [System.Collections.Generic.List[string]]::new()

foreach ($defaultFile in @(".memory\CORE.md", ".memory\CURRENT.md", ".memory\ROUTING.md")) {
    $files.Add($defaultFile)
}

foreach ($requestedPack in $requestedPacks) {
    $optionalFile = $packMap[$requestedPack]
    if ($optionalFile -and -not $files.Contains($optionalFile)) {
        $files.Add($optionalFile)
    }
}

foreach ($relativeFile in $files) {
    $fullPath = Join-Path $repoRoot $relativeFile
    if (-not (Test-Path -LiteralPath $fullPath)) {
        throw "Missing Project Brain file: $fullPath"
    }

    Write-Output "--- $relativeFile ---"
    Get-Content -LiteralPath $fullPath
    Write-Output ""
}
