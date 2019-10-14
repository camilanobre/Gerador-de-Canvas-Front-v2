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
        <!-- <div id="botaoImprimir">
          <v-btn
            color="primary"
            @click="imprimir"
          >
            <v-icon left>mdi-printer</v-icon>
            Imprimir
          </v-btn>
        </div> -->
        <div class="printing">
          <!-- <img
            src="../../../public/img/logo-prefeitura1.png"
            alt="Logo"
            class="logo-prefeitura"
          > -->
          {{ canvas }}
          <h2 style="text-align:center"> Projeto {{ canvas.nomeProjeto }}</h2>
          <hr>
          <v-row
            class="flex-child"
          >
            <v-col
              class="d-flex"
              cols="12"
              md="2"
            >
              <v-sheet
                class="d-flex"
                color="light-green lighten-4"
                height="200"
              >
                <sheet-footer>
                  Parcerias Chave <v-icon color="black">mdi-human-male-female</v-icon>
                </sheet-footer>
              </v-sheet>
            </v-col>





            <v-col
              class="d-flex"
              cols="12"
              md="2"
            >
              <v-row>
                <v-sheet
                  class="d-flex"
                  color="yellow lighten-3"
                  width="150"
                  height="100"
                >
                  <sheet-footer>
                    #3: (1r x 1c)
                  </sheet-footer>
                </v-sheet>
                <v-sheet
                  class="d-flex"
                  color="red lighten-3"
                  width="150"
                  height="100"
                >
                  <sheet-footer>
                    #5: (2r x 2c)
                  </sheet-footer>
                </v-sheet>
              </v-row>
            </v-col>





            <v-col
              class="d-flex"
              cols="12"
              md="2"
            >
              <v-sheet
                class="d-flex"
                color="light-green lighten-4"
                height="200"
              >
                <sheet-footer>
                  Parcerias Chave <v-icon color="black">mdi-human-male-female</v-icon>
                </sheet-footer>
              </v-sheet>
            </v-col>






             <v-col
              class="d-flex"
              cols="12"
              md="2"
            >
              <v-row>
                <v-sheet
                  class="d-flex"
                  color="yellow lighten-3"
                  width="150"
                  height="100"
                >
                  <sheet-footer>
                    #3: (1r x 1c)
                  </sheet-footer>
                </v-sheet>
                <v-sheet
                  class="d-flex"
                  color="red lighten-3"
                  width="150"
                  height="100"
                >
                  <sheet-footer>
                    #5: (2r x 2c)
                  </sheet-footer>
                </v-sheet>
              </v-row>
            </v-col>






            <v-col
              class="d-flex"
              cols="12"
              md="3"
            >
              <v-sheet
                class="d-flex"
                color="light-green lighten-4"
                height="200"
              >
                <sheet-footer>
                  Parcerias Chave <v-icon color="black">mdi-human-male-female</v-icon>
                </sheet-footer>
              </v-sheet>
            </v-col>





            <v-col
              class="d-flex"
              cols="12"
              md="5"
            >
              <v-sheet
                class="d-flex"
                color="light-green lighten-4"
                width="400"
                height="200"
              >
                <sheet-footer>
                  Parcerias Chave <v-icon color="black">mdi-human-male-female</v-icon>
                </sheet-footer>
              </v-sheet>
            </v-col>
            <v-col
              class="d-flex"
              cols="12"
              md="5"
            >
              <v-sheet
                class="d-flex"
                color="light-green lighten-4"
                width="400"
                height="200"
              >
                <sheet-footer>
                  Parcerias Chave <v-icon color="black">mdi-human-male-female</v-icon>
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

</style>
