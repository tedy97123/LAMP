<template>
  <q-page id="myDetailsPage">
    <q-toolbar class="transparent text-black">
      <q-btn flat round dense icon="menu" />
      <q-toolbar-title> Update Your Detauls </q-toolbar-title>
      <q-btn to="/route/saved-route" flat round dense icon="favorites" />
    </q-toolbar>

    <q-scroll-area hide-scroll class="form-style">
      <div class="text-h6 text-center q-pt-md">
        <q-img src="taco.png" height="60px" width="60px"> </q-img>
        <div>Taco Map</div>
        <div class="q-pa-md q-gutter-md">
          <div class="text-center">Update your Account Details!</div>
          <div class="text-left">
            First Name
            <q-input filled outlined stacked-label label="First Name">
              <template v-slot:append> </template>
            </q-input>
          </div>
          <div class="text-left">
            Last Name
            <q-input filled outlined stacked-label label="Last Name">
              <template v-slot:append> </template>
            </q-input>
          </div>
          <div class="text-left">
            Email
            <q-input filled outlined stacked-label label="Email">
              <template v-slot:append> </template>
            </q-input>
          </div>
          <div class="text-left">
            Password
            <q-input filled outlined stacked-label label="Password">
              <template v-slot:append> </template>
            </q-input>
          </div>
          <div class="text-left">
            About Me
            <div class="q-pa-md">
              <q-input
                v-model="text"
                filled
                style="max-width: 800px"
                type="textarea"
                class="xl"
              />
            </div>
          </div>
          <div>
            <q-btn
              size="lg"
              class="full-width"
              color="black"
              label="Update Details"
            />
          </div>
        </div>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script></script>

<style lang="scss">
#myDetailsPage {
  .form-style {
    margin: 0 auto;
    height: calc(100vh - 100px);
    max-width: 500px;
  }
}
</style>
