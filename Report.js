var BillNo="";
var newdata=[];
var url="";

function formValidation(){
    if(document.getElementById("Bill No").value.trim().length !== 0){
         newdata=[];
        mobile = document.getElementById("Bill No").value;
        document.getElementById("Bill No").style.border = ""; 
        document.getElementById("smallBill No").style.display ="none";
        url = 'http://161.35.3.78/VEMS/api/version1/visitors?mobileNo='+BillNo;
        bindUserData(url);
    }
    else{
        document.getElementById("Bill No").style.border = "1px solid red";
        document.getElementById("smallBill No").style.display = "block";
        document.getElementById("smallBill No").style.color = "red";
        return false;
    }
}
// cloud.collection("visitors").add(data)
bindUserData();
// let newData=[];
                   
    //  let newHtmlText="";
    //  let dataLength=0;
          
            //          getData();
function bindUserData(){
fetch()
.then(response => response.json())
.then(data => {
newdata.push(data);
console.log(newdata[0].data.length);
dataLength=newdata[0].data.length;
bindUserData1();
});
}
function bindUserData1(){
let newHtmlText="";
let dataLength=newdata[0].count;      
for(let i=0;i<dataLength;i++){
newHtmlText+="<tr>"
newHtmlText+="<td>"+newdata[0].data[i].BillNo +"</td>"
newHtmlText+="<td>"+newdata[0].data[i].Date+"</td>"
newHtmlText+="<td>"+newdata[0].data[i].Amount+"</td>"
newHtmlText+="<td>"+newdata[0].data[i].DCNo+"</td>"
newHtmlText+="<td>"+newdata[0].data[i].Date+"</td>"
newHtmlText+="<td>"+newdata[0].data[i].Items+"</td>"
newHtmlText+="<td>"+newdata[0].data[i].Weights+"</td>"
newHtmlText+="<td>"+newdata[0].data[i].Firmname+"</td>"
newHtmlText+="<td>"+newdata[0].data[i].address+"</td>"
newHtmlText+="<td>"+newdata[0].data[i].Pincode+"</td>"
newHtmlText+="<td>"+newdata[0].data[i].mobile+"</td>"
newHtmlText+="<td>"+newdata[0].data[i].Email+"</td>"
newHtmlText+="<td>"+newdata[0].data[i].Name+"</td>"
newHtmlText+="<td>"+newdata[0].data[i].Person+"</td>"
// newHtmlText+="<td>"+newdata[0].data[i].inTime +"</td>"
newHtmlText+="</tr>";
}
document.getElementById('newpage').innerHTML=newHtmlText;
}
           