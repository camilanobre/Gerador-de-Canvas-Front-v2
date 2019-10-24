<template>
  <v-img src="https://i0.wp.com/www.aiforums.org/wp-content/uploads/2015/11/white-gradient-wallpaper-picture-14j20.jpg?fit=848%2C477">
    <v-container
      fill-height
      fluid
      grid-list-xl
    >
      <v-layout wrap>
        <v-flex
          md12
          sm12
          lg12 >
          <material-card
            color="deep-purple"
            title="Canvas Compartilhados"
          >
            <v-card-title>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Pesquisar..."
                single-line
                hide-details
              />
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="canvasCompartilhados"
              :search="search"
              :options.sync="pagination"
              :items-per-page-text="textoPaginacao"
              hide-default-footer
              class="elevation-1"
            >
              <template v-slot:item.autor="{ item }">
                {{ item.autor }}
              </template>
              <template v-slot:item.dataCriacaoProjeto="{ item }">
                {{ moment(item.dataCriacaoProjeto).parseZone().format("DD/MM/YYYY") }}
              </template>
              <template v-slot:item.view="{ item }">
                <div class="text-center">
                  <v-btn
                    text
                    icon
                    large
                    color="black"
                    @click="getCanvasViewPublicoSemUsuario(item)">
                    <v-icon>mdi-magnify-plus</v-icon>
                  </v-btn>
                </div>
              </template>
              <template v-slot:no-data>
                <div v-if="stopLoading">
                  <v-progress-linear
                    :indeterminate="true"
                    background-color="blue lighten-4"
                    color="primary"
                  />
                </div>
                <div v-else>
                  <v-alert
                    :value="true"
                    color="deep-purple lighten-4"
                    icon="mdi-alert"
                  >
                    Não há projetos compartilhados :(
                  </v-alert>
                </div>
              </template>
              <template v-slot:no-results>
                <v-alert
                  :value="true"
                  color="error"
                  icon="mdi-alert"
                >
                  Você pesquisou por "{{ search }}", porém nenhum resultado foi encontrado.
                </v-alert>
              </template>
            </v-data-table>
            <div class="text-xs-center pt-2">
              <v-pagination
                v-model="pagination.page"
                :length="pages"
                :total-visible="5"
                circle
              />
            </div>
          </material-card>
          <v-alert
            outlined
            color="indigo"
            type="warning"
            prominent
            border="left"
          >
            A ferramenta mais utilizada na atualidade no planejamento
            de negócios inovadores está disponível para você.
            O que está esperando para começar o seu?
          </v-alert>
          <v-layout
            row
            wrap>
            <v-flex
              xs12
              sm12
              md6
              lg6
              xl6
            >
              <div class="my-2">
                <v-hover v-slot:default="{ hover }">
                  <v-btn
                    :elevation="hover ? 12 : 2"
                    x-large
                    width="600px"
                    href="/landingPage"
                    style="background:linear-gradient(to left, #9b62c0, #8a66c3, #796ac5, #666dc5, #526fc4);" >
                    <v-icon>mdi-undo</v-icon>
                    Voltar
                  </v-btn>
                </v-hover>
              </div>
            </v-flex>
            <v-flex
              xs12
              sm12
              md6
              lg6
              xl6
            >
              <div class="my-2">
                <v-hover v-slot:default="{ hover }">
                  <v-btn
                    :elevation="hover ? 12 : 2"
                    x-large
                    width="600px"
                    href="login"
                    style="background-image:linear-gradient(to right, #9b62c0, #8a66c3, #796ac5, #666dc5, #526fc4);"
                    dark>
                    Cadastrar/ Login
                    <v-icon>mdi-login</v-icon>
                  </v-btn>
                </v-hover>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-img>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import moment from 'moment'
export default {
  data () {
    return {
      textoPaginacao: 'Exibir',
      stopLoading: true,
      pagination: {
        descending: false,
        page: 1,
        rowsPerPage: 5,
        totalItems: 0
      },
      timeout: 4000,
      search: '',
      nomeProjeto: '',
      canva: {
        idCanvas: '',
        nomeProjeto: '',
        autor: '',
        dataCriacaoProjeto: Date,
        idUsuario: '',
        parceirosChave: '',
        atividadesChave: '',
        recursosChave: '',
        propostaValor: '',
        relacoesClientes: '',
        canaisVenda: '',
        segmentosMercado: '',
        estruturaCustos: '',
        fontesRenda: '',
        compartilharCanvas: true
      },
      headers: [
        { text: 'Projeto', align: 'left', value: 'nomeProjeto' },
        { text: 'Autor', align: 'center', value: 'autor' },
        { text: 'Data de Criação', align: 'center', value: 'dataCriacaoProjeto', sortable: false },
        { text: 'Detalhar', align: 'center', value: 'view', sortable: false }
      ]
    }
  },
  computed: {
    ...mapState({
      canvas: state => state.canvas.all.items
    }),
    ...mapState({
      account: state => state.account
    }),
    ...mapState({
      editCanvas: state => state.editCanvas.canvasEdit
    }),
    canvasCompartilhados () {
      if (this.canvas !== undefined) {
        return this.canvas.filter((q) => {
          return (q.compartilharCanvas !== false)
        })
      }
    },
    pages () {
      try {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.pagination.totalItems = this.canvas.length
        if (this.pagination.totalItems !== undefined) {
          if (this.pagination.rowsPerPage == null || this.pagination.totalItems == null) {
            return 0
          }
          return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
        }
      } catch (e) {
      }
    }
  },
  created () {
    this.getAllCanvas()
    moment.locale('pt')
  },
  mounted () {
    this.callFunction()
  },
  methods: {
    moment,
    ...mapActions('canvas', {
      getAllCanvas: 'getAll'
    }),
    ...mapActions('editCanvas', {
      getCanvasViewPublicoSemUsuario: 'getCanvasViewPublicoSemUsuario'
    }),
    callFunction: function () {
      var v = this
      setTimeout(function () {
        v.stopLoading = false
      }, 3000)
    }
  }
}
</script>
<style scoped>
h5.text-center{
  font-family: 'Poppins', sans-serif !important;
}
h4.text-center{
  font-family: 'Poppins', sans-serif !important;
}
</style>
