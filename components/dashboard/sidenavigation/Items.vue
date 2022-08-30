<template>
  <div class="h-screen overflow-y-auto scrollbar-width-thin">
    <sidenav-items-section name="Admin">
      <sidenav-item title="Home Page" to="/">
        <home-icon />
      </sidenav-item>
      <sidenav-item title="Server Configurations" to="/admin/server-config">
        <server-icon />
      </sidenav-item>
    </sidenav-items-section>

    <sidenav-items-section name="Endpoint Queries">
      <sidenav-item title="Systems" to="/get/systems">
        <documentation-icon />
      </sidenav-item>
      <sidenav-item title="System Roles" to="/get/system-roles">
        <documentation-icon  />
      </sidenav-item>
      <sidenav-item title="Controls" to="/get/controls">
        <documentation-icon  />
      </sidenav-item>
      <sidenav-item title="Test Results" to="/get/test-results">
        <documentation-icon  />
      </sidenav-item>
      <sidenav-item title="POA&Ms" to="/get/poams">
        <documentation-icon  />
      </sidenav-item>
      <sidenav-item title="Milestones" to="/get/milestones">
        <documentation-icon />
      </sidenav-item>
      <sidenav-item title="Artifacs" to="/get/artifacts">
        <documentation-icon />
      </sidenav-item>
      <sidenav-item title="PAC" to="/get/pac">
        <documentation-icon />
      </sidenav-item>
      <sidenav-item title="CAC" to="/get/cac">
        <documentation-icon />
      </sidenav-item>
      <sidenav-item title="CCMC" to="/get/ccmc-assessments">
        <documentation-icon />
      </sidenav-item>
      <sidenav-item title="Workflow Definitions" to="/get/workflow-definitions">
        <documentation-icon />
      </sidenav-item>
      <sidenav-item title="Workflow Instances" to="/get/milestones-instances">
        <documentation-icon />
      </sidenav-item>                              
    </sidenav-items-section>
  </div>
</template>

<script>
  import SidenavItem from './Item.vue';
  import SidenavItemsSection from './Section.vue';

  /* ICONS */
  import HomeIcon from './icons/Home.vue';
  import ServerIcon from './icons/Server.vue';
  import DocumentationIcon from './icons/Documentation.vue';

  export default {
    name: 'SidenavItems',
    components: {
      HomeIcon,
      ServerIcon,
      SidenavItem,
      DocumentationIcon,
      SidenavItemsSection,
    },
  };
</script>

<style>
.scrollbar-width-thin {
  scrollbar-width: thin;
}
</style>
