function beliProduk(namaProduk, harga) {
    document.getElementById('produk-dipilih').value = namaProduk;
    document.getElementById('harga').value = 'Rp ' + harga.toLocaleString('id-ID');
    document.getElementById('checkout').style.display = 'block';
    window.scrollTo(0, document.getElementById('checkout').offsetTop);
}

document.getElementById('form-checkout').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Pembelian berhasil! Terima kasih telah berbelanja kemenyan di toko kami. Kami akan segera memproses pesanan Anda.');
    // Di sini Anda bisa tambahkan logika untuk mengirim data ke server (misalnya via AJAX ke backend seperti Node.js atau PHP).
});