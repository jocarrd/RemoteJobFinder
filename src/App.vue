<template>
  <c-box mt="4vh" d="flex" p="8" w="100vw" h="100vh" flex-dir="column">
    <CHeading textAlign="center" mb="4"
      >Discover the best remote jobs to work from home.</CHeading
    >

    <c-flex align="center" justify="center" mt="8">
      <c-flex
        ><c-form-control is-required>
          <c-input
            width="30vw"
            v-model="location"
            placeholder="Location"
          /> </c-form-control
      ></c-flex>
      <c-flex
        ><c-form-control>
          <c-select
            placeholder="Select option"
            width="10vw"
            id="country"
            v-model="tech"
            ><option>React</option>
            <option>Vue</option>
            <option>Angular</option></c-select
          >
        </c-form-control></c-flex
      >
      <c-flex ml="8px"
        ><c-button
          @click="submit"
          loading-text="Submitting"
          variant-color="blue"
          :isLoading="loading"
        >
          Find Job!
        </c-button></c-flex
      >
    </c-flex>
    <c-box mt="4vh" d="flex" w="auto" h="100vh" flex-dir="column">
      <c-text fontSize="xl" align="center">{{
        `Found  ${jobs.length} matching jobs`
      }}</c-text>

      <ListJobs :jobs="jobs"></ListJobs>
      <c-flex align="center" justify="center" mt="8">
        <PaginationComponent
          :submit="submit"
          :location="location"
          :tech="tech"
        ></PaginationComponent>
      </c-flex>
    </c-box>
  </c-box>
</template>

<script>
import {
  CBox,
  CHeading,
  CFormControl,
  CButton,
  CFlex,
  CText,
  CInput,
  CSelect,
} from "@chakra-ui/vue";

import APIServices from "./services/APIServices";
import ListJobs from "./components/ListJobs/ListJobs.vue";
import PaginationComponent from "./components/Pagination/PaginationComponent.vue";
export default {
  name: "App",
  components: {
    CBox,
    CHeading,
    CFormControl,
    CFlex,
    CButton,
    CText,
    CInput,
    CSelect,
    ListJobs,
    PaginationComponent,
  },
  methods: {
    submit(page = 1) {
      this.loading = true;
      APIServices.finder(this.location, page, this.tech).then((response) => {
        this.jobs = response.results;
        this.loading = false;
      });
    },
  },
  data() {
    return {
      jobs: {},
      location: "London",
      loading: false,
      tech: "",
      customStyles,
    };
  },

  created() {
    APIServices.finder(this.location).then((response) => {
      this.jobs = response.results;
    });
  },
};

const customStyles = {
  li: {
    display: "inline-block",
    border: "2px dotted green",
  },
  a: {
    color: "blue",
  },
};
</script>
