function formatRupiah(angka) {
  var number_string = angka.toString();
  var split = number_string.split(",");
  var sisa = split[0].length % 3;
  var rupiah = split[0].substr(0, sisa);
  var ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  if (ribuan) {
    var separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
  return "Rp " + rupiah;
} 