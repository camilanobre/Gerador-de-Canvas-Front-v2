<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      align-center
      column
    >
      <v-container
        grid-list-md
        text-xs-center
      >
        <v-layout
          row
          wrap
        >
          <v-flex
            xl12
            lg12
            md12
            sm12
            xs12
          >
            <v-card
              dark
              color="primary"
            >
              <v-card-text>
                <v-list-item-title
                  class="subtitle-1"
                  style="color: white; text-align: center;"
                >
                  Bem vindo
                </v-list-item-title>
                <v-list-item-title
                  class="subtitle-2"
                  style="color: white; text-align: center;"
                >
                  {{ nomeUsuario }}
                </v-list-item-title>
              </v-card-text>
            </v-card>
            <template>
              <v-container
                grid-list-md
                text-center>
                <v-layout wrap>
                  <v-flex
                    xs6
                    md6
                    lg4
                    xl4
                  >
                    <template>
                      <v-btn
                        :href="'http://172.21.63.23:8100'"
                        color="grey darken-2"
                        target="_blank"
                      >
                        <v-icon
                          left
                          color="deep-orange accent-2"
                        >mdi-account-star</v-icon>
                        Usuários
                      </v-btn>
                    </template>
                  </v-flex>
                  <v-flex
                    xs6
                    md6
                    lg4
                    xl4
                  >
                    <template>
                      <v-btn
                        :href="'http://172.21.63.23:8500'"
                        color="grey darken-2"
                        target="_blank"
                      >
                        <v-icon
                          left
                          color="green accent-3"
                        >mdi-account-multiple</v-icon>
                        Pessoas
                      </v-btn>
                    </template>
                  </v-flex>
                  <v-flex
                    xs6
                    md6
                    lg4
                    xl4
                  >
                    <template>
                      <v-btn
                        :href="'http://172.21.63.23:8600'"
                        color="grey darken-2"
                        target="_blank"
                      >
                        <v-icon
                          left
                          color="yellow accent-2"
                        >mdi-calendar</v-icon>
                        Diárias
                      </v-btn>
                    </template>
                  </v-flex>
                  <v-flex
                    xs6
                    md6
                    lg4
                    xl4
                  >
                    <template>
                      <v-btn
                        color="grey darken-2"
                      >
                        <v-icon
                          left
                          color="cyan accent-2"
                        >mdi-church</v-icon>
                        Cemitério
                      </v-btn>
                    </template>
                  </v-flex>
                  <v-flex
                    xs6
                    md6
                    lg4
                    xl4
                  >
                    <template>
                      <v-btn
                        color="grey darken-2"
                      >
                        <v-icon
                          left
                          color="purple accent-1"
                        >mdi-alert-circle</v-icon>
                        !!!!!!!
                      </v-btn>
                    </template>
                  </v-flex>
                  <v-flex
                    xs6
                    md6
                    lg4
                    xl4
                  >
                    <template>
                      <v-btn
                        color="grey darken-2"
                      >
                        <v-icon
                          left
                          color="teal accent-2"
                        >mdi-alert-circle</v-icon>
                        !!!!!!!
                      </v-btn>
                    </template>
                  </v-flex>
                </v-layout>
              </v-container>
            </template>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      show: false,
      nomeUsuario: '',
      idUsuario: ''
    }
  },
  computed: {
    ...mapState({
      account: state => state.account
    })
  },
  created () {
    this.NomeDoUsuario()
    this.getUsuarioStorage()
  },
  methods: {
    getUsuarioStorage () {
      let usuario = JSON.parse(localStorage.getItem('usuario'))
      this.usuario = usuario.value
    },
    NomeDoUsuario () {
      if (
        this.account !== null ||
        this.account.user !== null ||
        this.account !== '' ||
        this.account.user !== ''
      ) {
        this.account.user = JSON.parse(localStorage.getItem('usuario'))
        this.nomeUsuario = this.account.user.value.nome
      }
    }
  }
}
</script>
