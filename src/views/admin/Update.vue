<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header d-flex justify-content-between">
        <span>Update Data Barang</span>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="updateItem">
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="gambar_barang">Gambar Barang</label>
                <input
                  type="file"
                  class="form-control"
                  name="gambar_barang"
                  id="gambar_barang"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="nama_barang">Nama Barang</label>
                <input
                  type="text"
                  class="form-control"
                  id="nama_barang"
                  name="nama_barang"
                  v-model="nama_barang"
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
                  id="jenis_barang"
                  name="jenis_barang"
                  v-model="jenis_barang"
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
                  id="harga_barang"
                  name="harga_barang"
                  v-model="harga_barang"
                  placeholder="masukkan harga barang"
                />
              </div>
            </div>
          </div>
          <div class="row">
            
            <div class="col-md-6">
              <div class="form-group">
                <label for="jumlah_barang">Jumlah Barang</label>
                <input
                  type="text"
                  class="form-control"
                  id="jumlah_barang"
                  name="jumlah_barang"
                  v-model="jumlah_barang"
                  placeholder="masukkan jumlah barang"
                />
              </div>
            </div>
          </div>
          <input type="submit" class="btn btn-primary" value="Update Barang"/>
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
        nama_barang: "",
        jenis_barang: "",
        harga_barang: "",
        jumlah_barang: "",
    };
  },
  methods: {
    updateItem() {
      let data = JSON.stringify({ 'id': this.$route.params.id,'nama': this.nama_barang, 'jenis': this.jenis_barang, 'harga': this.harga_barang});
      axios
        .post(
          "http://localhost/api-shop/barang/update.php", data, {
        headers: {
            'Content-Type': 'application/json',
        }
    }
        )
        .then(async res => {
          const data = await res;
          if (data.status == 200) {
            alert("Data Berhasil Update")
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