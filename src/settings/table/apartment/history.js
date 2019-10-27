import Vue from 'vue'
const mixin = {
    data() {
        return {
            settings: {
                header: [
                    { key: "no", label: "No"},
                    { key: "name", label: "Tên Chủ hộ", sortable: true },
                    { key: "status", label: "Đăng ký " },
                    { key: "name", label: "Đăng ký " },
                    { key: "actions", label: "Hành động", class: "cs-actions" },

                ],
                columns: [
                    {
                        key: 'no'
                    },
                    {
                        key: 'status',
                        render: (data) => {
                            return data.status
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
                                content : '<i class="icon-pencil"></i>',
                                class   : 'btn btn-secondary btn-sm',
                                onClick : (item) => {
                                    alert(item.name)
                                }
                            },
                            {
                                content : '<i class="icon-trash"></i>',
                                class   : 'btn btn-danger btn-sm',
                                onClick : (item) => {
                                    alert()
                                }
                            },
                            {
                                content : ' <i class="icon-reload"></i>',
                                class   : 'btn btn-success btn-sm',
                                onClick : (item) => {
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
    }
}

export default mixin;
