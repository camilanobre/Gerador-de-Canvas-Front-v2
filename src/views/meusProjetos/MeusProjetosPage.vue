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
          title="Projetos"
        >
          <v-btn
            style="background-image:linear-gradient(to right, #9b62c0, #8a66c3, #796ac5, #666dc5, #526fc4);"
            to="/iniciarProjeto"
          >
            <v-icon left>mdi-plus-circle</v-icon>
            Novo projeto
          </v-btn>
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
            <template v-slot:item.edit="{ item }">
              <v-btn
                color="info"
                @click="getCanvasEdit(item)"
              >
                <v-icon left>mdi-pencil-circle</v-icon>
                Editar
              </v-btn>
            </template>
            <template v-slot:item.delete="{ item }">
              <v-btn
                color="error"
                @click="openModalDelete(item.nomeProjeto, item.idCanvas)"
              >
                <v-icon left>mdi-delete-circle</v-icon>
                Excluir
              </v-btn>
            </template>
            <template v-slot:item.share="{ item }">
              <div class="text-center">
                <div v-if="item.compartilharCanvas == false">
                  <v-btn
                    text
                    icon
                    large
                    color="red darken-4"
                    @click="openModalCompartilhar(item)">
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                </div>
                <div v-if="item.compartilharCanvas == true">
                  <v-btn
                    text
                    icon
                    large
                    color="green accent-4"
                    @click="openModalCompartilhar(item)">
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                </div>
              </div>
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
                  Não há projetos cadastrados :(
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
      <v-dialog
        v-model="modalCompartilhar"
        persistente
        max-width="600">
        <v-card>
          <v-card-title
            style="background-image: linear-gradient(to right, #874dae, #8362be, #7f75cc, #7e87d8, #7f98e1);"
            primary-title
          >Compartilhar projeto  {{ nomeProjeto }}?
          </v-card-title>
          <v-container grid-list-md/>
          <v-card-actions>
            <v-spacer/>
            <v-btn
              color="blue darken-1"
              text
              large
              @click="canvasCompartilhado()">
              Confirmar
              <v-icon>
                mdi-check
              </v-icon>
            </v-btn>
            <v-btn
              color="red darken-1"
              text
              @click="modalCompartilhar = false">
              Cancelar
              <v-icon>
                mdi-close
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog
        v-model="modalDelete"
        persistent
        max-width="600"
      >
        <v-card>
          <v-card-title
            style="background-image: linear-gradient(to right, #874dae, #8362be, #7f75cc, #7e87d8, #7f98e1);"
            primary-title
          >
            O projeto será excluído!</v-card-title>
          <v-card-text style="font-size:17px !important"><br>
            Tem certeza que deseja excluir o projeto {{ nomeProjeto }}?
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn
              text
              color="blue darken-1"
              @click="deletarCanvas(idCanvas)"
            >
              Sim
              <v-icon>
                mdi-check
              </v-icon>
            </v-btn>
            <v-btn
              text
              color="red darken-1"
              @click="modalDelete = false"
            >
              Não
              <v-icon>
                mdi-close
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
      canvasTemp: '',
      nomeUsuario: '',
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
        compartilharCanvas: false
      },
      headers: [
        {
          text: 'Projeto',
          align: 'left',
          value: 'nomeProjeto'
        },
        { text: 'Editar', align: 'center', value: 'edit', sortable: false },
        { text: 'Excluir', align: 'center', value: 'delete', sortable: false },
        { text: 'Compartilhar', align: 'center', value: 'share', sortable: false },
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
    this.NomeDoUsuario()
    this.getUsuario(this.canva.idUsuario)
  },
  mounted () {
    this.callFunction()
  },
  methods: {
    ...mapActions('canvas', {
      getPorId: 'getPorId',
      update: 'update',
      delete: 'delete'
    }),
    ...mapActions('editCanvas', {
      getCanvasEdit: 'getCanvasEdit',
      getCanvasView: 'getCanvasView'
    }),
    NomeDoUsuario () {
      if (this.account.user !== null || this.account !== '' || this.account.user !== '') {
        this.account.user = JSON.parse(localStorage.getItem('usuario'))
        this.canva.idUsuario = this.account.user.value.idUsuario
        this.nomeUsuario = this.account.user.value.nome
        this.usuarioLogado = this.nomeUsuario
      }
    },
    getUsuario (idUsuario) {
      this.getPorId(idUsuario)
    },
    openModalDelete (nomeProjeto, idCanvas) {
      this.nomeProjeto = nomeProjeto
      this.idCanvas = idCanvas
      this.modalDelete = true
    },
    deletarCanvas (idCanvas) {
      this.delete(idCanvas)
      this.getPorId()
      this.modalDelete = false
    },
    openModalCompartilhar (cnv) {
      this.canvasTemp = cnv
      this.modalCompartilhar = true
    },
    canvasCompartilhado () {
      this.canvasTemp.compartilharCanvas = this.canva.compartilharCanvas
      this.canvasTemp.compartilharCanvas = true
      console.log('status do compartilhamento depois de aceitar => ' + (this.canva.compartilharCanvas))
      this.update(this.canvasTemp)
      this.modalCompartilhar = false
    },
    callFunction: function () {
      var v = this
      setTimeout(function () {
        v.stopLoading = false
      }, 3000)
    }
  }
}
</script>
