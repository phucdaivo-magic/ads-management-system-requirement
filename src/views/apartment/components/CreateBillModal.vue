<template>
  <div>
    <b-modal ref="createBillModal" title="Tạo hóa đơn">
      <div style="padding: 20px">
        <div class="form-group row">
          <div class="cs-label col-md-3 control-label text-right">Số điện :</div>
          <div class="col-md-9">
            <input class="form-control" :placeholder="'123'" />
            <!-- Message -->
          </div>
        </div>
        <div class="form-group row">
          <div class="cs-label col-md-3 control-label text-right">Số nước :</div>
          <div class="col-md-9">
            <input class="form-control" />
            <!-- Message -->
          </div>
        </div>
      </div>
      <template v-slot:modal-footer="{ ok, cancel, hide }">
          <div>
            <button class="btn btn-primary mr-2" @click="ok()">
              <i class="icon-check"></i>
              OK
            </button>
            <button class="btn btn-danger" @click="cancel()">
              <i class="icon-ban"></i>
              Hủy bỏ
            </button>
          </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataForm: {
        number_of_electricity: {
          lable: "Số điện",
          name: "name",
          type: "number",
          validate: "Tên",
          placeholder: "01234"
        },
        number_of_water: {
          lable: "Số nước",
          name: "name",
          type: "number",
          validate: "Tên",
          placeholder: "01234"
        }
      }
    };
  },
  methods: {
    show: function(data) {
      this.$refs["createBillModal"].show();
    }
  },
  components: {}
};
</script>
