import{n as r}from"./index-a1f01123.js";const n={name:"Class",components:{},data(){return{tableData:[],pagination:{pageSize:10,pageNum:1},params:{name:"",phone:"",idCard:"",productType:""}}},async mounted(){await this.onSearch()},methods:{async onSearch(){let{name:l,phone:a,idCard:e,productType:t}=this.params;this.tableData=await this.$request.get(`/tradeOrder/listQuery?pageSize=${this.pagination.pageSize}&pageNum=${this.pagination.pageNum}&name=${l}&phone=${a}&idCard=${e}&productType=${t}`)},handlePageChange(l){this.pagination.pageNum=l,this.onSearch()},handleSizeChange(l){this.pagination.pageSize=l,this.onSearch()}}};var s=function(){var a=this,e=a._self._c;return e("div",{staticClass:"container"},[e("el-form",{attrs:{inline:"",size:"small"}},[e("el-form-item",{attrs:{label:"姓名"}},[e("el-input",{attrs:{placeholder:"姓名",clearable:""},model:{value:a.params.name,callback:function(t){a.$set(a.params,"name",t)},expression:"params.name"}})],1),e("el-form-item",{attrs:{label:"手机号"}},[e("el-input",{attrs:{placeholder:"手机号",clearable:""},model:{value:a.params.phone,callback:function(t){a.$set(a.params,"phone",t)},expression:"params.phone"}})],1),e("el-form-item",{attrs:{label:"身份证号"}},[e("el-input",{attrs:{placeholder:"身份证号",clearable:""},model:{value:a.params.idCard,callback:function(t){a.$set(a.params,"idCard",t)},expression:"params.idCard"}})],1),e("el-form-item",{attrs:{label:"注销/退款"}},[e("el-select",{attrs:{placeholder:"注销/退款",clearable:""},model:{value:a.params.productType,callback:function(t){a.$set(a.params,"productType",t)},expression:"params.productType"}},[e("el-option",{attrs:{label:"注销",value:"注销"}}),e("el-option",{attrs:{label:"退款",value:"退款"}})],1)],1),e("el-form-item",[e("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:a.onSearch}},[a._v("查询")])],1)],1),e("el-table",{staticStyle:{width:"100%","border-radius":"10px"},attrs:{data:a.tableData.records,border:"",size:"mini","header-cell-style":{background:"#409EFF",color:"#ffffff"}}},[e("el-table-column",{attrs:{prop:"tradeNo",label:"订单号",width:"160"}}),e("el-table-column",{attrs:{prop:"name",label:"姓名"}}),e("el-table-column",{attrs:{prop:"phone",label:"手机号"}}),e("el-table-column",{attrs:{prop:"idCard",label:"身份证号",width:"160"}}),e("el-table-column",{attrs:{prop:"sn",label:"SN码",width:"200"}}),e("el-table-column",{attrs:{prop:"productType",label:"类型"}}),e("el-table-column",{attrs:{prop:"payTotal",label:"支付金额"}}),e("el-table-column",{attrs:{prop:"payStatus",label:"支付状态"}}),e("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"160"}})],1),e("div",{staticClass:"block"},[e("el-pagination",{attrs:{size:"small","current-page":Number(a.tableData.current),"page-sizes":[10,50,100],"page-size":Number(a.tableData.size),layout:"total, sizes, prev, pager, next, jumper",total:Number(a.tableData.total)},on:{"size-change":a.handleSizeChange,"current-change":a.handlePageChange}})],1)],1)},o=[],p=r(n,s,o,!1,null,"ed9c3324",null,null);const c=p.exports;export{c as default};
