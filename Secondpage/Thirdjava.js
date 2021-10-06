function printDiv(leftbox) {
    var printContents = document.getElementById(leftbox).innerHTML;
    w=window.open();
    w.document.write(printContents);
    w.print();
    w.close();
}