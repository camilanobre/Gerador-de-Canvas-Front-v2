<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex
      >
        <div id="botaoVoltar">
          <v-btn
            color="tertiary"
            @click="voltar"
          >
            Voltar
          </v-btn>
        </div>
        <h2 style="text-align:center"> Projeto {{ canvas.nomeProjeto }}</h2>
        <hr >
        <v-row
          class="flex-child"
        >
          <!-- PARCERIAS CHAVE -->
          <v-col
            class="d-flex"
            cols="12"
            md="3"
          >
            <v-sheet
              class="d-flex"
              color="yellow accent-3"
              height="500"
              width="600"
            >
              <sheet-footer>
                Parcerias-Chave <v-icon color="black">mdi-account-key</v-icon>
                <hr color="black">
                <nl2br :text="canvas.parceirosChave "/>
              </sheet-footer>
            </v-sheet>
          </v-col>

          <!-- ATIVIDADES CHAVE -->
          <v-col
            class="d-flex"
            cols="12"
            md="2"
          >
            <v-row>
              <v-sheet
                class="d-flex"
                color="lime accent-3"
                width="220"
                height="250"
              >
                <sheet-footer>
                  Atividades-Chave <v-icon color="black">mdi-worker</v-icon>
                  <hr color="black">
                  <nl2br :text="canvas.atividadesChave "/>
                </sheet-footer>
              </v-sheet>

              <!-- RECURSOS CHAVE -->
              <v-sheet
                class="d-flex"
                color="blue accent-4"
                width="220"
                height="250"
              >
                <sheet-footer>
                  Recursos-Chave <v-icon color="black">mdi-wrench</v-icon>
                  <hr color="black">
                  <nl2br :text="canvas.recursosChave "/>
                </sheet-footer>
              </v-sheet>
            </v-row>
          </v-col>

          <!-- PROPOSTA DE VALOR -->
          <v-col
            class="d-flex"
            cols="12"
            md="2"
          >
            <v-sheet
              class="d-flex"
              color="pink accent-3"
              height="500"
              width="600"
            >
              <sheet-footer>
                Proposta de Valor <v-icon color="black">mdi-gift</v-icon>
                <hr color="black">
                <nl2br :text="canvas.propostaValor "/>
              </sheet-footer>
            </v-sheet>
          </v-col>

          <!-- RELACIONAMENTO COM O CLIENTE -->
          <v-col
            class="d-flex"
            cols="12"
            md="2"
          >
            <v-row>
              <v-sheet
                class="d-flex"
                color="purple accent-3"
                width="220"
                height="250"
              >
                <sheet-footer>
                  Relacionamento <v-icon color="black">mdi-heart</v-icon>
                  <hr color="black">
                  <nl2br :text="canvas.relacoesClientes "/>
                </sheet-footer>
              </v-sheet>
              <v-sheet
                class="d-flex"
                color="yellow darken-2"
                width="220"
                height="250"
              >
                <sheet-footer>
                  Canais <v-icon color="black">mdi-truck-fast</v-icon>
                  <hr color="black">
                  <nl2br :text="canvas.canaisVenda "/>
                </sheet-footer>
              </v-sheet>
            </v-row>
          </v-col>

          <!-- SEGMENTO DE CLIENTES -->
          <v-col
            class="d-flex"
            cols="12"
            md="3"
          >
            <v-sheet
              class="d-flex"
              color="light-blue "
              height="500"
              width="600"
            >
              <sheet-footer>
                Segmento<v-icon color="black">mdi-human-handsup</v-icon>
                <hr color="black">
                <nl2br :text="canvas.segmentosMercado "/>
              </sheet-footer>
            </v-sheet>
          </v-col>

          <!-- Estrutura de custos -->
          <v-col
            class="d-flex"
            cols="12"
            md="6"
          >
            <v-sheet
              class="d-flex"
              color="light-green accent-4"
              width="800"
              height="250"
            >
              <sheet-footer>
                Estrutura de Custos <v-icon color="black">mdi-script</v-icon>
                <hr color="black">
                <nl2br :text="canvas.estruturaCustos "/>
              </sheet-footer>
            </v-sheet>
          </v-col>

          <!-- Fontes de Receita -->
          <v-col
            class="d-flex"
            cols="12"
            md="6"
          >
            <v-sheet
              class="d-flex"
              color="red lighten-1"
              width="850"
              height="250"
            >
              <sheet-footer>
                Fontes de Receita <v-icon color="black">mdi-cash-usd</v-icon>
                <hr color="black">
                <nl2br :text="canvas.fontesRenda "/>
              </sheet-footer>
            </v-sheet>
          </v-col>
        </v-row>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      canvas: {
        idCanvas: this.$store.state.editCanvas.canvasEdit.idCanvas,
        nomeProjeto: this.$store.state.editCanvas.canvasEdit.nomeProjeto,
        dataCriacaoProjeto: this.$store.state.editCanvas.canvasEdit.dataCriacaoProjeto,
        idUsuario: this.$store.state.editCanvas.canvasEdit.idUsuario,
        parceirosChave: this.$store.state.editCanvas.canvasEdit.parceirosChave,
        atividadesChave: this.$store.state.editCanvas.canvasEdit.atividadesChave,
        recursosChave: this.$store.state.editCanvas.canvasEdit.recursosChave,
        propostaValor: this.$store.state.editCanvas.canvasEdit.propostaValor,
        relacoesClientes: this.$store.state.editCanvas.canvasEdit.relacoesClientes,
        canaisVenda: this.$store.state.editCanvas.canvasEdit.canaisVenda,
        segmentosMercado: this.$store.state.editCanvas.canvasEdit.segmentosMercado,
        estruturaCustos: this.$store.state.editCanvas.canvasEdit.estruturaCustos,
        fontesRenda: this.$store.state.editCanvas.canvasEdit.fontesRenda
      },
      SheetFooter: {
        functional: true,
        render (h, { children }) {
          return h('v-sheet', {
            staticClass: 'mt-auto align-center justify-center d-flex',
            props: {
              color: 'rgba(0, 0, 0, .36)',
              dark: true,
              height: 50
            }
          }, children)
        }
      },
      btnImprimir: true,
      submitted: false,
      cssText: `
      .printing {
        font-family: 'Open Sans', sans-serif;
        width: 900px;
        text-align: center;
      }
      .printing ul {
        padding-left: 3em;
        text-align: left;
      }
      .logo-prefeitura{
        width: 80px;
        margin: auto;
        display: block;
      }
    `
    }
  },
  computed: {
    ...mapState({
      editCanvas: state => state.editCanvas.canvasEdit
    })
  },
  mounted () {
    const { Printd } = window.printd
    this.d = new Printd()
    const { contentWindow } = this.d.getIFrame()
    contentWindow.addEventListener('beforeprint', () =>
      console.log('before print event!')
    )
    contentWindow.addEventListener('afterprint', () =>
      console.log('after print event!')
    )
  },
  methods: {
    imprimir () {
      document.getElementById('botaoImprimir').remove()
      document.getElementById('botaoVoltar').remove()
      this.d.print(this.$el, [this.cssText])
      this.$router.push('/meusProjetos')
    },
    voltar () {
      this.$router.push('/meusProjetos')
    }
  }
}
</script>
<style >
.printing {
  font-family: 'Open Sans', sans-serif;
  max-width: 1100px;
  border: solid 1px #ccc;
  text-align: center;
  margin: 2em auto;
}
.printing ul {
  padding-left: 3em;
  text-align: left;
}
.logo-prefeitura {
  padding-top: 15px;
  width: 80px;
  margin: auto;
  display: block;
}
#botaoImprimir{
  padding: 15px;
}
.theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined){
background-color:#212121
}
sheet-footer {
  padding-left: 10px;
  padding-top: 15px
}
hr{
  font-weight: bold
}
</style>
