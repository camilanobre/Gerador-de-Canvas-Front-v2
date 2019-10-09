<template>
  <v-img src="http://www.desktopimages.org/preview/get_photo/83351/2880/1800">
    <div>
      <v-app-bar
        color="purple darken-4"
        dark
      >
        <div class="flex-grow-1"/>
        <v-btn icon> Projetos Públicos
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
        <div class="flex-grow-1"/>
        <v-btn icon> Sobre Nós
          <v-icon>mdi-human-handsup</v-icon>
        </v-btn>
        <div class="flex-grow-1"/>
        <v-btn
          icon
          href="login"> Entrar/Cadastrar
          <v-icon>mdi-login</v-icon>
        </v-btn>
        <div class="flex-grow-1"/>
      </v-app-bar>
    </div>
    <v-parallax
      height="300"
      dark
      src="/img/bg.png">
      <v-row
        align="center"
        justify="center">
        <h1 class="display-2 font-weight-thin mb-4">Gerador de Canvas</h1> <br>
        <h4 class="subheading">Crie o seu hoje mesmo!</h4>
      </v-row>
      <v-btn
        class="ma-2"
        outlined
        large
        href="login"
        color="white">Começar</v-btn>
    </v-parallax>
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
              <v-timeline :dense="$vuetify.breakpoint.smAndDown">
                <v-timeline-item
                  color="purple lighten-2"
                  fill-dot
                  right
                >
                  <v-card>
                    <v-card-title class="purple lighten-2">
                      <v-icon
                        dark
                        size="42"
                        class="mr-4"
                      >
                        mdi-alert-octagram
                      </v-icon>
                      <h2
                        class="white--text"
                        style="font-size: 18px !important; font-family:Poppins', sans-serif">
                        Entenda melhor o que é o Canvas</h2>
                    </v-card-title>
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12"
                          md="12">
                          Esqueça o velho costume de montar o plano de negócios em milhares de folhas de papel. Agora, a nova tendência é o Canvas, que permite visualizar todas as etapas com mais facilidade e planejar as ações.
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-timeline-item>

                <v-timeline-item
                  color="deep-purple darken-1"
                  fill-dot
                  left
                  small
                >
                  <v-card>
                    <v-card-title class="deep-purple darken-1 justify-start">
                      <h2
                        class="white--text"
                        style="font-size: 18px !important; font-family:Poppins', sans-serif">
                        Mas o que ele tem de melhor?
                      </h2>
                    </v-card-title>
                    <v-container>
                      <v-row>
                        <v-col
                          class="hidden-sm-and-down"
                          md="2">
                          <v-icon 
                          size="64"
                          color="deep-purple darken-1"
                          >mdi-help-box</v-icon>
                        </v-col>
                        <v-col
                          cols="12"
                          md="10">
                          O plano de negócios tradicional é demorado, fantasioso, não reconhece as variáveis e não pode ser atualizado com facilidade. Por outro lado, o Canvas traz à tona um modelo simplificado, mutável e que oferece uma visão panorâmica do projeto.
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-timeline-item>

                <v-timeline-item
                  color="cyan lighten-1"
                  fill-dot
                  right
                >
                  <v-card>
                    <v-card-title class="cyan lighten-1">
                      <v-icon
                        class="mr-4"
                        dark
                        size="42"
                      >
                        mdi-emoticon-excited
                      </v-icon>
                      <h2
                        class="white--text"
                        style="font-size: 18px !important; font-family:Poppins', sans-serif">Quero saber mais!</h2>
                    </v-card-title>
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12"
                          md="12"
                        >
                          O método Canvas é muito mais do que uma estratégia para tirar o negócio do papel. Ele ajuda o empreendedor a organizar as etapas e acompanhar o funcionamento de cada uma delas. Garante mais controle sobre o empreendimento, já que tudo fica exposto em um mural de fácil visualização.
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-timeline-item>

                <v-timeline-item
                  color="cyan darken-3"
                  fill-dot
                  left
                  small
                >
                  <v-card>
                    <v-card-title class="cyan darken-3 justify-start">
                      <h2
                        class="white--text"
                        style="font-size: 18px !important; font-family:Poppins', sans-serif">
                        Legal! E quais as propostas do Canvas?
                      </h2>
                    </v-card-title>
                    <v-container>
                      <v-row>
                        <v-col
                          class="hidden-sm-and-down"
                          md="2">
                          <v-icon color="cyan darken-3" size="64">mdi-thought-bubble</v-icon>
                        </v-col>
                        <v-col
                          cols="12"
                          md="10">
                          A proposta do Canvas é montar um quadro e colocar na parede . Esse mural deve reunir blocos que identificam elementos importantes para o negócio. O Canvas permite uma grande flexibilidade possível fazer a inclusão ou alteração de ideias de maneira rápida e interativa.                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-timeline-item>

                <v-timeline-item
                  color="deep-purple darken-4"
                  fill-dot
                  right
                >
                  <v-card>
                    <v-card-title class="deep-purple darken-4">
                      <v-icon
                        class="mr-4"
                        dark
                        size="42"
                      >
                        mdi-bomb
                      </v-icon>
                      <h2
                        class="white--text"
                        style="font-size: 18px !important; font-family:Poppins', sans-serif">
                        Pronto para começar?
                      </h2>
                    </v-card-title>
                    <v-container>
                      <v-row>
                        <v-col>
                          Coloque em prática o seu projeto sem precisar de papel, na nossa plataforma!!! <br>
                          <div class="text-center">
                            <v-btn
                              class="ma-2"
                              x-large
                              href="login"
                              color="indigo darken-4">Cadastre-se agora!</v-btn>
                          </div>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-flex>
          </v-layout>
          <div>
           <v-container
                grid-list-md
                text-center>
                <v-layout wrap>
              <v-hover v-slot:default="{ hover }">
              <v-card
                class="mx-auto"
                max-width="400"
          >
            <v-img
              height="300px"
              src="http://www.albertacapital.online/images/illustration-01-95b432defb91396da68559d437fa033701513b827291d2f976466601ab8f2c6f.png"
            >
            <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out purple lighten-1 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            COMECE AGORA
          </div>
        </v-expand-transition>
            </v-img>
            <v-card-text class="text--black">
              <span class="text--primary">
                <hr/>
                <span>Rápido, prático, simples e o melhor: nossa plataforma é totalmente gratuita! </span>
              </span>
            </v-card-text>
          </v-card>
          </v-hover>
          <v-hover v-slot:default="{ hover }">
          <v-card
                class="mx-auto"
                max-width="400"
          >
            <v-img
              height="300px"
              src="https://startups-sururuvalley.sfo2.cdn.digitaloceanspaces.com/2019/02/startup.png"
            >
          <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out purple lighten-1 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            CRIE O SEU CANVAS
          </div>
        </v-expand-transition>
            </v-img>

            <v-card-text>
              <span class="text--primary">
                <hr/>
                <span>
                  Lembre-se: "Todos os seus sonhos podem se tornar realidade se você tem coragem para persegui-los!
                </span>
              </span>
            </v-card-text>
          </v-card>
          </v-hover>
          </v-layout>
           </v-container>
           </div> <br>
          <v-footer>
            <div class="d-flex pa-2"/>
            <div class="cor">&copy; Meu Canvas -{{ new Date().getFullYear() }}</div>
          </v-footer>
        </v-container>
      </v-layout>
    </v-container>
  </v-img>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
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
  }
}
</script>
<style>
.theme--light.v-timeline:before {
  color: white
}
h2  {
  font-family:Poppins !important
}
.theme--light.v-timeline:before {
  background: white
}
.cor {
  color: white;
  font-weight: bold
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
