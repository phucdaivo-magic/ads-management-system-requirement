<template>
  <div class="wrapper">
    <div class="animated fadeIn">
      <b-row>
        <!-- Card Top -->
        <b-col cols="12" class="cs-merge-card">
          <b-card header-tag="header" footer-tag="footer" class="card-accent-primary">
            <div slot="header">
              <i class="icons cui-magnifying-glass mr-2"></i>
              <strong>Tìm kiếm</strong>
            </div>
            <div>
              <form class="d-flex" autocomplete="off">
                <!-- Button -->
                <div class="d-flex mr-auto">
                  <button class="btn btn-block btn-success"  @click="onCreate" type="button">
                    <i class="icon-plus icons" style="margin-right: 5px;"></i>
                    Tạo mới
                  </button>
                </div>
                <!-- Input -->
                <input
                  class="form-control mr-2"
                  style="width: auto"
                  placeholder="Số căn hộ"
                  name="so_can_ho"
                  value
                />
                <input
                  class="form-control mr-2"
                  style="width: auto"
                  placeholder="Chủ hộ"
                  name="chu_hien_tai"
                  value
                />
                <button class="btn btn-light">
                  <i class="icons cui-magnifying-glass"></i>
                </button>
              </form>
            </div>
          </b-card>
          <!-- End Card Top -->

          <!-- Card Table -->
          <b-card class="card-table mb-5" header-tag="header" footer-tag="footer">
            <div slot="header">
              <div class="d-flex" style="align-items: center;">
                <i class="icons cui-file" style="margin-right: 0.5rem"></i>
                Danh sách đối tượng
                <b>(39)</b>
              </div>
            </div>
            <data-table class="card-table" :settings="settings" :table-data="dataSource"></data-table>
          </b-card>
          <!-- End Card Table -->
        </b-col>
      </b-row>
    </div>
    <HistoryModal ref="history" :dataSource="dataBillHistory" />
    <CreateBillModal ref="createBillModal" />
  </div>
</template>
<script>
import { shuffleArray } from "@/shared/utils";
import HistoryModal from "./components/HistoryModal.vue";
import Settings from "../../settings/table/apartment/apartment";
import CreateBillModal from "./components/CreateBillModal";

export default {
  data() {
    return {
      dataSource: [],
      dataBillHistory: []
    };
  },
  mounted: function() {
    for (let index = 0; index < 40; index++) {
      this.dataSource .push({
        no: index + '00' + 1 + 'A-40' +index + 1,
        customer_name: "Võ Đại Phúc",
        contract_start_day: "2019:03:02",
        contract_end_day: "20/03/2029",
        amount: "200.000 $",
        contract_no: '00' + 1+ "100"+ '00' + index*2
      });
    }

    this.dataBillHistory = [
        {
          no: 1,
          time: '20/08/2019',
          amount: '1000',
          status: 1,
          description: 'không có',
        },
        {
          no: 1,
          time: '20/08/2019',
          amount: '1000',
          status: 1,
          description: 'không có',
        },
        {
          no: 1,
          time: '20/08/2019',
          amount: '1000',
          status: 1,
          description: 'không có',
        }
      ];
  },
  methods: {
    show: function() {
      this.$refs["history"].show();
    },
    onCreate: function() {
      this.$router.push({ name: 'create-apartment' })
    },
    onDetail: function(data) {
      this.$router.push({ name: 'detail-apartment', params: { id: 1 }});
    },
    onCreateBill: function(data) {
      this.$refs.createBillModal.show(data);
    }
  },
  mixins: [Settings],
  components: {
    HistoryModal,
    CreateBillModal
  }
};
</script>
<style lang="scss" >
.cs-actions {
  width: 50px;
}
</style>

