<template>
  <div>
    <DataForm :itemSource="dataForm" :caption="'Thêm căn hộ'"></DataForm>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataForm: {
        no: {
          lable: "Số phòng",
          name: "name",
          type: "input",
          validate: "Tên",
          placeholder: "001",
          value: ""
        },
        name: {
          lable: "Người thuê",
          name: "name",
          type: "input",
          validate: "Tên",
          placeholder: "Võ Đại Phúc"
        },
        cmnd: {
          lable: "CMND",
          name: "name",
          type: "input",
          validate: "Tên",
          placeholder: "09029029"
        },
        contract_start_day: {
          lable: "Ngày bắt đầu",
          name: "name",
          type: "date",
          validate: "Tên",
          placeholder: "01/01/1970"
        },
        contract_end_day: {
          lable: "Ngày kết thúc",
          name: "name",
          type: "date",
          validate: "Tên",
          placeholder: "01/01/1970",
          value: null
        },
        contract_no: {
          lable: "Số hợp đồng",
          name: "name",
          type: "number",
          validate: "Tên",
          placeholder: "01234"
        },
        is_use_elevator: {
          lable: "Sử dụng thang máy",
          name: "name",
          type: "checkbox",
          validate: "Tên",
          placeholder: "01234"
        },
        amount: {
          lable: "Tiền phòng",
          name: "name",
          type: "number",
          validate: "Tên",
          placeholder: "01234"
        },
        number_of_vehicles: {
          lable: "Số lượng xe",
          name: "name",
          type: "number",
          validate: "Tên",
          placeholder: "01234"
        },
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
        },
        note: {
          lable: "Ghi chú",
          name: "name",
          type: "textarea",
          validate: "Tên",
          placeholder: "01234"
        },
      }
    }
  }
};
</script>

