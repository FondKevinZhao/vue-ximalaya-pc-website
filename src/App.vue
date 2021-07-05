<template>
  <div id="app">
    <template v-if="!$route.meta.keepLive">
    <Header />
    </template>
    <router-view />
    <template v-if="!$route.meta.keepLive">
      <MusicPlayer />
      <Footer />
    </template>
    <template v-if="!$route.meta.keepAlive">
      <ToTop/>
    </template>
  </div>
</template>
<script>
import Home from './views/Home'
import ToTop from './components/ToTop'
export default {
  name: 'App',
  components: {
    Home,
    ToTop
  }
}
</script>

<style lang="stylus" scoped>
  
</style>
