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
                  @click="openModalCadastro()"
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
    <!-- iniciando modal de cadastro -->
    <v-row justify="center">
      <v-dialog
        v-model="modalCadastro"
        persistent
        max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Criar Conta</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col
                  cols="12"
                  sm="6"
                  md="4">
                  <v-text-field
                    :rules="nomeRules"
                    label="Nome*"
                    required/>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4">
                  <v-text-field
                    :rules="sobrenomeRules"
                    label="Sobrenome*"/>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    :rules="emailCadastroRules"
                    label="Email*"
                    required/>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    :rules="passwordRules"
                    label="Senha*"
                    type="password"
                    required/>
                </v-col>
                <v-col
                  cols="12"
                  sm="6">
                  <v-select
                    :items="['0-17', '18-29', '30-54', '54+']"
                    label="Idade"
                    required
                  />
                </v-col>
                <v-col
                  cols="12"
                  sm="6">
                  <v-autocomplete
                    :items="['Amigos', 'Anúncios', 'Facebook', 'Twitter']"
                    label="Como nos conheceu?"
                    multiple
                  />
                </v-col>
              </v-row>
            </v-container>
            <small>*campos obrigatórios</small>
          </v-card-text>
          <v-card-actions>
            <div class="flex-grow-1"/>
            <v-btn
              color="deep-purple darken-4"
              text
              @click="modalCadastro = false">Fechar</v-btn>
            <v-btn
              color="deep-purple darken-4"
              text
              @click="cadastrarUsuario()">Cadastrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      color="success"
      top>
      {{ textoCadastro }}
      <v-btn
        text
        @click="snackbar = false">
        <v-icon
          left>mdi-close-circle</v-icon>
      </v-btn>
    </v-snackbar>
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
      modalCadastro: false,
      snackbar: false,
      timeout: 6000,
      textoCadastro: 'Cadastrado com sucesso!',
      emailRules: [
        v => !!v || 'Campo obrigatório'
      ],
      emailCadastroRules:[
        v => !!v || 'Campo obrigatório!',
        v => /.+@.+/.test(v) || 'E-mail inválido!'
      ],
      nomeRules: [
        v => !!v || 'Campo obrigatório!'
      ],
      sobrenomeRules: [
        v => !!v || 'Campo obrigatório!'
      ],
      passwordRules: [
        v => !!v || 'Campo obrigatório!'
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
    openModalCadastro () {
      this.modalCadastro = true
    },
    cadastrarUsuario () {
      this.snackbar = true
      this.modalCadastro = false
    },
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
