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
        <h2 class="text-center" >NOSSA EQUIPE </h2>
        <h5 class="text-center" >O segredo de um grande sucesso esta no trabalho de uma grande equipe.</h5>
        <v-row justify="space-around">
          <v-card
            class="d-flex flex-row mb-3"
            style="false"
            color="#FAFAFA">
            <v-container>
              <v-row justify="space-between">
                <v-col cols="auto">
                  <v-hover v-slot:default="{ hover }">
                    <v-avatar
                      height="220"
                      width="220">
                      <v-img
                        src="https://www.vetquality.com.br/wp-content/uploads/2017/01/pug_brincando.jpg"
                      >
                        <v-expand-transition>
                          <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out indigo darken-4 v-card--reveal .headline white--text"
                            style="height: 100%;"
                          >
                            Desenvolvedora front-end <br>
                            Aluna do 8º período de Sistemas de Informação-UNIPAM
                          </div>
                        </v-expand-transition>
                      </v-img>
                    </v-avatar>
                  </v-hover>
                  <v-card-text
                    class="text-center"
                    style="font-size: 18px !important">
                    <hr>
                    <div>Camila Nobre Siqueira</div>
                  </v-card-text>
                </v-col>
                <v-col
                  cols="auto"
                  class="text-center pl-0"
                >
                  <v-row
                    class="flex-column ma-0 fill-height"
                    justify="center"
                  >
                    <v-col class="px-0">
                      <v-btn
                        icon
                        href="https://www.linkedin.com/in/camila-nobre-siqueira-01109b117/"
                        target="_blank">
                        <v-icon color="black">mdi-linkedin-box</v-icon>
                      </v-btn>
                    </v-col>

                    <v-col class="px-0">
                      <v-btn icon>
                        <v-icon color="black">mdi-facebook-box</v-icon>
                      </v-btn>
                    </v-col>

                    <v-col class="px-0">
                      <v-btn
                        icon
                        href="https://github.com/camilanobre"
                        target="_blank">
                        <v-icon color="black">mdi-github-box</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
          <v-card class="d-flex flex-row mb-3">
            <v-container>
              <v-row justify="space-between">
                <v-col cols="auto">
                  <v-hover v-slot:default="{ hover }">
                    <v-avatar
                      height="220"
                      width="220">
                      <v-img
                        src="http://midias.gazetaonline.com.br/_midias/jpg/2017/02/23/estopinha4-4948965.jpg"
                      >
                        <v-expand-transition>
                          <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out indigo darken-4 v-card--reveal .headline white--text"
                            style="height: 100%;"
                          >
                            Desenvolvedora front-end <br>
                            Aluna do 8º período de Sistemas de Informação-UNIPAM
                          </div>
                        </v-expand-transition>
                      </v-img>
                    </v-avatar>
                  </v-hover>
                  <v-card-text
                    class="text-center"
                    style="font-size: 18px !important">
                    <hr >
                    <div>Lisa Bomtempo</div>
                  </v-card-text>
                </v-col>
                <v-col
                  cols="auto"
                  class="text-center pl-0"
                >
                  <v-row
                    class="flex-column ma-0 fill-height"
                    justify="center"
                  >
                    <v-col class="px-0">
                      <v-btn icon>
                        <v-icon color="black">mdi-linkedin-box</v-icon>
                      </v-btn>
                    </v-col>

                    <v-col class="px-0">
                      <v-btn icon>
                        <v-icon color="black">mdi-facebook-box</v-icon>
                      </v-btn>
                    </v-col>

                    <v-col class="px-0">
                      <v-btn
                        icon
                        href="https://github.com/lisabontempo"
                        target="_blank"
                      >
                        <v-icon color="black">mdi-github-box</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
          <v-card class="d-flex flex-row mb-8">
            <v-container>
              <v-row justify="space-between">
                <v-col cols="auto">
                  <v-hover v-slot:default="{ hover }">
                    <v-avatar
                      height="220"
                      width="220">
                      <v-img
                        src="https://static1.purebreak.com.br/articles/9/88/18/9/@/333691-se-os-cachorros-pudessem-votar-em-quem-diapo-2.jpg"
                      >
                        <v-expand-transition>
                          <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out indigo darken-4 v-card--reveal .headline white--text"
                            style="height: 100%;"
                          >
                            Desenvolvedor back-end <br>
                            Aluno do 8º período de Sistemas de Informação-UNIPAM
                          </div>
                        </v-expand-transition>
                      </v-img>
                    </v-avatar>
                  </v-hover>
                  <v-card-text
                    class="text-center"
                    style="font-size: 18px !important">
                    <hr>
                    <div>Bruno Alves Caixeta</div>
                  </v-card-text>
                </v-col>
                <v-col
                  cols="auto"
                  class="text-center pl-0"
                >
                  <v-row
                    class="flex-column ma-0 fill-height"
                    justify="center"
                  >
                    <v-col class="px-0">
                      <v-btn
                        icon
                        href="https://www.linkedin.com/in/bruno-alves-caixeta-0b609b117/"
                        target="_blank">
                        <v-icon color="black">mdi-linkedin-box</v-icon>
                      </v-btn>
                    </v-col>

                    <v-col class="px-0">
                      <v-btn icon>
                        <v-icon color="black">mdi-facebook-box</v-icon>
                      </v-btn>
                    </v-col>

                    <v-col class="px-0">
                      <v-btn icon>
                        <v-icon color="black">mdi-github-box</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-row><br>

        <v-row justify="space-around">
          <v-card class="d-flex flex-row mb-3">
            <v-container>
              <v-row justify="space-between">
                <v-col cols="auto">
                  <v-hover v-slot:default="{ hover }">
                    <v-avatar
                      height="220"
                      width="220">
                      <v-img
                        src="http://petiko-blog-novo.s3.amazonaws.com/wp-content/uploads/2014/11/Halloween_animais_40.jpg"
                      >
                        <v-expand-transition>
                          <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out indigo darken-4 v-card--reveal .headline white--text"
                            style="height: 100%;"
                          >
                            Desenvolvedor back-end <br>
                            Aluno do 8º período de Sistemas de Informação-UNIPAM
                          </div>
                        </v-expand-transition>
                      </v-img>
                    </v-avatar>
                  </v-hover>
                  <v-card-text
                    class="text-center"
                    style="font-size: 18px !important">
                    <hr>
                    <div>Warley Andrade</div>
                  </v-card-text>
                </v-col>
                <v-col
                  cols="auto"
                  class="text-center pl-0"
                >
                  <v-row
                    class="flex-column ma-0 fill-height"
                    justify="center"
                  >
                    <v-col class="px-0">
                      <v-btn icon>
                        <v-icon color="black">mdi-linkedin-box</v-icon>
                      </v-btn>
                    </v-col>

                    <v-col class="px-0">
                      <v-btn icon>
                        <v-icon color="black">mdi-facebook-box</v-icon>
                      </v-btn>
                    </v-col>

                    <v-col class="px-0">
                      <v-btn icon>
                        <v-icon color="black">mdi-github-box</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
          <v-card class="d-flex flex-row mb-3">
            <v-container>
              <v-row justify="space-between">
                <v-col cols="auto">
                  <v-hover v-slot:default="{ hover }">
                    <v-avatar
                      height="220"
                      width="220">
                      <v-img
                        src="https://www.incorposul.com.br/wp-content/uploads/2019/08/cropped-cachorros-em-apartamentos-01-1024x576.jpg"
                      >
                        <v-expand-transition>
                          <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out indigo darken-4 v-card--reveal .headline white--text"
                            style="height: 100%;"
                          >
                            Desenvolvedor back-end <br>
                            Aluno do 8º período de Sistemas de Informação-UNIPAM
                          </div>
                        </v-expand-transition>
                      </v-img>
                    </v-avatar>
                  </v-hover>
                  <v-card-text
                    class="text-center"
                    style="font-size: 18px !important">
                    <hr>
                    <div>Igor Torquato</div>
                  </v-card-text>
                </v-col>
                <v-col
                  cols="auto"
                  class="text-center pl-0"
                >
                  <v-row
                    class="flex-column ma-0 fill-height"
                    justify="center"
                  >
                    <v-col class="px-0">
                      <v-btn
                        icon
                        href="https://www.linkedin.com/in/igor-torquato-662546116/"
                        target="_blank">
                        <v-icon
                          color="black">mdi-linkedin-box</v-icon>
                      </v-btn>
                    </v-col>

                    <v-col class="px-0">
                      <v-btn icon>
                        <v-icon color="black">mdi-facebook-box</v-icon>
                      </v-btn>
                    </v-col>

                    <v-col class="px-0">
                      <v-btn icon>
                        <v-icon color="black">mdi-github-box</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
          <v-card class="d-flex flex-row mb-8">
            <v-container>
              <v-row justify="space-between">
                <v-col cols="auto">
                  <v-hover v-slot:default="{ hover }">
                    <v-avatar
                      height="220"
                      width="220">
                      <v-img
                        src="https://i.pinimg.com/originals/df/b7/e4/dfb7e43dda53817f0cfdf9ef01ee105e.jpg"
                      >
                        <v-expand-transition>
                          <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out indigo darken-4 v-card--reveal .headline white--text"
                            style="height: 100%;"
                          >
                            Desenvolvedor back-end <br>
                            Aluno do 8º período de Sistemas de Informação-UNIPAM
                          </div>
                        </v-expand-transition>
                      </v-img>
                    </v-avatar>
                  </v-hover>
                  <v-card-text
                    class="text-center"
                    style="font-size: 18px !important">
                    <hr>
                    <div>Yuri Rodrigues</div>
                  </v-card-text>
                </v-col>
                <v-col
                  cols="auto"
                  class="text-center pl-0"
                >
                  <v-row
                    class="flex-column ma-0 fill-height"
                    justify="center"
                  >
                    <v-col class="px-0">
                      <v-btn icon>
                        <v-icon color="black">mdi-linkedin-box</v-icon>
                      </v-btn>
                    </v-col>

                    <v-col class="px-0">
                      <v-btn icon>
                        <v-icon color="black">mdi-facebook-box</v-icon>
                      </v-btn>
                    </v-col>

                    <v-col class="px-0">
                      <v-btn icon>
                        <v-icon color="black">mdi-github-box</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>
