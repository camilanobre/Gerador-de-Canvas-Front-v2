<template>
  <div class="bg">
    <v-container
      grid-list-xl
      text-xs-center
    >
      <v-layout
        row
        wrap
      >
        <v-flex
          xs12
          sm5
          md4
          offset-sm4
        >
          <v-card
            elevation-24
            style="padding: 10px; border: 1px; border-radius: 50px;"
            class="caixaLogin"
          >
            <v-card-text >
              <v-img
                :src="logo"
                height="100"
                contain
              />
              <v-list-item-title
                class="subtitle-1"
                style="color: black; text-align: center;"
              >
                Gerador de Canvas
              </v-list-item-title>
              <v-form
                ref="form"
                v-model="valid"
                lazy-validation
              >
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  clearable
                  label="Login"
                  type="text"
                  color="primary"
                  required
                />
                <v-text-field
                  v-model="senha"
                  :append-icon="show4 ? 'mdi-eye-off' : 'mdi-eye-outline'"
                  :rules="senhaRules"
                  :type="show4 ? 'text' : 'password'"
                  clearable
                  label="Senha"
                  color="primary"
                  required
                  @click:append="show4 = !show4"
                />
              </v-form>
              <div class="text-center">
                <v-btn
                  :disabled="!valid"
                  color="purple darken-4"
                  @click="validate"
                >Entrar</v-btn>
              </div>
              <div class="text-center">
                <v-btn
                  outlined
                  color="indigo"
                >Criar Conta</v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
      <div v-if="account.state.mensagem == 'Error'">
        <v-flex
          xs12
          sm5
          md4
          offset-sm4
        >
          <v-alert
            :value="true"
            type="error"
          >
            Login ou senha inválidos.
          </v-alert>
        </v-flex>
      </div>
    </v-container>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      logo: './img/login.png',
      email: '',
      show4: false,
      password: 'Password',
      emailRules: [
        v => !!v || 'Informar login!'
      ],
      senha: '',
      senhaRules: [
        v => !!v || 'Campo obrigatório!'
      ],
      valid: true
    }
  },
  computed: {
    ...mapState('account', ['status']),
    ...mapState({
      account: state => state.account
    })
  },
  created () {
    this.logout()
    if (this.account.state.mensagem !== '') {
      this.account.state.mensagem = ''
    }
  },
  methods: {
    ...mapActions('account', ['login', 'logout']),
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        const { email, senha } = this
        if (email && senha) {
          this.login({ email, senha })
        }
      }
    }
  }
}
</script>

<style scoped>
.bg {
   background-image: linear-gradient(to right, #3264f5 2%, #7202bb 82%);
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   transform: scale(1.1);
   background-size: cover;
}

</style>
