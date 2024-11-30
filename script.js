$(document).ready(function() {
    // Event click untuk tombol Save
    $('#save').on('click', function() {
        var nama = $('#name').val(); // Ambil nilai input nama
        var nik = $('#nik').val();   // Ambil nilai input NIK
        var dob = $('#dob').val();   // Ambil nilai input NIK
        var count = $('#myData tbody tr').length + 1; // Hitung jumlah baris data

        if (nama !== "" && nik !== "") {
            // Tambahkan baris ke tabel
            $('#myData tbody').append(`
                <tr>
                    <td>${count}</td>
                    <td>${nama}</td>
                    <td>${nik}</td>
                    <td>${dob}</td>
                    <td>
                        <a href="javascript:void(0);" class="remdata"><i class="fa-solid fa-trash" style="color: #373539;" onmouseover="this.style.color='red'" 
                        onmouseout="this.style.color='#373539'"></i></a>
                    </td>
                </tr>
            `);
            // Reset input form
            $('#name').val('');
            $('#nik').val('');
            $('#dob').val('');
        } else {
            alert("Mohon isi semua data!");
        }
    });

    // Event click untuk tombol Delete
    $(document).on('click', '.remdata', function() {
        $(this).closest('tr').remove(); // Hapus baris
        // Perbarui nomor ID setelah penghapusan
        $('#myData tbody tr').each(function(i) {
            $(this).find('td:first').text(i + 1);
        });
    });
});
