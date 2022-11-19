function diemTB(...Params) {
  let total = 0;
  let diemTrungBinh = 0;

  for (let i = 0; i < Params.length; i++) {
    total += Params[i];
  }
  diemTrungBinh = total / Params.length;
  return diemTrungBinh;
}

function khoi1() {
  const toan = +document.getElementById("inpToan").value;
  const ly = +document.getElementById("inpLy").value;
  const hoa = +document.getElementById("inpHoa").value;
  const tong = diemTB(toan, ly, hoa);
  document.getElementById("tbKhoi1").innerHTML = tong;
}
function khoi2() {
  const van = +document.getElementById("inpVan").value;
  const su = +document.getElementById("inpSu").value;
  const dia = +document.getElementById("inpDia").value;
  const av = +document.getElementById("inpEnglish").value;
  const tong = diemTB(van, su, dia, av);
  document.getElementById("tbKhoi2").innerHTML = tong;
}
