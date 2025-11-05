function calculateZakat() {
  const income = parseFloat(document.getElementById("income").value);
  const months = parseInt(document.getElementById("months").value);
  const resultDiv = document.getElementById("result");

  if (isNaN(income) || isNaN(months) || income <= 0 || months <= 0) {
    resultDiv.textContent = "Masukkan data yang valid.";
    return;
  }

  const totalIncome = income * months;
  const zakat = totalIncome * 0.025; // 2.5% zakat penghasilan

  resultDiv.textContent = `Total Zakat yang harus dibayar: Rp${zakat.toLocaleString("id-ID")}`;
}

// Wire the button to the function (unobtrusive JS)
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('calculateBtn');
  if (btn) btn.addEventListener('click', calculateZakat);
});
