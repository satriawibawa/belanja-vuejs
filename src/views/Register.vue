<template>
  <div class="hello mt-5">
    <div class="container h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="card w-50">
          <div class="card-body">
            <h4 class="card-title text-center mb-4">Register</h4>
            <div class="dropdown-divider"></div>
            <form class="my-4" @submit.prevent="add">
            <div class="form-group">
                <label for="nama">Nama</label>
                <input
                  type="text"
                  class="form-control"
                  id="nama"
                  name="nama"
                  required
                  v-model="nama"
                /></div>
              <div class="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  required
                  v-model="email"
                />
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  required
                  v-model="password"
                />
              </div>
              <div class="form-group">
                <label for="role">Level</label>
                <select
                  class="form-control"
                  name="role" 
                  id="role" 
                  v-model="role"
                >
                  <option value="">--Pilih Level--</option>
                  <option value="admin">Admin</option>
                  <option value="pemilik">Pemilik</option>
                </select>
              </div>
              <div class="dropdown-divider my-4"></div>
              <div class="form-group text-center">
                <button
                  type="submit"
                  class="btn btn-primary w-50"
                  name="submit"
                  value="submit"
                >
                  Register
                </button>
              </div>
              <h6>sudah punya akun ? <a href="">Login</a></h6>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

//import authService from "@/service/auth";
import axios from "axios";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      nama: "",
      email: "",
      password: "",
      role: ""
    };
  },
  methods: {
    add() {
      axios({
        method: "post",
        url: "http://localhost/api-php-simple-shop/auth/register.php",
        data: {
          "nama":this.nama,
          "email":this.email,
          "password":this.password,
          "role":this.role
        },
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
