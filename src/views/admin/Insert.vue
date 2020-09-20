<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header d-flex justify-content-between">
        <span>Tambah Data Barang</span>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="onSubmit">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="nama_barang">Nama Barang</label>
                <input
                  type="text"
                  class="form-control"
                  id="nama"
                  name="nama"
                  v-model="form.nama"
                  placeholder="masukkan nama barang"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="jenis_barang">Jenis Barang</label>
                <input
                  type="text"
                  class="form-control"
                  id="jenis"
                  name="jenis"
                  v-model="form.jenis"
                  placeholder="masukkan jenis barang"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="harga_barang">Harga Barang</label>
                <input
                  type="text"
                  class="form-control"
                  id="harga"
                  name="harga"
                  v-model="form.harga"
                  placeholder="masukkan harga barang"
                />
              </div>
            </div>
          </div>
          <input type="submit" class="btn btn-primary" value="Tambah"/>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      form:{
        nama: "",
        jenis: "",
        harga: "",
      }
    };
  },
  methods: {
    onSubmit() {
      let data = JSON.stringify({ 'nama': this.form.nama, 'jenis': this.form.jenis, 'harga': this.form.harga});
      axios
        .post(
          "http://localhost/api-shop/barang/create.php", data, {
        headers: {
            'Content-Type': 'application/json',
        }
    }
        )
        .then(async res => {
          const data = await res;
          if (data.status == 200) {
            alert("Data Berhasil Dikirim")
            this.$router.push("read");
          }
        })
        .catch(err => {
          alert("Data Gagal Dikirim");
          console.log(err);
        });
    },
  },
};
</script>
<style lang="stylus" scoped></style>