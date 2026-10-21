(function () {
  const headerBar = document.getElementById('headerBar');
  const onScroll = () => {
    headerBar?.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const copyButton = document.getElementById('copy');
  const command = document.getElementById('command');
  const status = document.getElementById('copy-status');
  copyButton?.addEventListener('click', async () => {
    const value = command?.textContent || '';
    if (!value) return;
    try {
      await navigator.clipboard.writeText(value);
      if (status) status.textContent = '已复制安装命令。';
    } catch {
      if (status) status.textContent = '请选中命令并手动复制。';
    }
  });
})();
