<template>
  <b-modal ref="bill" hide-footer title="Hóa đơn">
    <Bill />
  </b-modal>
</template>

<script>
import Bill from './Bill.vue';
export default {
    methods: {
        show: function(data) {
            this.$refs["bill"].show();
        }
    },
    components: {
        Bill
    }
}

</script>