from pathlib import Path
from playwright.sync_api import sync_playwright

root = Path(__file__).resolve().parents[1]
shots = root / "tests" / "screenshots"
shots.mkdir(parents=True, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    for name, width, height in [("desktop", 1440, 1000), ("mobile", 390, 844)]:
        page = browser.new_page(viewport={"width": width, "height": height})
        errors = []
        page.on("console", lambda msg: errors.append(msg.text) if msg.type == "error" else None)
        page.goto("http://127.0.0.1:3127", wait_until="networkidle")
        page.screenshot(path=str(shots / f"{name}.png"), full_page=True)
        overflow = page.evaluate("document.documentElement.scrollWidth > document.documentElement.clientWidth")
        h1 = page.locator("h1").count()
        cards = page.locator(".fleet-card").count()
        if name == "desktop":
            page.get_by_role("button", name="City Car").click()
            filtered = page.locator(".fleet-card").count()
            print(f"{name}: h1={h1}, fleet={cards}, filtered={filtered}, overflow={overflow}, console_errors={len(errors)}")
        else:
            page.get_by_role("button", name="Buka navigasi").click()
            menu_visible = page.locator("nav.open").is_visible()
            print(f"{name}: h1={h1}, fleet={cards}, menu={menu_visible}, overflow={overflow}, console_errors={len(errors)}")
        page.close()
    browser.close()
