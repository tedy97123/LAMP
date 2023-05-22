<template>
  <q-page id="addRoute">
    <q-toolbar class="transparent text-black">
      <q-btn flat round dense icon="menu" />
      <q-toolbar-title> Add Route </q-toolbar-title>
      <q-btn to="/route/saved-route" flat round dense icon="favorites" />
    </q-toolbar>

    <q-scroll-area class="q-pa-md form-style">
      <div class="text-h6 q-pb-md">Save Your Favorite Route</div>
      <span class="text-body1 q-pd-md">Pick a name for this route</span>

      <q-input outlined stacked-label label="Name">
        <template v-slot:append>
          <q-icon name="close" />
        </template>
      </q-input>

      <div class="text-body q-pt-md">Save Your Favorite Route</div>

      <q-input class="q-pt-md" outlined stacked-label label="From">
        <template v-slot:append>
          <q-icon name="close" />
        </template>
      </q-input>

      <q-input class="q-pt-md" outlined stacked-label label="To">
        <template v-slot:append>
          <q-icon name="close" />
        </template>
      </q-input>

      <div class="q-pt-md">
        <q-btn size="lg" class="full-width" color="black" label="search" />
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script setup></script>

<style lang="scss">
#addRoute {
  .form-style {
    margin: 0 auto;
    height: calc(100vh - 100px);
    max-width: 500px;
  }
}
</style>
