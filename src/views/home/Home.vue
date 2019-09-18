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
              color="purple darken-2"
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
              <v-parallax
              height="300"
              src="https://www.projectcanvas.online/wp-content/uploads/2019/01/slider-image-1.png"
              ></v-parallax>
              <v-spacer/>
              </v-card>
              <template>
                    <v-container
                grid-list-md
                text-center>
                <v-layout wrap>
                        <v-card
                      class="mx-auto"
                      :flat="flat"
                      :loading="loading"
                      :outlined="outlined"
                      :elevation="elevation"
                      :raised="raised"
                      :width="width"
                      :height="height"
                      style="padding-top: 40px;"
                    >
                      <v-img
                        v-if="media"
                        class="white--text"
                        height="200px"
                        src="https://www.almi.se/globalassets/almi/kunskapsbanken/business-model-canvas/almi-business-model-canvas.jpg"
                      >
                      </v-img>
                      <v-card-text>O Canvas agiliza e facilita o processo estratégico. <v-spacer/>
                      É uma ferramenta flexível e de fácil compreensão. <v-spacer/>
                      Sua visualização estratégica aumenta a competitividade.</v-card-text>
                    </v-card>
                    <v-card
                      class="mx-auto"
                      :flat="flat"
                      :loading="loading"
                      :outlined="outlined"
                      :elevation="elevation"
                      :raised="raised"
                      :width="width"
                      :height="height"
                      style="padding-top: 40px;"
                    >
                      <v-img
                        v-if="media"
                        class="white--text"
                        height="200px"
                        src="https://tbkconsult.com/wp-content/uploads/bfi_thumb/Working-the-canvas-500x500-mr98wwf32lbvpatrqbgvey4liosv2dt5l6b1eahk18.png"
                      >
                      </v-img>>

                      <v-card-text>I'm card text</v-card-text>
                      <v-card-actions v-if="actions">
                        <v-btn icon>
                          <v-icon>mdi-heart</v-icon>
                        </v-btn>
                        <v-btn text>Click</v-btn>
                        <v-btn outlined>Click</v-btn>
                      </v-card-actions>
                    </v-card>
                    <v-card
                      class="mx-auto"
                      :flat="flat"
                      :loading="loading"
                      :outlined="outlined"
                      :elevation="elevation"
                      :raised="raised"
                      :width="width"
                      :height="height"
                      style="padding-top: 40px;"
                    >
                      <v-img
                        v-if="media"
                        class="white--text"
                        height="200px"
                        src="https://robsoncamargo.com.br/files/thumbs/xblog_0321-pm-canvas-2-800x333.png,qv=1566996233.pagespeed.ic.i6CtVsFdRX.png"
                        >
                        <v-card-title class="align-end fill-height">I'm a title</v-card-title>
                      </v-img>
                      <v-card-title v-else>I'm a title</v-card-title>

                      <v-card-text>I'm card text</v-card-text>
                      <v-card-actions v-if="actions">
                        <v-btn icon>
                          <v-icon>mdi-heart</v-icon>
                        </v-btn>
                        <v-btn text>Click</v-btn>
                        <v-btn outlined>Click</v-btn>
                      </v-card-actions>
                    </v-card>
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
</style>
