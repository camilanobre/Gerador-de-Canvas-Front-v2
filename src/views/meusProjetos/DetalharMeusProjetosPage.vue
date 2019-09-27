<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout wrap>
      <v-flex
        md12
        sm12
        lg12
      >
        <div id="botaoImprimir">
          <v-btn
            color="primary"
            @click="imprimir"
          >
            <v-icon left>mdi-printer</v-icon>
            Imprimir
          </v-btn>
        </div>
        <div class="printing">
          <!-- <img
            src="../../../public/img/logo-prefeitura1.png"
            alt="Logo"
            class="logo-prefeitura"
          > -->
          <h2 style="text-align:center"> Projeto {{ canvas.nomeProjeto }}</h2>
          <hr>
          <v-row
            class="flex-child"
          >
            <v-col
              class="d-flex"
              cols="12"
              md="4"
            >
              <v-sheet
                class="d-flex"
                color="light-green lighten-4"
                width="250"
                height="450"
                style="padding-left: 50px"
              >
                <sheet-footer>
                  Parcerias Chave <v-icon color="black">mdi-human-male-female</v-icon>
                </sheet-footer>
              </v-sheet>
            </v-col>

            <v-col
              class="d-flex"
              cols="12"
              md="4"
            >
              <v-row>
                <v-col cols="10">
                  <v-sheet
                    class="d-flex"
                    color="green lighten-3"
                    width="250"
                    height="250"
                    style="padding-left: 50px"
                  >
                    <sheet-footer>
                      Atividades Chave <v-icon color="black">mdi-worker</v-icon>
                    </sheet-footer>
                  </v-sheet>
                </v-col>
                <v-col cols="10">
                  <v-sheet
                    class="d-flex"
                    color="yellow lighten-3"
                    width="250"
                    height="250"
                  >
                    <sheet-footer>
                      Recursos Chave <v-icon color="black">mdi-key-change</v-icon>
                    </sheet-footer>
                  </v-sheet>
                </v-col>
                <v-col cols="6">
                  <v-sheet
                    class="d-flex"
                    color="red lighten-3"
                    height="250"
                    width="400"
                  >
                    <sheet-footer>
                      Estrutura de Custos <v-icon color="black">mdi-cash-multiple</v-icon>
                    </sheet-footer>
                  </v-sheet>
                </v-col>
              </v-row>
            </v-col>
            <v-col
              cols="6"
              md="2"
            >
              <v-sheet
                class="d-flex"
                color="teal lighten-3"
                width="250"
                height="450"
                style="padding-left: 50px"
              >
                <sheet-footer>
                  Proposta de Valor <v-icon color="black">mdi-gift</v-icon>
                </sheet-footer>
              </v-sheet>
            </v-col>
            
            <v-col
              class="d-flex"
              cols="6"
              md="2"
            >
              <v-sheet
                class="d-flex mt-auto"
                color="purple lighten-3"
                height="250"
                width="400"
              >
                <sheet-footer>
                  Fontes de Receita <v-icon color="black">mdi-bank</v-icon>
                </sheet-footer>
              </v-sheet>
            </v-col>
          </v-row>
        </div>
        <div id="botaoVoltar">
          <v-btn
            color="tertiary"
            @click="voltar"
          >
            Voltar
          </v-btn>
        </div>
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
  max-width: 1000px;
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
.col-6{
    padding: 0,
}


</style>
