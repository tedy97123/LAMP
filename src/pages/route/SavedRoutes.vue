<template>
  <q-page id="savedRoutes">
    <q-toolbar class="bg-teal text-black">
      <q-btn flat round dense icon="menu" />
      <q-toolbar-title> Saved Routes </q-toolbar-title>
      <q-btn flat round dense icon="add" size="20px" />
    </q-toolbar>

    <div>
      <div class="text-h6 q-mx-sm">Select one of your favorite Routes</div>
    </div>

    <div class="text-center q-pt-lg">
      <q-btn flat round dense icon="add_circle_outline" size="33px" />
      <div class="text-h6 q-mx-sm">Add some routes</div>
      <div class="q-pa-md info">
        This is where you can add your most common used journeys
      </div>
    </div>

    <q-scroll-area class="list">
      <q-list>
        <q-item>
          <q-item-section top avatar>
            <q-avatar color="green" text-color="white" icon="directions" />
          </q-item-section>

          <q-item-section>
            <q-item-label>A cool new road</q-item-label>
            <q-item-label caption>
              <div class="q-px-sm"><b>From</b>:This is the from section</div>
              <div class="q-px-sm"><b>To</b>:This is the to section</div>
              <div class="q-px-sm"><b>Search Radius:</b>3</div>
            </q-item-label>
          </q-item-section>

          <q-item-section side bottom>
            <q-btn class="q-ma-sm" color="green" label="Go To Map" size="sm" />
            <q-btn
              class="q-ma-sm"
              color="red"
              label="Delete this route"
              size="sm"
            />
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script setup></script>

<style lang="scss">
#savedRoutes {
  .section-title {
    padding: 12px 10px 8px 10px;
    max-width: 500px;
    margin: 0 auto;
  }
  .info: {
    font-size: 16px;
  }
  .list {
    margin: 0 auto;
    height: calc(100vh - 250px);
    max-width: 500px;
  }
}
</style>
