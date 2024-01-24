<template>
  <ol-map
      id="map"
      :loadTilesWhileAnimating="true"
      :loadTilesWhileInteracting="true"
  >
    <ol-view
        ref="view"
        :center="center"
        :rotation="rotation"
        :zoom="zoom"
        :projection="projection"
    />

    <ol-tile-layer>
      <ol-source-osm/>
    </ol-tile-layer>
  </ol-map>
</template>

<script setup>
import {ref} from "vue";
import {fromLonLat} from "ol/proj";

const center = ref(fromLonLat([21.0122, 52.2297]));
const projection = ref("EPSG:3857");
const zoom = ref(7);
const rotation = ref(0);
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
}


#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>
