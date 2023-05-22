<template>
  <q-page id="registrationPage">
    <q-toolbar class="transparent text-black">
      <q-btn flat round dense icon="menu" />
      <q-toolbar-title> Register </q-toolbar-title>
      <q-btn to="/route/saved-route" flat round dense icon="favorites" />
    </q-toolbar>

    <q-scroll-area class="form-style">
      <div class="text-h6 text-center q-pt-md">
        <q-img src="taco.png" height="60px" width="60px"> </q-img>
        <div>Taco Map</div>
        <div class="q-pa-md q-gutter-md">
          <div class="text-center">Register and get some extra features</div>
          <div class="text-left">
            First Name
            <q-input outlined stacked-label label="First Name">
              <template v-slot:append> </template>
            </q-input>
          </div>
          <div class="text-left">
            Last Name
            <q-input outlined stacked-label label="Last Name">
              <template v-slot:append> </template>
            </q-input>
          </div>
          <div class="text-left">
            Email
            <q-input outlined stacked-label label="Email">
              <template v-slot:append> </template>
            </q-input>
          </div>
          <div class="text-left">
            Password
            <q-input outlined stacked-label label="Password">
              <template v-slot:append> </template>
            </q-input>
          </div>
          <div class="text-left">
            Confirm Password
            <q-input outlined stacked-label label="Password">
              <template v-slot:append> </template>
            </q-input>
          </div>
          <div>
            <q-btn
              size="lg"
              class="full-width"
              color="black"
              label="Register"
            />
          </div>
        </div>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script></script>

<style lang="scss">
#registrationPage {
  .form-style {
    margin: 0 auto;
    height: calc(100vh - 100px);
    max-width: 500px;
  }
}
</style>
