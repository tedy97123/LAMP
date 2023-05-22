<template>
  <q-layout>
    <q-header class="text-light bg-blue">
      <q-toolbar>
        <q-toolbar-title> TacoTime </q-toolbar-title>
        <q-btn flat round dense icon="login" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated>
      <q-tabs dense horizontal class="text-light bg-red">
        <q-tab name="/map" label="Map" icon="explore" />
        <q-tab name="/route" label="Routes" icon="directions" />
        <q-tab name="/auth" label="Auth" icon="explore" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup></script>
