<template>
  <div>
    <b-modal ref="history" hide-footer title="Lịch sữ">
      <!-- Card Table -->
      <data-table class="card-table" :settings="settings" :table-data="dataSource"></data-table>
      <!-- End Card Table -->
    </b-modal>
    <BillModal ref="billModal" />
    <CreateBillModal ref="createBillModal" />
  </div>
</template>

<script>
import Settings from "../../../settings/table/apartment/billHistory";
import DataTable from "../../../components/table/Table.vue";
import CreateBillModal from "../components/CreateBillModal.vue";
import BillModal from "./BillModal.vue";

export default {
  props: ["dataSource"],
  mixins: [Settings],
  methods: {
    show: function() {
      this.$refs["history"].show();
    },
    showBill: function(data) {
      this.$refs["billModal"].show(data);
    },
    onCreateBill: function(data) {
      this.$refs.createBillModal.show(data);
    }
  },
  components: {
    DataTable,
    BillModal,
    CreateBillModal
  }
};
</script>


