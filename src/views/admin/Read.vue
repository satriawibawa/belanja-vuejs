<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header d-flex justify-content-between">
        <a href="/admin/insert" class="btn btn-primary mb-2">+ Tambah Data Baru</a>
      </div>
      <div class="card-body">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Barang</th>
              <th>Jenis Barang</th>
              <th>Harga Barang</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(barang, index) in barangs" :key="barang.id_barang">
              <td>{{index+1}}</td>
              <td>{{barang.nama}}</td>
              <td>{{barang.jenis}}</td>
              <td>{{barang.harga}}</td>
              <td>
                <router-link :to="{ name: 'Update', params: {id: barang.id} }" class="btn btn-success">
                  Edit
                </router-link> | 
                <button @click="deleteItem(barang.id)" class="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      barangs :[]
    };
  },
  methods:{
    getBarang(){
      axios.get('http://localhost/api-shop/barang/read.php')
      .then(res => {
        this.barangs = res.data.body
      })
      .catch(err => {
          // handle error
          console.log(err);
      })
    },
    deleteItem(id) {
      axios.delete('http://localhost/api-shop/barang/delete.php?id='+id)
      .then(res => {
         if (res.status == 200) {
            alert("Data Berhasil Hapus")
            window.location.reload()
            this.$router.push("read");
          }
      })
      .catch(err => {
          // handle error
          console.log(err);
      })
    }
  },
  mounted(){
    this.getBarang()
  }

};
</script>

<style lang="stylus" scoped>

</style>