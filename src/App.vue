<template>
  <c-box mt="4vh" d="flex" p="8" w="100vw" h="100vh" flex-dir="column">
    <CHeading textAlign="center" mb="4"
      >Discover the best remote jobs to work from home.</CHeading
    >

    <c-flex align="center" justify="center" mt="8">
      <c-flex
        ><c-form-control>
          <c-select
            width="60vw"
            id="country"
            placeholder="Select location"
          /> </c-form-control
      ></c-flex>
      <c-flex ml="8px"
        ><c-button loading-text="Submitting" variant-color="blue">
          Find Job!
        </c-button></c-flex
      >
    </c-flex>
  </c-box>
</template>

<script>
import {
  CBox,
  CHeading,
  CFormControl,
  CSelect,
  CButton,
  CFlex,
} from "@chakra-ui/vue";
import APIServices from "./services/APIServices";
export default {
  name: "App",
  components: {
    CBox,
    CHeading,
    CFormControl,
    CSelect,
    CFlex,
    CButton,
  },

  created() {
    APIServices.finder("London").then(console.log);
  },
};
</script>
