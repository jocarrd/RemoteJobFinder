<template>
  <c-box mt="1vh" d="flex" p="8" w="100vw" h="100vh" flex-dir="column">
    <c-flex align="center" justify="left" ml="12vw" mt="8">
      <c-icon-button
        aria-label="change color"
        @click="$toggleColorMode"
        :icon="colorMode === 'dark' ? 'sun' : 'moon'"
        variant-color="blue"
        size="lg"
      />
    </c-flex>

    <c-flex align="center" justify="center" mt="8">
      <img
        src="../public/Croods - Keeping in Touch.png"
        width="400"
        height="400"
    /></c-flex>
    <c-heading textAlign="center" mb="4"
      >Discover the best remote jobs to work from home.</c-heading
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
            <option>Angular</option>
            <option>.NET</option>
          </c-select>
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
          :paginate="submit"
          :location="location"
          :tech="tech"
          v-if="jobs.length > 0"
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
  CIconButton,
} from "@chakra-ui/vue";

import APIServices from "./services/APIServices";
import ListJobs from "./components/ListJobs/ListJobs.vue";
import PaginationComponent from "./components/Pagination/PaginationComponent.vue";
export default {
  name: "App",
  inject: ["$chakraColorMode", "$toggleColorMode"],
  computed: {
    /**
     * In order to preserve reactivity, Chakra provides the color mode
     * inside the `$chakraColorMode` function. This function returns the current
     * color mode.
     */
    colorMode() {
      return this.$chakraColorMode();
    },
  },

  components: {
    CBox,
    CHeading,
    CFormControl,
    CFlex,
    CButton,
    CText,
    CInput,
    CSelect,
    CIconButton,
    ListJobs,
    PaginationComponent,
  },
  methods: {
    submit(page) {
      this.loading = true;
      APIServices.finder(this.location, page | 1, this.tech).then(
        (response) => {
          this.jobs = response.results;
          this.loading = false;
        }
      );
    },
  },
  data() {
    return {
      jobs: {},
      location: "Madrid",
      loading: false,
      tech: "",
      customStyles,
    };
  },
  created() {
    APIServices.finder(this.location, 1).then((response) => {
      this.jobs = response.results;
      this.loading = false;
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
