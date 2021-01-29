 // for shopping cart
         // to see whether plus button working or not
         document.getElementById('clickPlus').addEventListener('click', function(){
            console.log('plus clicked');
            // to capture plus button(value)
            const phoneInput = document.getElementById('phoneCount');
            // to get the value as a integer number
            const count =parseInt(phoneInput.value);
            // to increase the counting number
            const newCount= count+1;
            // to show the increase value
            phoneInput.value = newCount;
            console.log(count);
            // to capture the price unit
            const phoneTotal = newCount * 1219;
            // to show the price unit
            document.getElementById('phoneTotal').innerText =phoneTotal;
            
         })

         document.getElementById('clickMinus').addEventListener('click', function(){
            console.log('minus clicked');
            const phoneInput = document.getElementById('phoneCount');
            const count =parseInt(phoneInput.value);
            const newCount= count-1;
            phoneInput.value = newCount;
            const phoneTotal = newCount * 1219;
            document.getElementById('phoneTotal').innerText =phoneTotal; 
            
         })
        
         //  to see whether the plus button working or not 
      document.getElementById('caseIncrease').addEventListener('click', function(){
         console.log('plus clicked');
         // to capture the plus sign (value)
         const caseInput = document.getElementById('caseCount');
         // to get the value as a Integer number using parseInt 
         const count =parseInt(caseInput.value);
         console.log(count);
         // to increase the counting number
         const newCount = count+1;
         // to show the increase value
         caseInput.value = newCount;
         // to capture the price unit
         const caseTotal = newCount * 59;
        // to set the price unit 
       //  .inner text is ('caseTotal')s value here
         document.getElementById('caseTotal').innerText =caseTotal;
         
      }) 
         
      document.getElementById('caseDecrease').addEventListener('click', function(){
         console.log('minus clicked');
       const caseInput = document.getElementById('caseCount');
       const count = parseInt(caseInput.value);
       console.log(count);
       const newCount = count-1;
       caseInput.value = newCount;
       const caseTotal = newCount * 59;
       document.getElementById('caseTotal').innerText =caseTotal;
       
       
      })
      function calculateTotal(){
         const phoneInput = document.getElementById('phoneCount');
         const phoneCount =parseInt('phoneInput'.value);
   
         const caseInput = document.getElementById('caseCount');
         const caseCount =parseInt('caseInput'.value);
   
         const totalPrice = phoneCount*1219 + caseCount*59;
         document.getElementById('totalPrice').innerText = totalPrice;
   
         }
         
        function handleProductChange(isIncrease){
         const caseInput = document.getElementById('caseCount');
         const caseCount =parseInt(caseInput.value);
         let newCount = caseCount;
         if (isIncrease== true){
            newCount = caseCount+1;
         }
         if (isIncrease== false){
            newCount = caseCount-1;
         }
         caseInput.value = newCount;
         const caseTotal = newCount *59;
         document.getElementById('caseTotal').innerText =caseTotal;
         calculateTotal()
        }

      //  not working 
        function handleProductChange(product, isIncrease){
         const productInput = document.getElementById(product+' Count');
         const productCount =parseInt(productInput.value);
         let productNewCount = productCount;
         if (isIncrease== true){
            productNewCount = productCount+1;
         }
         if (isIncrease== false){
            productNewCount = productCount-1;
         }
         productInput.value = productNewCount;
         // const productTotal = productNewCount *59;
         let productTotal = 0;
         if (product =='phone'){
            productTotal = productNewCount *1219;
         }
         if (product =='case'){
            productTotal = productNewCount *59;
         }
         document.getElementById(product+' Total').innerText =productTotal;
         calculateTotal()
        }