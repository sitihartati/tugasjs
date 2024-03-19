function tambahPegawai() {
    var nama = document.getElementById("nama").value;
    var jabatan = document.getElementById("jabatan").value;
    var status = document.getElementById("status").value;
    var gaji = parseFloat(document.getElementById("gaji").value);

    var tunjanganJabatan = 0.15 * gaji;
    var bpjs = 0.1 * gaji;
    var tunjanganKeluarga = (status === "menikah") ? 0.2 * gaji : 0;
    var totalGaji = gaji + tunjanganJabatan - bpjs + tunjanganKeluarga;

    var tableBody = document.getElementById("pegawaiBody");
    var newRow = tableBody.insertRow();
    newRow.innerHTML = "<td>" + nama + "</td>" +
        "<td>" + jabatan + "</td>" +
        "<td>" + status + "</td>" +
        "<td>" + gaji + "</td>" +
        "<td>" + tunjanganJabatan + "</td>" +
        "<td>" + bpjs + "</td>" +
        "<td>" + tunjanganKeluarga + "</td>" +
        "<td>" + totalGaji + "</td>";


    swal({
        title: "Sukses!",
        text: "Data pegawai berhasil ditambahkan:\n\n" +
            "Nama Pegawai: " + nama + "\n" +
            "Jabatan: " + jabatan + "\n" +
            "Status: " + status + "\n" +
            "Gaji Pokok: " + gaji + "\n" +
            "Tunjangan Jabatan: " + tunjanganJabatan + "\n" +
            "BPJS: " + bpjs + "\n" +
            "Tunjangan Keluarga: " + tunjanganKeluarga + "\n" +
            "Total Gaji: " + totalGaji,
        icon: "success",
        button: "OK",
    });

    updateTotalGaji();
}