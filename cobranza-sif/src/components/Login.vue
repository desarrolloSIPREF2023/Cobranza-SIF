<template>
  <div class="hello">
    <p class="auth-subtitle mb-3">Autenticación de Usuario</p>
    <div class="container">
      <form action="index.html">
        <div class="row justify-content-center mt-3">
          <div class="col-10 col-md-8">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <i class="bi bi-person"></i>
                </span>
              </div>
              <input type="text" id="number" name="number" class="form-control" placeholder="Número de Acceso" aria-label="Username" aria-describedby="basic-addon1">
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-3">
          <div class="col-10 col-md-8">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <i id="showPassword" class="bi bi-eye-slash"></i>
                </span>
              </div>
              <input type="password" id="password" name="password" class="form-control" placeholder="Número de Acceso" aria-label="Username" aria-describedby="basic-addon1">
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-3">
            <button type="button" class="btn btn-primary btn-lg shadow-lg mt-3 col-10 col-md-8" id="btnSingIn"
              onclick="signIn()">
              Acceder
            </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { useAuthStore } from '../stores/auth'

export default {

  setup() {
        const datos = useAuthStore()
        return { datos }
    },
  data() {
    return {
      
    };
  },
  methods: {
        /* loginWithEnter() { this.datos.signIn() },
        limitCharts(chars) {
            this.phone = `${chars}`
            if(this.phone > 10) {
                this.datos.number = this.phone.slice(0, 10)
            }
        } */
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
.btn-primary {
    background-color: #435ebe;
    border-color: #435ebe;
    color: #fff;
}
#auth #auth-left .auth-title {
    font-size: 4rem;
    margin-bottom: 1rem
}
#auth #auth-left .auth-subtitle {
    color: #a8aebb;
    font-size: 1.2rem;
    line-height: 2.5rem
}
</style>
