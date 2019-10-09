<template>
  <v-img src="">
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
        to="/login"
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
                  color="indigo darken-1"
                  fill-dot
                  left
                  small
                >
                  <v-card>
                    <v-card-title class="indigo darken-1 justify-start">
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
                          <v-icon size="64">mdi-help-box</v-icon>
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
                  color="red lighten-1"
                  fill-dot
                  left
                  small
                >
                  <v-card>
                    <v-card-title class="red lighten-1 justify-end">
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
                          <v-icon size="64">mdi-thought-bubble</v-icon>
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
                  color="green lighten-1"
                  fill-dot
                  right
                >
                  <v-card>
                    <v-card-title class="green lighten-1">
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
                          Coloque em prática sem precisar de papel em nossa plataforma. <br>
                          <div class="text-center">
                            <v-btn
                              class="ma-2"
                              x-large
                              color="green lighten-1">Cadastre-se agora!</v-btn>
                          </div>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-flex>
          </v-layout>
          <v-footer>
            <div class="flex-grow-1"/>
            <div>&copy; Meu Canvas -{{ new Date().getFullYear() }}</div>
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
