function putData(){
    if(document.getElementById("BillNo").value.trim().length !== 0){
        inward_bill_no = document.getElementById("BillNo").value;
        document.getElementById("BillNo").style.border = "";
        document.getElementById("smallBillNo").style.display ="none";
    }
    else{
        document.getElementById("BillNo").style.border = "1px solid red";
        document.getElementById("smallBillNo").style.display = "block";
        document.getElementById("smallBillNo").style.color = "red";
        return false;
    }
    if(document.getElementById("Date").value.trim().length !== 0){
        inward_bill_date = document.getElementById("Date").value;
        document.getElementById("smallDate").style.border = "";
        document.getElementById("smallDate").style.display ="none";
    }
    else{
        document.getElementById("Date").style.border = "1px solid red";
        document.getElementById("smallDate").style.display = "block";
        document.getElementById("smallDate").style.color = "red";
        return false;
    }
    if(document.getElementById("DCNo").value.trim().length !== 0){
        delivery_challan_no = document.getElementById("DCNo").value;
        document.getElementById("smallDCNo").style.border = "";
        document.getElementById("smallDCNo").style.display ="none";
    }
    else{
        document.getElementById("DCNo").style.border = "1px solid red";
        document.getElementById("smallDCNo").style.display = "block";
        document.getElementById("smallDCNo").style.color = "red";
        return false;
    }
    if(document.getElementById("Date1").value.trim().length !== 0){
        delivery_challan_date = document.getElementById("Date1").value;
        document.getElementById("smallDate1").style.border = "";
        document.getElementById("smallDate1").style.display ="none";
    }
    else{
        document.getElementById("Date1").style.border = "1px solid red";
        document.getElementById("smallDate1").style.display = "block";
        document.getElementById("smallDate1").style.color = "red";
        return false;
    }
    if(document.getElementById("Items").value.trim().length !== 0){
        total_no_of_items = document.getElementById("Items").value;
        document.getElementById("smallItems").style.border = "";
        document.getElementById("smallItems").style.display ="none";
      }
      else{
        document.getElementById("Items").style.border = "1px solid red";
        document.getElementById("smallItems").style.display = "block";
        document.getElementById("smallItems").style.color = "red";
        return false;
      }
      if(document.getElementById("Weights").value.trim().length !== 0){
        total_no_of_weights = document.getElementById("Weights").value;
        document.getElementById("smallWeights").style.border = "";
        document.getElementById("smallWeights").style.display ="none";
      }
      else{
        document.getElementById("Weights").style.border = "1px solid red";
        document.getElementById("smallWeights").style.display = "block";
        document.getElementById("smallWeights").style.color = "red";
        return false;
      }
    if(document.getElementById("Amount").value.trim().length !== 0){
      bill_amount = document.getElementById("Amount").value;
      document.getElementById("smallAmount").style.border = "";
      document.getElementById("smallAmount").style.display ="none";
    }
    else{
      document.getElementById("Amount").style.border = "1px solid red";
      document.getElementById("smallAmount").style.display = "block";
      document.getElementById("smallAmount").style.color = "red";
      return false;
    }
    if(document.getElementById("Firmname").value.trim().length !== 0){
        supplier_firm_name = document.getElementById("Firmname").value;
        document.getElementById("smallFirmname").style.border = "";
        document.getElementById("smallFirmname").style.display ="none";
      }
      else{
        document.getElementById("Firmname").style.border = "1px solid red";
        document.getElementById("smallFirmname").style.display = "block";
        document.getElementById("smallFirmname").style.color = "red";
        return false;
      }
      if(document.getElementById("address").value.trim().length !== 0){
        supplier_address = document.getElementById("address").value;
        document.getElementById("smalladdress").style.border = "";
        document.getElementById("smalladdress").style.display ="none";
      }
      else{
        document.getElementById("address").style.border = "1px solid red";
        document.getElementById("smalladdress").style.display = "block";
        document.getElementById("smalladdress").style.color = "red";
        return false;
      }
      if(document.getElementById("Pincode").value.trim().length !== 0){
        supplier_pincode = document.getElementById("Pincode").value;
        document.getElementById("smallPincode").style.border = "";
        document.getElementById("smallPincode").style.display ="none";
      }
      else{
        document.getElementById("Pincode").style.border = "1px solid red";
        document.getElementById("smallPincode").style.display = "block";
        document.getElementById("smallPincode").style.color = "red";
        return false;
      }
      if(document.getElementById("mobile").value.trim().length !== 0){
        supplier_contact_no = document.getElementById("mobile").value;
        document.getElementById("smallmobile").style.border = "";
        document.getElementById("smallmobile").style.display ="none";
      }
      else{
        document.getElementById("mobile").style.border = "1px solid red";
        document.getElementById("smallmobile").style.display = "block";
        document.getElementById("smallmobile").style.color = "red";
        return false;
      }
      if(document.getElementById("Email").value.trim().length !== 0){
        supplier_email = document.getElementById("Email").value;
        document.getElementById("smallEmail").style.border = "";
        document.getElementById("smallEmail").style.display ="none";
      }
      else{
        document.getElementById("Email").style.border = "1px solid red";
        document.getElementById("smallEmail").style.display = "block";
        document.getElementById("smallEmail").style.color = "red";
        return false;
      }
      if(document.getElementById("Name").value.trim().length !== 0){
        supplier_contact_person = document.getElementById("Name").value;
        document.getElementById("smallName").style.border = "";
        document.getElementById("smallName").style.display ="none";
      }
      else{
        document.getElementById("Name").style.border = "1px solid red";
        document.getElementById("smallName").style.display = "block";
        document.getElementById("smallName").style.color = "red";
        return false;
      }
    if(document.getElementById("Person").value.trim().length !== 0){
        material_received_by = document.getElementById("Person").value;
        document.getElementById("smallPerson").style.border = "";
        document.getElementById("smallPerson").style.display ="none";
    }
    else{
        document.getElementById("Person").style.border = "1px solid red";
        document.getElementById("smallPerson").style.display = "block";
        document.getElementById("smallPerson").style.color = "red";
        return false;
    }
    debugger
    if(document.getElementById("KG").checked){
      var unit="Kilogram"
    }else if(document.getElementById("Gram").checked){
      var unit="gram"
    }else{
      var unit="not checked anything"
    }
   

  formData={
    "inward_bill_no": inward_bill_no,
    "inward_bill_date": inward_bill_date, 
    "bill_amount": bill_amount,
    "delivery_challan_no": delivery_challan_no,
    "delivery_challan_date": delivery_challan_date,
    "total_no_of_items": total_no_of_items,
    "total_no_of_weights": `${total_no_of_weights}  ${unit}`,
    "supplier_firm_name": supplier_firm_name,
    "supplier_address": supplier_address,
    "supplier_pincode": supplier_pincode,
    "supplier_contact_no": supplier_contact_no,
    "supplier_email": supplier_email,
    "supplier_contact_person": supplier_contact_person,
    "material_received_by": material_received_by
  }
  cloud.collection("visitors").add(formData)
  window.open("./Report.html")
}
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      const firebaseConfig = {
        apiKey: "AIzaSyBm_ZriqGVtpi8dbjUY2tPwLrrK8TgSzlY",
        authDomain: "gems-6ec50.firebaseapp.com",
        projectId: "gems-6ec50",
        storageBucket: "gems-6ec50.appspot.com",
        messagingSenderId: "696389407711",
        appId: "1:696389407711:web:39d55390ebfe8c7fe8ea6a",
        measurementId: "G-8N11350729"
      };
      firebase.initializeApp(firebaseConfig)
      var cloud = firebase.firestore();
      getdata()
      function getdata() {debugger

      cloud.collection("visitors").onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
          items.push(doc.data());
      });
      var datahtml="";
      items.forEach(e=>{
         datahtml+="<tr>"+
                "<td>"+e.inward_bill_no+"</td>"+ 
                "<td>"+e.inward_bill_date+"</td>"+ 
                "<td>"+e.bill_amount+"</td>"+ 
                "<td>"+e.delivery_challan_no+"</td>"+ 
                "<td>"+e.delivery_challan_date+"</td>"+ 
                "<td>"+e.total_no_of_items+"</td>"+ 
                "<td>"+e.total_no_of_weights+"</td>"+ 
                "<td>"+e.supplier_firm_name+"</td>"+ 
                "<td>"+e.supplier_address+"</td>"+ 
                "<td>"+e.supplier_pincode+"</td>"+ 
                "<td>"+e.supplier_contact_no+"</td>"+ 
                "<td>"+e.supplier_email+"</td>"+ 
                "<td>"+e.supplier_contact_person+"</td>"+ 
                "<td>"+e.material_received_by+"</td>"+ 
                "</tr>"
})

document.getElementById("tData").innerHTML=datahtml;

});
}
