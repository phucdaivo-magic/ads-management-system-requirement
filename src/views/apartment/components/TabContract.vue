<template>
    <div>
        <b-list-group>
            <b-list-group-item>
                <b-row>
                    <b-col xs="3" lg="3">
                        <i class="icon-user mr-1"></i>người thuê:
                    </b-col>
                    <b-col xs="9" lg="9">
                        <b>{{contract.customer_name}}</b>
                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col xs="3" lg="3">
                    <i class="icon-user mr-1"></i>CMND:
                    </b-col>
                    <b-col xs="9" lg="9">
                        <b>{{contract.customer_no}}</b>
                    </b-col>
                </b-row>
            </b-list-group-item>

            <b-list-group-item>
                <b-row>
                    <b-col xs="3" lg="3">
                    <i class="icon-phone mr-1"></i>Số điện thoại:
                    </b-col>
                    <b-col xs="9" lg="9">
                        <b>{{contract.customer_phone}}</b>
                    </b-col>
                </b-row>
            </b-list-group-item>
            <b-list-group-item>
                <b-row>
                    <b-col xs="3" lg="3">
                        <i class="icon-calendar mr-1"></i>Ngày bắt đầu:
                    </b-col>
                    <b-col xs="9" lg="9">
                        <b>{{contract.start_date}}</b>
                    </b-col>
                </b-row>
            </b-list-group-item>

            <b-list-group-item>
                <b-row>
                    <b-col xs="3" lg="3">
                        <i class="icon-calendar mr-1"></i>Ngày kết thúc:
                    </b-col>
                    <b-col xs="9" lg="9">
                        <b>{{contract.end_date}}</b>
                    </b-col>
                </b-row>
            </b-list-group-item><br>

            <b-list-group-item>
                <b-row>
                    <b-col xs="3" lg="3">
                    <i class="icon-people mr-1"></i>Số lượng xe
                    </b-col>
                    <b-col xs="9" lg="9">
                        <b>{{contract.number_of_vehicles}}</b>
                    </b-col>
                </b-row>
            </b-list-group-item>

            <b-list-group-item>
                <b-row>
                    <b-col xs="3" lg="3">
                        <i class="icon-bulb mr-1"></i>Số Điện
                    </b-col>
                    <b-col xs="9" lg="9">
                        <b>{{contract.number_of_electricity}}</b>
                    </b-col>
                </b-row>
            </b-list-group-item>

            <b-list-group-item>
                <b-row>
                    <b-col xs="3" lg="3">
                        <i class="icon-drop mr-1"></i>Số Nước
                    </b-col>
                    <b-col xs="9" lg="9">
                        <b>{{contract.number_of_water}}</b>
                    </b-col>
                </b-row>
            </b-list-group-item>

            <b-list-group-item>
                <b-row>
                    <b-col xs="3" lg="3">
                        <i class="cui-dollar mr-1"></i>Số Tiền
                    </b-col>
                    <b-col xs="9" lg="9">
                        <b class="cs-c-red">{{contract.amount}} (VND)</b>
                    </b-col>
                </b-row>
            </b-list-group-item>

             <b-list-group-item>
                <b-row>
                    <b-col xs="3" lg="3">
                        <i class="cui-note mr-1"></i> Ghi chú
                    </b-col>
                    <b-col xs="9" lg="9">
                        <b>{{contract.note}}</b>
                    </b-col>
                </b-row>
            </b-list-group-item>

        </b-list-group>
    </div>
</template>

<script>
export default {
  data() {
    return {
      contract: {}
    };
  },
  mounted: function() {
    this.contract = {
        customer_name: 'Võ Đại Phúc',
        customer_no: '289567355',
        start_date: '20/12/2019',
        end_date: '20/12/2019',
        amount: '2000.000',
        contract_no: '12121212',
        customer_phone: '0989588556',
        number_of_vehicles: '7',
        number_of_electricity: '3696',
        number_of_water: '3123',
        note: 'Trả tiền vào 20 hàng tháng'
    }
  },
  methods: {

  },
  components: {
  }
};
</script>

