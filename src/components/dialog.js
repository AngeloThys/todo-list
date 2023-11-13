export function addCloseDialogListener() {
  const dialogList = document.querySelectorAll('dialog');

  dialogList.forEach((dialog) => {
    dialog.addEventListener('click', (e) => {
      if (e.target.localName === 'dialog') {
        dialog.close();
      }
    });
  });
}
