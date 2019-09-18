<template>
  <v-navigation-drawer
    id="app-drawer"
    v-model="inputValue"
    app
    floating
    persistent
    mobile-break-point="991"
    width="260"
    style="background: background-color: #ffffff;
    background: linear-gradient(to right, #7202bb 2%, #3264f5 82%);, font-color: white"
  >
    <v-layout
      class="fill-height"
      tag="v-list"
      column
    >
      <template>
        <div class="text-center">
          <v-avatar
            size="70"
            style="margin: 15px"
          >
            <img :src="logo">
          </v-avatar>
        </div>
      </template>
      <v-list
        dence
        nav
      >
        <v-list
          class="subtitle-1"
          style="text-align:center"
        >
         Meu Canvas
        </v-list>
        <v-list-item-group color="purple lighten-5">
          <div
            v-for="(item, i) in links"
            :key="i"
          >
            <v-list-item
              :to="item.to"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"/>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  class="subtitle-2"
                  v-text="item.text"
                />
              </v-list-item-content>
            </v-list-item>
            <div v-show="item.divider == true">
              <v-divider/>
            </div>
          </div>
        </v-list-item-group>
      </v-list>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>

import { mapMutations, mapState } from 'vuex'

export default {
  data: () => ({
    perfil: '',
    logo: './img/idea.png',
    links: [
      {
        to: '/',
        icon: 'mdi-home-circle',
        text: 'Página Inicial',
        divider: true
      },
      {
        to: '/iniciarProjeto',
        icon: 'mdi-lightbulb-on-outline',
        text: 'Iniciar um projeto',
        divider: true
      },
      {
        to: '/meusProjetos',
        icon: 'mdi-puzzle',
        text: 'Meus Projetos',
        divider: true
      },
      {
        to: '/comoCriar',
        icon: 'mdi-help',
        text: 'Como criar o Canvas?',
        divider: true
      },
      {
        to: '/sobre',
        icon: 'mdi-human-greeting',
        text: 'Sobre nós'
      }
    ],
    responsive: false
  }),
  computed: {
    ...mapState({
      account: state => state.account
    }),
    ...mapState('app', ['color']),
    inputValue: {
      get () {
        return this.$store.state.app.drawer
      },
      set (val) {
        this.setDrawer(val)
      }
    },
    items () {
      return this.$t('Layout.View.items')
    }
  },
  created () {
    this.getUsuarioStorage()
    /*if (!this.usuario.perfilSuper) {
      this.validaPerfil()
    }*/
  },
  mounted () {
    this.onResponsiveInverted()
    window.addEventListener('resize', this.onResponsiveInverted)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResponsiveInverted)
  },
  methods: {
    ...mapMutations('app', ['setDrawer', 'toggleDrawer']),
    onResponsiveInverted () {
      if (window.innerWidth < 991) {
        this.responsive = true
      } else {
        this.responsive = false
      }
    },
    getUsuarioStorage () {
      let usuario = JSON.parse(localStorage.getItem('usuario'))
      this.usuario = usuario.value
    },
    remontaMenu (ids) {
      let menuAntigo = this.links
      this.links = []
      for (let i = 0; i < menuAntigo.length; i++) {
        if (this.verificaRecriaMenu(i, ids)) {
          this.links.push(menuAntigo[i])
        }
      }
    },
    verificaRecriaMenu (item, ids) {
      for (let i = 0; i < ids.length; i++) {
        if (item === ids[i]) {
          return false
        }
      }
      return true
    }
  }
}
</script>
