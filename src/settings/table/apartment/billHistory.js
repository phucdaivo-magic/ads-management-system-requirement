
const mixin = {
    data() {
        return {
            settings: {
                header: [
                    { key: "no", label: "No"},
                    { key: "time", label: "Thời gian", sortable: true },
                    { key: "amount", label: "Số tiền", sortable: true },
                    { key: "status", label: "Tình trạng" },
                    { key: "description", label: "Mô tả" },
                    { key: "actions", label: "", class: "cs-actions" },

                ],
                columns: [
                    {
                        key: 'no'
                    },
                    {
                        key: 'status',
                        render: (data) => {
                            return utils.generateStatues(data.status);
                        }
                    },
                    {
                        key: 'name',
                        component: true,
                        render: (data) => {
                            return data.name
                        }
                    },
                    {
                        key: 'actions',
                        actions: [
                            {
                                content : ' <i class="icon-eye"></i>',
                                class   : 'btn btn-success btn-sm',
                                onClick : (item) => {
                                    this.showBill(item);
                                }
                            },
                            {
                                content : ' <i class="icon-pencil"></i>',
                                class   : 'btn btn-secondary btn-sm',
                                onClick : (item) => {
                                    this.onCreateBill(item);
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
    }
}

export default mixin;
