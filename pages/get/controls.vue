<template>
  <div class="vld-parent">
    <loading :active.sync="isLoading" 
    :can-cancel="true" 
    :is-full-page="fullPage"></loading>
    <!-- Queries -->
    <div
      class="font-normal rounded-2xl mt-5 p-4"
      style="background-color: rgb(146 151 179 / 13%)"
      >
      <div  class="grid grid-cols-2 grid-rows-2 gap-4 grid-flow-col">
        <!-- Get Controls -->
        <div
          class="p-4 rounded-3xl flex mt-4 mb-3 px-3"
          :style="{ backgroundColor: '#fee4cb', foregroundColor: '#00000'}"
        >
          <div class="bg-green-500 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md">Query</div>
          <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-500 bg-green-200 rounded-r-md truncate">
            <p class="text-black text-base font-bold opacity-70 p-3">Get Controls</p>
            <div class="flex-shrink-0 pr-2">
              <button type="button" class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                @click='getControls()'
              >
                <QueryIcon class="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <!-- Get Controls BY Acronym -->
        <div
          class="p-4 rounded-3xl flex mt-4 mb-3 px-3"
          :style="{ backgroundColor: '#fee4cb', foregroundColor: '#00000'}"
        >
          <div class="bg-green-500 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md">Query</div>
          <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-500 bg-green-200 rounded-r-md truncate">
            <p class="text-black text-base font-bold opacity-70 p-3">Get Controls By Acronym</p>
            <div class="flex-shrink-0 pr-2">
              <button type="button" class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                @click='getControlsByAcronym()'
              >
                <QueryIcon class="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>        
        <!-- Get Controls by Designation-->
        <div
          class="p-4 rounded-3xl flex mt-4 mb-3 px-3"
          :style="{ backgroundColor: '#fee4cb', foregroundColor: '#00000'}"
        >
          <div class="bg-blue-500 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md">FILTERED</div>
          <div class="flex-1 flex items-center justify-between border-t border-r border-b border-gray-500 bg-blue-200 rounded-r-md truncate">
            <p class="text-black text-base font-bold opacity-70 p-3">Get Controls By Designation</p>
            <div class="flex-shrink-0 pr-2">
              <button type="button" class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <QueryIcon class="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- OUtput Content -->
    <div
      class='font-normal rounded-2xl mt-4 md:px-8 py-2 pb-6 h-96'
      style='background-color: rgb(146 151 179 / 13%)'
    >
      <!-- <section
        class='md:px-8 py-2 pb-6 rounded-2xl h-64'
        style='background-color: rgb(146 151 179 / 13%)'
      > -->
        <div>
          <h2 class='text-2xl font-medium py-2'>Query Results</h2>
        </div>
        <div class="overflow-scroll flex flex-col flex-wrap mt-2 pl-2 h-full w-5/4">
          <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-300">
                  <thead class="bg-gray-50">
                    <tr>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">System Id</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Name</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Acronym</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">CCIS</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Is Inherited</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Compliance Status</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Responsible Entities</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Implementation Status</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Ver Release</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">System Type</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Is NSSr</th>
                      <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Is Type Auth.</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-200 bg-white">
                    <tr v-for="system in query_results" :key="system.systemId">
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">{{ system.systemId }}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ system.name }}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ system.acronym }}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ system.ccis }}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ system.isInherited }}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ system.complianceStatus }}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ system.responsibleEntities }}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ system.implementationStatus }}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ system.versionReleaseNo }}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ system.systemType }}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ system.isNSS }}</td>
                      <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ system.isTypeAuthorization }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div> 
      <!-- </section>   -->
    </div>      

</div>
</template>

<script>
  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/vue-loading.css';
  import { ControlsApi } from '@mitre/emass_client'
  import QueryIcon from '../../components//dashboard//sidenavigation/icons/Query.vue'
  import { ApiConnection } from '../../api-connection/apiConnection'

  export default {
    components: {
      QueryIcon,
      Loading,
    },
    setup() {

    },
    data() {
      return {
        // emass_url: (this.$cookiz.get('cookie-name').url === 'undefined')?'':this.$cookiz.get('cookie-name'),
        emass_url: 'https://pilot-comm.emasstest.boozallencsn.com',
        emass_apikey: 'c1997ce5-57f3-479e-b21e-593657c60552',
        query_results: [{}],
        isLoading: false,
        fullPage: false
      };
    },

    head: {
      title: "Controls"
    },
    methods: {
      async getControls (e) {
        this.isLoading = true;
        this.query_results.length = 0;        
        const apiCxn = new ApiConnection(this.emass_url, 443, this.emass_apikey, false, false);
        const getControls = new ControlsApi(apiCxn.configuration, apiCxn.basePath, apiCxn.axiosInstances);
    
        // Order is important here
        // Parameters: systemId, acronym
        // await getSystems.getSystems(true,'','','','',true,true,true).then((data) => {
        await getControls.getSystemControls(33, '').then((data) => {          
          data.data.data.forEach(element => {
             this.query_results.push(element)
          }); 
          // console.log('query results: ' + JSON.stringify(this.query_results))
        }).catch((error) => console.error(error))
        this.isLoading = false;
      }
    }
  }
</script>