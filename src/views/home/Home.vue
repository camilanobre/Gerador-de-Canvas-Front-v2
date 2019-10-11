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
              color="deep-purple "
            >
              <v-card-text>
                <v-list-item-title
                  class="subtitle-1"
                  style="color: white; text-align: center;"
                >
                  Bem vindo(a)!
                </v-list-item-title>
                <v-list-item-title
                  class="subtitle-2"
                  style="color: white; text-align: center;"
                >
                  {{ nomeUsuario }}
                </v-list-item-title>
              </v-card-text>
            </v-card>
            <v-parallax
              height="300"
              src="../img/teamWork.jpg"
            />
            <v-spacer style="padding-top: 50px;"/>
            <template>
              <v-container
                grid-list-md
                text-center>
                <v-layout wrap>
                  <v-hover v-slot:default="{ hover }">
                    <v-card 
                      :elevation="hover ? 12 : 2"
                      :flat="flat"
                      :loading="loading"
                      :outlined="outlined"
                      :raised="raised"
                      :width="width"
                      :height="height"
                      class="mx-auto"
                      max-width="350"
                    >
                      <v-img
                        v-if="media"
                        class="white--text"
                        height="200px"
                        src="https://www.almi.se/globalassets/almi/kunskapsbanken/business-model-canvas/almi-business-model-canvas.jpg"
                      />
                      <v-card-text style="text-align: justify">
                        O Canvas agiliza e facilita o processo estratégico.
                        É uma ferramenta flexível e de fácil compreensão.
                        Sua visualização estratégica aumenta a competitividade.
                      </v-card-text>
                    </v-card>
                  </v-hover>
                  <v-hover v-slot:default="{ hover }">
                    <v-card
                      :elevation="hover ? 12 : 2"
                      :flat="flat"
                      :loading="loading"
                      :outlined="outlined"
                      :raised="raised"
                      :width="width"
                      :height="height"
                      class="mx-auto"
                    >
                      <v-img
                        v-if="media"
                        class="white--text"
                        height="200px"
                        src="https://tbkconsult.com/wp-content/uploads/bfi_thumb/Working-the-canvas-500x500-mr98wwf32lbvpatrqbgvey4liosv2dt5l6b1eahk18.png"
                      />
                      <v-card-text style="text-align: justify">
                        O Canvas é utilizado
                        seja para a construção de novos modelos de negócios ou na expansão de
                        empreendimentos que já existem,
                        tendo ganhado grande destaque, especialmente pela simplicidade e eficiência.
                      </v-card-text>
                    </v-card>
                  </v-hover>
                  <v-hover v-slot:default="{ hover }">
                    <v-card
                      :elevation="hover ? 12 : 2"
                      :flat="flat"
                      :loading="loading"
                      :outlined="outlined"
                      :raised="raised"
                      :width="width"
                      :height="height"
                      class="mx-auto">
                      <v-img
                        v-if="media"
                        class="white--text"
                        height="200px"
                        src="https://robsoncamargo.com.br/files/thumbs/xblog_0321-pm-canvas-2-800x333.png,qv=1566996233.pagespeed.ic.i6CtVsFdRX.png"
                      />
                      <v-card-text style="text-align: justify">
                        O Canvas uma das ferramentas mais utilizadas por empreendedores e
                        empresas para iniciar um negócio ou para inovar em empresas já constituídas.
                      </v-card-text>
                    </v-card>
                  </v-hover>
                </v-layout>
              </v-container>
            </template>
          </v-flex>
        </v-layout>
        <v-card
          class="mx-auto"
          height="200"
          style="background: #EDEBEE;"
        >
          <v-card-title style="color: black; text-align: center">Pronto para começar ?</v-card-title>
          <v-card-actions>
            <div class="my-2">
              <v-hover v-slot:default="{ hover }">
                <v-btn
                  :elevation="hover ? 12 : 2"
                  x-large
                  width="600px"
                  style="background:linear-gradient(to left, #9b62c0, #8a66c3, #796ac5, #666dc5, #526fc4);" >
                  Criar um Canvas
                </v-btn>
              </v-hover>
            </div>
            <v-spacer/>
            <div class="my-2">
              <v-hover v-slot:default="{ hover }">
                <v-btn
                  :elevation="hover ? 12 : 2"
                  x-large
                  width="600px"
                  style="background-image:linear-gradient(to right, #9b62c0, #8a66c3, #796ac5, #666dc5, #526fc4);"
                  dark>
                  Meus Canvas
                </v-btn>
              </v-hover>
            </div>
          </v-card-actions>
        </v-card>
      </v-container>
      <v-footer>
        <div class="flex-grow-1"/>
        <div>&copy; Meu Canvas -{{ new Date().getFullYear() }}</div>
      </v-footer>
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
      idUsuario: '',
      flat: false,
      media: true,
      loading: false,
      actions: true,
      outlined: false,
      elevation: undefined,
      raised: false,
      width: 344,
      height: undefined
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

<style scoped>
  .v-input__slider {
    width: 100%;
  }
.container {
}
</style>
