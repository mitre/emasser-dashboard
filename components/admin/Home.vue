<template>
  <div>
   <div
      class="rounded-2xl py-6 px-20"
      :style="{
        backgroundImage: `linear-gradient(45deg, DarkCyan, DeepSkyBlue)`,
      }"
    >
      <div>
        <h1 class="font-medium text-center text-4xl">eMASS REST API Dashboard</h1>
        <h3 class="font-bold text-right text-lg">{{ version }}</h3>
      </div>
    </div>
    
    <div
      class="font-normal rounded-2xl mt-5"
      style="background-color: rgb(146 151 179 / 13%)"
    >
      <section
        class="md:px-8 py-2 pb-6 rounded-2xl"
        style="background-color: rgb(146 151 179 / 13%)"
      >
        <p class="mt-3">
          The Enterprise Mission Assurance Support Service (eMASS) Representational State Transfer (REST) Application 
          Programming Interface (API) enables users to perform assessments and complete actions associated with
          system records. This document will provide an outline of all eMASS objects and their associated endpoints
          to include business rules that pertain to each.
        </p>
      </section>
    </div>
    <div
      class="font-normal rounded-2xl mt-5"
      style="background-color: rgb(146 151 179 / 13%)"
    >    
      <section
        class="md:px-8 py-2 pb-6 rounded-2xl"
        style="background-color: rgb(146 151 179 / 13%)"
      >
        <p class="mt-5">
          The eMASS REST API Dashboard provides the ability to query (perform an HTTPS GET method) eMASS instances
          that are properly configurated and authenticated. The Dashboard provides standard and pre-configured widgets
          to query the server instances. Future widgets can be configured to query and combine return result sets as needed.
        </p>
        <p class="pt-5">
          <strong></strong>To use the dashboard, follow this steps :</strong>
          </p>
        <ul class="pl-6 mt-4 list-disc">
          <li>Configure the eMASS server instance (AKA the endpoint)</li>
          <li>Select the appropriate option (endpoint ) to open the widget panel</li>
          <li>Click on the appropriate widget to query the eMASS instance</li>
        </ul>
      </section>        
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Home',
    props: {
      title: {
        type: String,
        default: '',
      },
      version: {
        type: String,
        default: 'v3.3',
      }
    },
  };
</script>