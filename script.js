// Ambil elemen master SVG
const quantumMaster = document.getElementById('quantumMaster');

// Fungsi untuk mengganti state animasi
function setVaultState(state) {
    if(state === 'idle') {
        quantumMaster.setAttribute('class', 'state-idle');
    } else if (state === 'error') {
        quantumMaster.setAttribute('class', 'state-angry');
    } else if (state === 'success') {
        quantumMaster.setAttribute('class', 'state-happy');
    }
}

// CONTOH PENGGUNAAN DI DALAM LOGIKA ANDA:
/*
  if (password === benar) {
      setVaultState('success');
      setTimeout(bukaAplikasi, 2000); // Tunggu animasi selesai baru buka app
  } else if (password === salah) {
      setVaultState('error');
      setTimeout(() => setVaultState('idle'), 2000); // Kembali idle setelah 2 detik
  }
*/
