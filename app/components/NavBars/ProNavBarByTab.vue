<template>
  <v-container>
    <v-app-bar color="purple-darken-2" flat border="b" class="ps-4">
      <!-- color=primary/purple-darken-2 -->
      <template v-slot:prepend>
        <NuxtLink to="/" class="mt-2 text-decoration-none">
          <img width="60" height="45" src="~/assets/logo_new.png" />
        </NuxtLink>
      </template>

      <v-app-bar-title
        class="text-wheet ml-1 mt-0 cursor-pointer"
        style="
          font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
          font-size: 35px;
        "
        @click="home"
        >AssisThem</v-app-bar-title
      >
      <!-- ********************* Mobile Devices Tab *********************** -->
      <template v-if="$vuetify.display.mdAndDown" #append>
        <div class="hidden-md-and-up mr-3">
          <v-app-bar-nav-icon
            variant="text"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </div>
      </template>

      <!-- **************************************Large Devices********************************** -->
      <template v-if="$vuetify.display.mdAndUp" #append>
        <div class="d-flex hidden-md-and-down">
          <v-btn
            :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            variant="text"
            @click="toggleTheme()"
          />

          <v-menu
            open-on-hover
            v-for="(item, index) in items"
            :key="index"
            location="center"
          >
            <template v-slot:activator="{ props }">
              <NuxtLink :to="item.menus ? '' : item.url">
                <v-btn
                  color="white"
                  v-bind="props"
                  class="mt-1 font-weight-bold rounded-lg"
                  variant="text"
                >
                  {{item.title}}<v-icon
                    icon="mdi-chevron-down"
                    v-if="item.menus"
                    size="x-large"
                  ></v-icon>
                </v-btn>
              </NuxtLink>
            </template>
            <v-card
              class="rounded-lg my-14 bg-grey-darken-4 text-start"
              max-width="600"
              v-if="item.menus"
            >
              <v-row class="ga-0" no-gutters dense>
                <v-col
                  cols="12"
                  md="6"
                  v-for="(menu, i) in item.menus"
                  :key="i"
                >
                  <v-hover>
                    <template v-slot:default="{isHovering, props}">
                      <NuxtLink
                        :to="menu.url"
                        class="text-decoration-none text-white"
                      >
                        <v-card-item
                          v-bind="props"
                          :class="isHovering? 'opacity-60': ''"
                        >
                          <template v-slot:prepend>
                            <v-avatar
                              :color="isHovering? 'white' : 'blue-darken-2'"
                            >
                              <v-icon :icon="menu.src"></v-icon>
                            </v-avatar>
                          </template>
                          <v-card-subtitle
                            :class="isHovering? 'px-4 pb-0 mb-0 font-weight-bold' : 'px-4 pb-0 mb-0 font-weight-bold'"
                            >{{menu.title}}</v-card-subtitle
                          >
                          <v-card-text class="py-0 my-0 text-caption"
                            >{{menu.description}}</v-card-text
                          >
                        </v-card-item>
                      </NuxtLink>
                    </template>
                  </v-hover>
                </v-col>
              </v-row>
            </v-card>
          </v-menu>
        </div>
      </template>
    </v-app-bar>
    <!-- ************Navigation Drawer/Side Bar for uses small devices light-blue-darken-4/purple-darken-2 ****************** -->

    <v-navigation-drawer
      v-model="drawer"
      location="right"
      width="320"
      temporary
      class="bg-purple-darken-4 border"
      expand-on-hover
    >
      <v-list v-model:opened="open" density="compact">
        <div v-for="(item, i) in items">
          <v-list-group :value="item.name" v-if="item.menus">
            <template v-slot:activator="{ props }">
              <v-list-item v-bind="props" :title="item.title"> </v-list-item>
            </template>
            <v-list-item
              v-if="item.menus"
              v-for="(menu, index) in item.menus"
              :key="index"
              :prepend-icon="menu.src"
              :value="menu.name"
            >
            <template v-slot:prepend>
                  <v-icon size="x-small"></v-icon>
                </template>
              <NuxtLink :to="menu.url" class="text-decoration-none text-white">
                <v-list-item-subtitle class="text-white">{{ menu.title }}</v-list-item-subtitle>
              </NuxtLink>
              <v-divider></v-divider>
            </v-list-item>
          </v-list-group>
          <v-list-item  :key="item.id" :value="item.id" v-else>
            <NuxtLink :to="item.url" class="text-decoration-none text-white">
              <v-list-item-title
                >{{ item.title }}</v-list-item-title
              >
            </NuxtLink>
          </v-list-item>
          <v-divider></v-divider>
        </div>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script setup>
  import { NuxtLink } from '#components'
  import { ref, watch } from 'vue'
  import { useTheme } from 'vuetify'

  const drawer = ref(false)
  const group = ref(null)
  const tab = ref(null)
  const open = ref([])

  const theme = useTheme()
  const isDark = ref(false)

  watch(group, () => {
    drawer.value = false
  })

  const items = [
    {
      id: 1,
      name: 'homepage',
      title: 'Home',
      url: '/',
      description: '',
      src: 'mdi-account-outline',
      created_at: '',
      updated_at: '',
      created_by: '',
      updated_by: '',
    },
    {
      id: 2,
      name: 'our-sevices',
      title: 'Our Services',
      url: '/Services',
      description: '',
      src: 'mdi-account-outline',
      created_at: '',
      updated_at: '',
      created_by: '',
      updated_by: '',
    },
    
    {
      id: 3,
      name: 'portfolio',
      title: 'Portfolio',
      url: '/portfolio',
      description: '',
      src: 'mdi-account-outline',
      created_at: '',
      updated_at: '',
      created_by: '',
      updated_by: '',
    },
    {
      id: 4,
      name: 'about-us',
      title: 'About Us',
      url: '/about',
      description: '',
      src: 'mdi-account-outline',
      created_at: '',
      updated_at: '',
      created_by: '',
      updated_by: '',
    },
    {
      id: 5,
      name: 'contact',
      title: 'Contact',
      url: '/contact',
      description: '',
      src: 'mdi-account-outline',
      created_at: '',
      updated_at: '',
      created_by: '',
      updated_by: '',
    }
    
  ]

  function toggleTheme() {
    theme.global.name.value = isDark.value ? 'light' : 'dark'
    isDark.value = !isDark.value
  }
  function home() {
    useRouter().push('/')
  }
</script>
<style scoped></style>