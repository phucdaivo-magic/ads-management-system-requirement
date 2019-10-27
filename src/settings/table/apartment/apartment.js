const mixin = {
  data() {
    return {
      settings: {
        header: [{
            key: "no",
            label: "Số phòng"
          },
          {
            key: "customer_name",
            label: "Tên chủ hộ",
          },
          {
            key: "contract_start_day",
            label: "Ngày bắt đầu",
          },
          {
            key: "contract_end_day",
            label: "Ngày kết thúc",
          },
      
          //   {
          //     key: "customer_phone",
          //     label: "Số điện thoại"
          //   },
          //   {
          //     key: "customer_no",
          //     label: "CMND",
          //   },
          {
            key: "amount",
            label: "Tiền phòng",
          },
          //   {
          //     key: "is_use_elevator",
          //     label: "Sử dụng thang máy",
          //   },
          {
            key: "contract_no",
            label: "Số hợp đồng",
          },
          //   {
          //     key: "number_of_vehicles",
          //     label: "Số lượng xe",
          //   },
          //   {
          //     key: "number_of_electricity",
          //     label: "Số điện",
          //   },
          //   {
          //     key: "number_of_water",
          //     label: "Số nước",
          //   },
          //   {
          //     key: "note",
          //     label: "Ghi chú",
          //   },
          //   {
          //     key: "note",
          //     label: "Ghi chú",
          //     class: "cs-actions"
          //   },
          {
            key: "actions",
            label: "",
            class: "cs-actions"
          },

        ],
        columns: [{
            key: 'no',
            onClick: this.onDetail
          },
          {
            key: 'customer_name',
            render: (data) => {
              return data.customer_name
            },
            onClick: this.onDetail
          },
          {
            key: 'contract_start_day',
            render: (data) => {
              return utils.dateYYYYMMDD(data.contract_start_day);
            },
            onClick: this.onDetail
          },
          {
            key: 'contract_end_day',
            render: (data) => {
              return data.contract_end_day
            },
            onClick: this.onDetail
          },
          {
            key: 'status',
            render: (data) => {
              return data.status
            }
          },
          {
            key: 'amount',
            component: true,
            render: (data) => {
              return data.amount
            },
            onClick: this.onDetail
          },
          {
            key: 'contract_no',
            component: true,
            render: (data) => {
              return data.contract_no
            },
            onClick: this.onDetail
          },
          {
            key: 'actions',
            actions: [{
                content: '<i class="icon-pencil"></i>',
                class: 'btn btn-secondary btn-sm',
                onClick: this.onChange
              },
              {
                content: '<i class="icon-trash"></i>',
                class: 'btn btn-danger btn-sm',
                onClick: this.onDelete
              },
              {
                content: '<i class="icon-plus"></i>',
                class: 'btn btn-success btn-sm',
                onClick: this.onCreateBill
              },
              {
                content: ' <i class="icon-reload"></i>',
                class: 'btn btn-success btn-sm',
                onClick: (item) => {
                  this.show();
                }
              }
            ],
            component: true,
            render: (data) => {
              return data.age
            },
          }
        ]
      }
    }
  },
  methods: {
    onDelete: function (data) {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this imaginary file!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Deleted!',
            'Your imaginary file has been deleted.',
            'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
    },
    onChange: function (data) {
      let __this = this;
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this imaginary file!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          __this.$router.push({
            name: 'create-apartment'
          });
        }
      })

    }
  }

}

export default mixin;
