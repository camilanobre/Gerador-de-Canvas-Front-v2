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
        lg12 >
        <material-card
          color="deep-purple"
          title="Canvas Públicos"
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
            :items="canvas"
            :search="search"
            :options.sync="pagination"
            :items-per-page-text="textoPaginacao"
            hide-default-footer
            class="elevation-1"
          >
            <template v-slot:item.autor="{ item }">
              {{ nomeUsuario }}
            </template>
            <template v-slot:item.data="{ item }">
              {{ nomeUsuario }}
            </template>
            <template v-slot:item.view="{ item }">
              <div class="text-center">
                <v-btn
                  text
                  icon
                  large
                  color="black"
                  @click="getCanvasView(item)">
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
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      textoPaginacao: 'Exibir',
      stopLoading: true,
      modalEdit: false,
      modalDelete: false,
      pagination: {
        descending: false,
        page: 1,
        rowsPerPage: 5,
        totalItems: 0
      },
      timeout: 4000,
      search: '',
      modalCompartilhar: false,
      nomeUsuario: '',
      nomeProjeto: '',
      canva: {
        idCanvas: '',
        nomeProjeto: '',
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
        compartilharCanvas: false
      },
      headers: [
        {
          text: 'Projeto',
          align: 'left',
          value: 'nomeProjeto'
        },
        { text: 'Autor', align: 'center', value: 'autor', sortable: false },
        { text: 'Data de Criação', align: 'center', value: 'data', sortable: false },
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
  },
  mounted () {
    this.callFunction()
  },
  methods: {
    ...mapActions('canvas', {
      getAllCanvas: 'getAll',
      delete: 'delete'
    }),
    ...mapActions('editCanvas', {
      getCanvasEdit: 'getCanvasEdit',
      getCanvasView: 'getCanvasView'
    }),
    openModalDelete (nomeProjeto, idCanvas) {
      this.nomeProjeto = nomeProjeto
      this.idCanvas = idCanvas
      this.modalDelete = true
    },
    deletarTitular (idCanvas) {
      this.delete(idCanvas)
      this.getAllCanvas()
      this.modalDelete = false
    },
    openModalCompartilhar () {
      this.modalCompartilhar = true
    },
    canvasCompartilhado () {
      this.canvas.compartilharCanvas = true
      console.log('status do compartilhamento depois de aceitar => ' + (this.canvas.compartilharCanvas))
      this.modalCompartilhar = false
    },
    callFunction: function () {
      var v = this
      setTimeout(function () {
        v.stopLoading = false
      }, 3000)
    },
    NomeDoUsuario () {
      if (this.account !== null || this.account.user !== null || this.account !== '' || this.account.user !== '') {
        this.account.user = JSON.parse(localStorage.getItem('usuario'))
        this.nomeUsuario = this.account.user.value.nome
      }
    }
  }
}
</script>
