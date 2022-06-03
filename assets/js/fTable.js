function sortTable(idx){
    var otable=document.querySelector('table'), //获取表格
        obody=otable.tBodies[0], //表格正文tbody
        otr=obody.rows, //表格的行
        tarr=[]; //临时数组
    for(var i=1;i<otr.length;i++){
        // 把除了表头之外的每一行都赋值到临时数组
        tarr[i-1]=otr[i];
    }
    // sortCol属性时额外给table添加的属性，用于作顺反两种顺序排序时的判断，区分首次排序和后面的有序反转
    if(obody.sortCol==idx){
        // 反序
        tarr.reverse();
    }else{
        tarr.sort(function(tr1,tr2){
            var value1=tr1.cells[idx].innerHTML;
            var value2=tr2.cells[idx].innerHTML;
            if(!isNaN(value1)&&!isNaN(value2)){
                // 数字排序
                return value1-value2;
            }else{
                // 字符串排序
                return value1.localeCompare(value2);
            }
        })
    }
    // 创建虚拟的节点对象，节点对象包含所有属性和方法
    var fragment=document.createDocumentFragment();
    for(var i=0;i<tarr.length;i++){
        // 把排序号的数组追加到节点对象
        fragment.appendChild(tarr[i]);
    }
    // 把节点对象追加到tbody
    obody.appendChild(fragment);
    // 更新sortCol
    obody.sortCol=idx;
}