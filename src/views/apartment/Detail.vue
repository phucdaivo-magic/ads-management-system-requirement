<template>
  <div>
    <b-col xs="12" lg="12">
      <b-card>
        <div slot="header">Chi tiết căn hộ</div>
        <button class="btn btn-success mb-2 ml-auto d-block" @click="onCreateBill" type="button">
          <i class="icon-plus icons" style="margin-right: 5px;"></i>
          Tạo hóa đơn
        </button>
        <b-tabs>
          <!-- Bill -->
          <b-tab active>
            <template slot="title">
              <i class="cui-file mr-2"></i>
              <b>Thông tin hóa đơn (Tháng 9)</b>
            </template>
            <Bill />
          </b-tab>
          <!-- End Bill -->

          <!-- Detail -->
          <b-tab>
            <template slot="title">
              <i class="cui-task mr-2"></i>
              <b>Chi tiết căn hộ</b>
            </template>
            <Contract />
          </b-tab>
          <!-- End Detail -->

          <!-- Histories -->
          <b-tab>
            <template slot="title">
              <i class="icon-clock mr-2"></i>
              <b>Lịch sử thanh toán</b>
            </template>
            <data-table class="card-table" :settings="settings" :table-data="dataSource"></data-table>
          </b-tab>
          <!-- End Histories -->
        </b-tabs>
      </b-card>
    </b-col>
    <BillModal ref="billModal" />
    <CreateBillModal ref="createBillModal" />
  </div>
</template>

<script>
import Contract from "./components/TabContract.vue";
import Bill from "./components/Bill.vue";
import BillModal from "./components/BillModal.vue";
import CreateBillModal from "./components/CreateBillModal.vue";
import Settings from "../../settings/table/apartment/billHistory";
import DataTable from "../../components/table/Table";
export default {
  data() {
    return {
      dataSource: []
    };
  },
  components: {
    Contract,
    Bill,
    DataTable,
    BillModal,
    CreateBillModal
  },
  mixins: [Settings],
  mounted() {
    this.dataSource = [
      {
        no: 1,
        time: "20/08/2019",
        amount: "1000",
        status: 1,
        description: "không có"
      },
      {
        no: 1,
        time: "20/08/2019",
        amount: "1000",
        status: 1,
        description: "không có"
      },
      {
        no: 1,
        time: "20/08/2019",
        amount: "1000",
        status: 1,
        description: "không có"
      }
    ];
  },
  methods: {
    showBill: function(data) {
      this.$refs.billModal.show(data);
    },
    onCreateBill: function(data) {
      this.$refs.createBillModal.show(data);
    }
  }
};
</script>

<style>
b {
  font-weight: 500 !important;
}

.cs-c-red {
  color: red !important;
}
</style>