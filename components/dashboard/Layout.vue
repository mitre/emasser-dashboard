<template>
  <dashboard-provider>
    <div
      class="bg-mac bg-center bg-cover h-screen overflow-hidden w-full lg:p-4"
    >
      <div class="content h-screen overflow-hidden relative lg:rounded-2xl">
        <div class="flex items-start">
          <Overlay />
          <side-navigation mobile-position="right" />
          <div class="flex flex-col h-screen pl-0 w-full lg:space-y-4 lg:w-99">
            <top-navigation />
            <main class="main h-screen pb-36 pt-4 px-2 md:pb-8 md:px-4 lg:px-6">
              <slot />
            </main>
          </div>
        </div>
      </div>
    </div>
  </dashboard-provider>
</template>

<script>
import Overlay from './provider/Overlay.vue'
// import TopNavigation from './topnavigation/Index.vue'
import SideNavigation from './sidenavigation/Index.vue'
import DashboardProvider from './provider/Provider.vue'
// import TopHeader from './topheader/Index.vue'

export default {
  name: 'DashboardLayout',
  // components: { DashboardProvider, Overlay, SideNavigation, TopNavigation },
  // components: { DashboardProvider, Overlay, SideNavigation, TopHeader },
  components: { DashboardProvider, Overlay, SideNavigation },
}
</script>

<style scoped>
  .content {
    background-color: rgba(16 18 27 / 40%);
    backdrop-filter: blur(24px);
  }

  .main {
    color: #f9fafb;
    background-color: rgba(16 18 27 / 40%);
    overflow: auto;
  }

  .main::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }

  .main::-webkit-scrollbar-thumb {
    background: rgb(1 2 3 / 40%);
    border-radius: 10px;
  }
</style>
