<template>
  <div id="app">
    <router-view />
    <!--    注意这里的subapp-container-1要与上面main.js中配置的container属性值一致-->
    <div id="subapp-container-1" />
    <!--     与subapp-container-1同理-->
    <div id="subapp-container-2" />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>