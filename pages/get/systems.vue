
<template>
  <div>
    <div class='vld-parent'>
      <loading :active.sync='isLoading' 
        :can-cancel='true' 
        :is-full-page='fullPage'>
      </loading>

      <notifications group='alert'/>
      
      <!-- Queries -->
      <div
        class='font-normal rounded-2xl mt-5 p-4'
        style='background-color: rgb(146 151 179 / 13%)'
        >
        <div  class='grid grid-cols-3 grid-rows-2 gap-4 grid-flow-col'>
          <!-- Get System -->
          <div
            class='p-3 rounded-3xl flex mt-4 mb-3 px-3'
            :style="{ backgroundColor: '#fee4cb', foregroundColor: '#00000'}"
          >
            <div class='bg-green-500 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'>Query</div>
            <div class='flex-1 flex items-center justify-between border-t border-r border-b border-gray-500 bg-green-200 rounded-r-md truncate'>
              <p class='text-black text-base font-bold opacity-70 p-3'>Get System</p>
              <div class='flex-shrink-0 pr-2'>
                <button type='button' 
                  class='w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  @click='showGetSystemQuery()'
                >
                  <QueryIcon class='w-5 h-5' aria-hidden='true' />
                </button>
              </div>
            </div>
          </div>
          <!-- Get Systems -->
          <div
            class='p-4 rounded-3xl flex mt-4 mb-3 px-3'
            :style="{ backgroundColor: '#fee4cb', foregroundColor: '#00000'}"
          >
            <div class='bg-green-500 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'>Query</div>
            <div class='flex-1 flex items-center justify-between border-t border-r border-b border-gray-500 bg-green-200 rounded-r-md truncate'>
              <p class='text-black text-base font-bold opacity-70 p-3'>Get Systems</p>
              <div class='flex-shrink-0 pr-2'>
                <button type='button' class='w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  @click='getSystems()'
                >
                  <QueryIcon class='w-5 h-5' aria-hidden='true' />
                </button>
              </div>
            </div>
          </div>
          <!-- Get System by Type-->
          <div
            class='p-4 rounded-3xl flex mt-4 mb-3 px-3'
            :style="{ backgroundColor: '#fee4cb', foregroundColor: '#00000'}"
          >
            <div class='bg-blue-500 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'>FILTERED</div>
            <div class='flex-1 flex items-center justify-between border-t border-r border-b border-gray-500 bg-blue-200 rounded-r-md truncate'>
              <p class='text-black text-base font-bold opacity-70 p-3'>Get Systems By Type</p>
              <div class='flex-shrink-0 pr-2'>
                <button type='button' 
                  class='w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  @click='showGetSystemByTypeQuery()'
                >
                  <QueryIcon class='w-5 h-5' aria-hidden='true' />
                </button>
              </div>
            </div>
          </div>
          <!-- Get System by Org-->
          <div
            class='p-4 rounded-3xl flex mt-4 mb-3 px-3 '
            :style="{ backgroundColor: '#fee4cb', foregroundColor: '#00000'}"
          >
            <div class='bg-blue-500 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'>FILTERED</div>
            <div class='flex-1 flex items-center justify-between border-t border-r border-b border-gray-500 bg-blue-200 rounded-r-md truncate'>
              <p class='text-black text-base font-bold opacity-70 p-3'>Get Systems By Org</p>
              <div class='flex-shrink-0 pr-2'>
                <button type='button' 
                  class='w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  @click='showGetSystemByOrgQuery()'
                  >
                  <QueryIcon class='w-5 h-5' aria-hidden='true' />
                </button>
              </div>
            </div>
          </div>
          <!-- Get System by Owner-->
          <div
            class='p-4 rounded-3xl flex mt-4 mb-3 px-3'
            :style="{ backgroundColor: '#fee4cb', foregroundColor: '#00000'}"
          >
            <div class='bg-blue-500 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'>FILTERED</div>
            <div class='flex-1 flex items-center justify-between border-t border-r border-b border-gray-500 bg-blue-200 rounded-r-md truncate'>
              <p class='text-black text-base font-bold opacity-70 p-3'>Get Systems By Owner</p>
              <div class='flex-shrink-0 pr-2'>
                <button type='button' 
                  class='w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  @click='showGetSystemByOwnerQuery()'
                  >
                  <QueryIcon class='w-5 h-5' aria-hidden='true' />
                </button>
              </div>
            </div>
          </div>
          <!-- Get System by Name-->
          <div
            class='p-4 rounded-3xl flex mt-4 mb-3 px-3 '
            :style="{ backgroundColor: '#fee4cb', foregroundColor: '#00000'}"
          >
            <div class='bg-blue-500 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'>FILTERED</div>
            <div class='flex-1 flex items-center justify-between border-t border-r border-b border-gray-500 bg-blue-200 rounded-r-md truncate'>
              <p class='text-black text-base font-bold opacity-70 p-3'>Get Systems By Name</p>
              <div class='flex-shrink-0 pr-2'>
                <button type='button' 
                  class='w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  @click='showGetSystemByNameQuery()'
                  >
                  <QueryIcon class='w-5 h-5' aria-hidden='true' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- OUtput Content -->
      <div
        class='font-normal rounded-2xl mt-4 md:px-8 py-2 pb-6'
        style='background-color: rgb(146 151 179 / 13%)'
      >
        <div>
          <h2 class='text-2xl font-medium py-2'>Query Results</h2>
        </div>
        <!-- <div class="base-demo" style="width: 400px">
          <vue-table-dynamic :params="params"></vue-table-dynamic>
        </div> -->

      <div class="overflow-scroll flex flex-col flex-wrap mt-2 pl-2 h-max">
        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table class='min-w-full divide-y divide-gray-300'>
                  <thead class='bg-gray-50 '>
                    <tr>
                      <th scope='col' class='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'>System Id</th>
                      <th scope='col' class='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>Policy</th>
                      <th scope='col' class='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>Reg. Type</th>
                      <th scope='col' class='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>Name</th>
                      <th scope='col' class='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>Acronym</th>
                      <th scope='col' class='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>Description</th>
                      <th scope='col' class='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>Owner</th>
                      <th scope='col' class='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>Org Name</th>
                      <th scope='col' class='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>Ver Release</th>
                      <th scope='col' class='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>System Type</th>
                      <th scope='col' class='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>Is NSS</th>
                      <th scope='col' class='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>Is Public Facing</th>                    
                      <th scope='col' class='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>Is Type Auth.</th>
                      <th scope='col' class='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>DITPR ID</th>
                      <th scope='col' class='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>Auth Status</th>
                      <th scope='col' class='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>Auth. Date</th>
                      <th scope='col' class='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>Terms for Auth.</th>
                      <th scope='col' class='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>securityPlanApprovalStatus</th>
                      <th scope='col' class='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>securityPlanApprovalDate</th>
                      <th scope='col' class='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>rmfActivity</th>
                      <th scope='col' class='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>contingencyPlanTested</th>                    
                      <th scope='col' class='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>ppsmRegistryNumber</th>
                      <th scope='col' class='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>isPiaRequired</th>                    
                      <th scope='col' class='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'>reportsForScorecard</th>
                    </tr>
                  </thead>
                  <tbody class='divide-y divide-gray-200 bg-white overflow-y-scroll w-full'>
                    <tr v-for='system in query_results' :key='system.systemId'>
                      <td class='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>{{ system.systemId }}</td>
                      <td class='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{{ system.policy }}</td>
                      <td class='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{{ system.registrationType }}</td>
                      <td class='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{{ system.name }}</td>
                      <td class='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{{ system.acronym }}</td>
                      <td class='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{{ system.description }}</td>
                      <td class='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{{ system.systemOwner }}</td>
                      <td class='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{{ system.organizationName }}</td>
                      <td class='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{{ system.versionReleaseNo }}</td>
                      <td class='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{{ system.systemType }}</td>
                      <td class='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{{ system.isNSS }}</td>
                      <td class='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{{ system.isPublicFacing }}</td>
                      <td class='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{{ system.isTypeAuthorization }}</td>
                      <td class='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{{ system.ditprId }}</td>
                      <td class='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{{ system.authorizationStatus }}</td>
                      <td class='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{{ system.authorizationDate }}</td>
                      <td class='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{{ system.termsForAuth }}</td>
                      <td class='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{{ system.securityPlanApprovalStatus }}</td>
                      <td class='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{{ system.securityPlanApprovalDate }}</td>
                      <td class='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{{ system.rmfActivity }}</td>
                      <td class='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{{ system.contingencyPlanTested }}</td>
                      <td class='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{{ system.ppsmRegistryNumber }}</td>
                      <td class='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{{ system.isPiaRequired }}</td>
                      <td class='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>{{ system.reportsForScorecard }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div> 
      </div>
  
      <!-- Modal Popup window -->
      <template>
        <div>
          <ClientOnly>
            <!--  modal-class='modal-md' -->
            <Modal v-model="showQuerySystemModal" title='Query Parameters'>
              <form novalidate >
                <!-- System ID -->
                <div v-if="showSystemId">
                  <div class='grid grid-cols-4 grid-rows-1 gap-1 grid-flow-col py-4'>
                    <div>
                      <label for='systemId' class='font-bold text-right'>System ID</label>
                    </div>
                    <div class='col-span-3'> 
                      <input id='systemId' v-model='systemId' type='text' 
                        class='text-black shadow-sm border-solid border-2 border-indigo-600 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md' placeholder='' />
                    </div>
                  </div>
                </div>
                <!-- System Type -->
                <div v-if="showSystemType">
                  <div class='grid grid-cols-4 grid-rows-1 gap-1'>
                    <div>
                      <label for='systemType' class='font-bold text-right'>System Type</label>
                    </div>
                    <div class='col-span-3'> 
                      <input id='systemType' v-model='systemType' type='text' 
                        class='text-black shadow-sm border-solid border-2 border-indigo-600 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md' placeholder='' />
                    </div> 
                    <div class='col-span-4'>
                      <label>
                        RMF Values: IS Major Application, IS Enclave, Platform IT System
                        DIACAP Values: Platform IT Interconnection, AIS Application, Outsourced IT-Based Process (DoD-controlled), Enclave, Outsourced IT-Based Process (service provider shared)
                      </label>
                    </div>
                  </div>
                </div>
                <!-- Show Organization -->
                <div v-if="showSystemOrg">
                  <div class='grid grid-cols-4 grid-rows-1 gap-1 grid-flow-col py-4'>
                    <div>
                      <label for='systemOrg' class='font-bold text-right'>System Org</label>
                    </div>
                    <div class='col-span-3'> 
                      <input id='systemOrg' v-model='systemOrg' type='text' 
                        class='text-black shadow-sm border-solid border-2 border-indigo-600 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md' placeholder='' />
                    </div>
                  </div>
                </div>
                <!-- Show Owner -->
                <div v-if="showSystemOwner">
                  <div class='grid grid-cols-4 grid-rows-1 gap-1 grid-flow-col py-4'>
                    <div>
                      <label for='systemOwner' class='font-bold text-right'>System Owner</label>
                    </div>
                    <div class='col-span-3'> 
                      <input id='systemOwner' v-model='systemOwner' type='text' 
                        class='text-black shadow-sm border-solid border-2 border-indigo-600 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md' placeholder='' />
                    </div>
                  </div>
                </div>                
                <!-- Show Name -->
                <div v-if="showSystemName">
                  <div class='grid grid-cols-4 grid-rows-1 gap-1 grid-flow-col'>
                    <div>
                      <label for='systemName' class='font-bold text-right'>System Name</label>
                    </div>
                    <div class='col-span-3'> 
                      <input id='systemName' v-model='systemName' type='text' 
                        class='text-black shadow-sm border-solid border-2 border-indigo-600 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md' placeholder='' />
                    </div>
                  </div>
                </div>

                <div class=' modal-footer mt-2'>
                  <div class='h-8 min-h-full'>
                    <div v-if='showSystemId'>
                      <div class='float-right px-6'>
                        <button  type='button'
                          class='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                          @click='getSystem()'
                        >Ok</button>
                        <button type='button' 
                          class='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                          @click='showQuerySystemModal = false'
                        >Cancel</button>
                      </div>
                    </div>
                    <div v-else> 
                      <div class='float-right px-6'>
                        <button  type='button' 
                          class='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                          @click='getSystemsFiltered()'
                        >Ok</button>
                        <button type='button'
                          class='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                          @click='showQuerySystemModal = false'
                        >Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </Modal>
          </ClientOnly>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  // Import the Loading model component & Stylesheet
  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/vue-loading.css';
  // Import the Input Model component & Stylesheet
  import Modal from '@kouts/vue-modal';
  import '@kouts/vue-modal/dist/vue-modal.css';
  // import VueTableDynamic from 'vue-table-dynamic';

  import { SystemsApi } from '@mitre/emass_client';
  import QueryIcon from '../../components//dashboard//sidenavigation/icons/Query.vue';
  import { ApiConnection } from '../../api-connection/apiConnection';

  export default {
    components: {
      // VueTableDynamic,
      QueryIcon,
      Loading,
      Modal,
    },
    setup() {
    },
    data() {
      return {
        // emass_url: (this.$cookiz.get('cookie-name').url === 'undefined')?'':this.$cookiz.get('cookie-name'),
        params: {
          data: [
            ['System Id', 'Policy', 'Reg. Type'],
            ['Cell-4', 'Cell-5', 'Cell-6'],
            ['Cell-7', 'Cell-8', 'Cell-9']
          ]
        },
        emass_url: 'https://pilot-comm.emasstest.boozallencsn.com',
        emass_apikey: 'c1997ce5-57f3-479e-b21e-593657c60552',
        query_results: [{}],
        isLoading: false,
        fullPage: true,
        showQuerySystemModal: false,
        showSystemId: false,
        showSystemType: false,
        showSystemOwner: false,
        showSystemName: false,
        showSystemOrg: false,        
        systemId: 0,
        systemType: '',
        systemOrg: '',
        systemOwner: '',
        systemName: '',
        includePackage: false,
        policy: undefined,
      };
    },
    head: {
      title: 'Systems'
    },
    created () {
    },
    methods: {
      showGetSystemQuery() {
        this.showSystemId = true;
        this.showSystemType = false;
        this.showSystemOrg = false;        
        this.showSystemOwner = false;
        this.showSystemName =  false;
        
        this.showQuerySystemModal = true;
      },
      showGetSystemByTypeQuery() {
        this.showSystemType = true;
        this.showSystemId = false;
        this.showSystemOrg = false;        
        this.showSystemOwner = false;
        this.showSystemName =  false;

        this.showQuerySystemModal = true;
      },
      showGetSystemByOrgQuery() {
        this.showSystemOrg = true;
        this.showSystemId = false;
        this.showSystemType = false;
        this.showSystemOwner = false;
        this.showSystemName =  false;
        
        this.showQuerySystemModal = true;
      },
      showGetSystemByOwnerQuery() {
        this.showSystemOwner = true;
        this.showSystemId = false;
        this.showSystemType = false;
        this.showSystemOrg = false;        
        this.showSystemName =  false;

        this.showQuerySystemModal = true;
      },
      showGetSystemByNameQuery() {
        this.showSystemName = true;
        this.showSystemId = false;
        this.showSystemType = false;
        this.showSystemOrg = false;        
        this.showSystemOwner = false;

        this.showQuerySystemModal = true;
      },
      async getSystems (e) {
        this.isLoading = true;
        this.query_results.length = 0;
        const apiCxn = new ApiConnection(this.emass_url, 443, this.emass_apikey, false, false);
        const getSystems = new SystemsApi(apiCxn.configuration, apiCxn.basePath, apiCxn.axiosInstances);
    
        // Order is important here
        // Parameters: includePackage, registrationType, ditprId, coamsId, policy, includeDitprMetrics, includeDecommissioned, reportsForScorecard
        await getSystems.getSystems(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined).then((data) => {          
          data.data.data.forEach(element => {
             this.query_results.push(element)
          }); 
          // console.log('query results: ' + JSON.stringify(this.query_results))
        }).catch((error) => {
          this.$notify({
            type: 'error',
            group: 'alert', 
            title: 'Query Error',
            text: GetErrorMsg(error),
          });            
        });
        this.isLoading = false;
      },
      async getSystem () {
        this.showQuerySystemModal = false;
        this.isLoading = true;
        this.query_results.length = 0;

        const apiCxn = new ApiConnection(this.emass_url, 443, this.emass_apikey, false, false);
        const getSystems = new SystemsApi(apiCxn.configuration, apiCxn.basePath, apiCxn.axiosInstances);
    
        // Order is important here
        // Parameters: systemId,includePackage,policy
        await getSystems.getSystem(this.systemId, this.includePackage, this.policy).then((data) => {
          // console.log('data is: ' + JSON.stringify(data.data.data))
          this.query_results.push(data.data.data);
        }).catch((error) => {
          this.$notify({
            type: 'error',
            group: 'alert', 
            title: 'Query Error',
            text: GetErrorMsg(error),
          });  
        });
        this.isLoading = false;
      },
      async getSystemsFiltered() {
        this.showQuerySystemModal = false;
        this.isLoading = true;
        this.query_results.length = 0;

        const apiCxn = new ApiConnection(this.emass_url, 443, this.emass_apikey, false, false);
        const getAllSystems = new SystemsApi(apiCxn.configuration, apiCxn.basePath, apiCxn.axiosInstances);

        let filterON = 'unknown';
        let filterValue = 'unknown';
        if (this.showSystemType) {
          filterON = 'systemType';
          filterValue = this.systemType;
        } else if (this.showSystemOrg) {
          filterON = 'organizationName';
          filterValue = this.systemOrg;
        } else if (this.showSystemOwner) {
          filterON = 'systemOwner';
          filterValue = this.systemOwner;
        } else if (this.showSystemName) {
          filterON = 'name';
          filterValue = this.systemName;
        }
        // Order is important here
        // Parameters: includePackage, registrationType, ditprId, coamsId, policy, includeDitprMetrics, includeDecommissioned, reportsForScorecard
        await getAllSystems.getSystems(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined).then((data) => {        
            const filteredData = FilterData(filterON, filterValue, data.data.data);
            this.query_results = filteredData;
        }).catch((error) => {
          this.$notify({
            type: 'error',
            group: 'alert', 
            title: 'Query Error',
            text: GetErrorMsg(error),
          });
        });
        this.isLoading = false;
      }
    }
  }

  function FilterData(filterON, filterValue, data) {
    const filterArray = [];
    data.forEach(element => {
      console.log('element.filterON: ' + element[filterON]  + ' filterValue: ' + filterValue)       
      if(element[filterON] === filterValue) {
        filterArray.push(element)
      }
    });
    return filterArray;
  }

  function GetErrorMsg(error) {
    let errText = 'Unknown Error';
    if(error.message.includes('Network Error')) {
      errText = error + " See Developer Tools (Console) for more detail";
    } else {
      errText = 'Error code: ' + error.response.status + ' ' + error.response.data.meta.errorMessage;
    }
    return errText;
  }
</script>

<style>
  .modal-footer {
    padding: 15px 0px 0px 0px;
    border-top: 1px solid #e5e5e5;
    margin-left: -14px;
    margin-right: -14px;
  }
  .vm-title{
    margin-top:2px;margin-bottom:0;display:inline-block;font-size:20px;font-weight:800
  }
  .vm{
    position:relative;
    margin:0 auto;width:calc(100% - 20px);
    min-width:110px;max-width:500px;
    background-color:rgba(117, 94, 94, 0.993);
    top:30px;cursor:default;
    box-shadow:0 5px 15px rgba(0,0,0,.5)
  }

</style>