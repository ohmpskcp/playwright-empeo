export const fullScreenMode = async (page) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.evaluate(() => {
      window.moveTo(0, 0);
      window.resizeTo(screen.width, screen.height);
    });
  };