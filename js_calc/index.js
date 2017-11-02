var v = (function(cont){
// console.log('view');
function q1(a){return document.querySelector(a)}
function q2(a){return document.querySelectorAll(a)}
var allEl = q1("#calc").children;
    
var inputs = {};
inputs.calc                = q1("#calc");
inputs.z_type              = q1("#z_type");
inputs.z_lenght            = q1("#z_lenght");
inputs.prof                = q1("#prof");
inputs.three_D             = q1("#three_D");
inputs.zabor1              = q1("#zabor1");
inputs.zabor2              = q1("#zabor2");
inputs.zabor3              = q1("#zabor3");
inputs.v_type              = q1("#v_type");
inputs.none                = q1("#none");
inputs.v_height_raspashnie = q1("#v_height_raspashnie");
inputs.v_height_otkatnie   = q1("#v_height_otkatnie");
inputs.kalitka             = q1("#kalitka");
inputs.z_image             = q1("#z_image");
inputs.z_images            = ['http://u8.platformalp.ru/s/31k5q9b061/685a22f80fa6abffcaad69954807bff9/e2b9af06cd29da38db9b46511c637e3b.png',

'http://u8.platformalp.ru/s/21cs964061/685a22f80fa6abffcaad69954807bff9/ce5232e0d4d31f2624fdab0dd31315fb.png',

'http://u8.platformalp.ru/s/21719oe061/685a22f80fa6abffcaad69954807bff9/e8a38144108eefe960b544ec9ab253f8.png'];
inputs.form                = q1("form[data-form*='Калькулятор_']");
inputs.z_result            = q1("#z_result");


return {
    allEl:allEl,
    inputs: inputs,
    q1:q1,
    q2:q2,
}
})(c)



var c = (function(view){
// console.log('controller');
 
// functions
var z_showTypeProperHeight = function () {
    function show(a) {view.inputs[a].style.display = 'block'}
    let type = view.inputs.z_type.value;
    let tohide = [
                    view.inputs.prof,
                    view.inputs.three_D,
                    view.inputs.zabor1,
                    view.inputs.zabor2,
                    view.inputs.zabor3
                ];
        tohide.forEach(function(a){a.style.display = 'none'})
   
    switch(type){
        case "prof":
            show("prof");
            view.inputs.z_image.style.backgroundImage = "url("+view.inputs.z_images[0]+")";
            break;
        case "three_D":
            show("three_D");
            view.inputs.z_image.style.backgroundImage = "url("+view.inputs.z_images[1]+")";
            break;
        case "zabor1":
            show("zabor1");
            view.inputs.z_image.style.backgroundImage = "url("+view.inputs.z_images[2]+")";
            break;
        case "zabor2":
            show("zabor2");
            view.inputs.z_image.style.backgroundImage = "url("+view.inputs.z_images[2]+")";
            break;
        case "zabor3":
            show("zabor3");
            view.inputs.z_image.style.backgroundImage = "url("+view.inputs.z_images[2]+")";
            break;
    }
    
    
}
var v_showTypeProperHeight = function (){
    function show(a) {view.inputs[a].style.display = 'block'}
    let type = view.inputs.v_type.value;
    let tohide = [
                    view.inputs.none,
                    view.inputs.v_height_raspashnie,
                    view.inputs.v_height_otkatnie
                ];
    tohide.forEach(function(a){a.style.display = 'none'})

    
    
        switch(type){
        case "none":
           view.inputs.none.style.display = 'block'
            break;
        case "v_height_otkatnie":
           view.inputs.v_height_otkatnie.style.display = 'block'
            break;
        case "v_height_raspashnie":
           view.inputs.v_height_raspashnie.style.display = 'block'

            break;
    }
}
var z_summery = function () {
    let z_lenght = view.inputs.z_lenght.value || 0;
    let z_height = view.inputs[view.inputs.z_type.value].value || 0;
    let z_sum = parseFloat(z_height) * parseFloat(z_lenght);
//    console.log('z_lenght:', z_lenght);
//    console.log('z_height:', z_height);
//    console.log('z_summery:', z_sum);
    return z_sum;
}
var v_summery = function () {
    let kalitka = view.inputs.kalitka.checked? view.inputs.kalitka.value : 0;
    let v_height = view.inputs[view.inputs.v_type.value].value || 0;
    let v_sum = parseFloat(kalitka) + parseFloat(v_height);
    
//    console.log('kalitka:', parseFloat(kalitka) );
//    console.log('v_height:',  parseFloat(v_height) );
//    console.log('v_summery:', v_sum);
    return v_sum;
}
var summeryAll = function() {
    let all = z_summery() + v_summery();
    console.log('all:', all);
    return all;
}
var forSubmitCalculator = function (ztype,
                                     zlength,
                                     zheight,
                                     vtype,
                                     vheight,
                                     zkalitka,
                                     price) {
  var field_arr = v.q2("form[data-form*='Калькулятор_'] .field input"),
      arr = [field_arr[0].value,field_arr[1].value, ztype, zlength, zheight, vtype, vheight, zkalitka, price],
      counter = 0;
        field_arr.forEach(function(a) {  console.log(a.value = arr[counter++])}) 
}
var to_send = function () {
    var z_type_temp      = view.inputs.z_type.value;
    var z_lenght         = view.inputs.z_lenght.value;
    var z_height         = view.inputs[v.inputs.z_type.value].value;
    var v_type           = view.inputs.v_type.value;
    var v_height         = view.inputs[v.inputs.v_type.value].value;
    var kalitka          = view.inputs.kalitka.checked? view.inputs.kalitka.value : 0;
    var summery          = view.inputs.z_result.value;
    
    v_type = v_type == "v_height_raspashnie" ? "Ворота распашные" :
             v_type == "v_height_otkatnie" ? "Ворота откатные" : 0;
    
    var z_type = z_type_temp == "prof"    ? "Профнастил" :
                 z_type_temp == "three_D" ? "3D панель"  :
                 z_type_temp == "zabor1"  ? "Забор из сетки (Размер 50x100)"  :
                 z_type_temp == "zabor2"  ? "Забор из сетки (Размер 50x63)"  :
                 z_type_temp == "zabor3"  ? "Забор из сетки (Размер 50x50)"  :    0;
    
    
    var sendObj = {
              z_type    :  z_type,
              z_lenght  :  z_lenght,
              z_height  :  z_height,
              v_type    :  v_type,
              v_height  :  v_height,
              kalitka   :  kalitka,
              summery   :  summery
            };
    
    var sendArr = [z_type,
                   z_lenght,
                   z_height,
                   v_type,
                   v_height,
                   kalitka,
                   summery];

    return sendObj;
}


z_showTypeProperHeight();
v_showTypeProperHeight();
view.inputs.z_result.value = summeryAll();

// listeners
document.addEventListener("click", function () {
view.inputs.z_result.value = summeryAll();
z_showTypeProperHeight();
v_showTypeProperHeight();
})
    
view.inputs.calc.addEventListener("keyup", function () {
view.inputs.z_result.value = summeryAll();
z_showTypeProperHeight();
v_showTypeProperHeight();
})
    
if(view.inputs.form){
view.inputs.form.addEventListener("click", function () {
    var data = to_send();
    forSubmitCalculator(
data.z_type,
data.z_lenght,
data.z_height,
data.v_type,
data.v_height,
data.kalitka,
data.summery
    );
})
    }
return {
    viewEl:view.allEl,
    inputs: view.inputs,
    summery: summeryAll,
    sendMe: to_send
}
})(v)
   let site_width = function () { $("body").width() };
    function removeDublicate() { 
        site_width < 750? view.q2("#calc")[0].remove() : view.q2("#calc")[1].remove();
    }
    if($ != undefined) {
    $("body").on('resize', removeDublicate());
    }