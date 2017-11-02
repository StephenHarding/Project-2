console.log('WORKING')
$('.a').hide()

var dayCount = 8
var dayArray = []

for(i = 0; i < 30; i++) {
  dayArray.push(0)
}
console.log(dayArray)
var transfer = (parseInt($('.transfer').html())).toFixed(2)
var oneRideN= (parseInt($('.oneRide').html()))
var oneRide = oneRideN.toFixed(2)
var express= (parseInt($('.downtownExpress').html())).toFixed(2)
var oneDayPass= (parseInt($('.oneDayPass').html())).toFixed(2)
var threeDayPass= (parseInt($('.threeDayPass').html())).toFixed(2)
var sevenDayPass= (parseInt($('.sevenDaypass').html())).toFixed(2)
var thirtyDayPass= (parseInt($('.thirtyDayPass').html())).toFixed(2)

const nameDays = function() {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  for (l = 0; l < 7; l++) {
    console.log('day naming active')
    $(`#${l}`).prepend(`<p class='daylabel'>${days[l]}</p>`)
  }
}
/*  for(i = 0; i < 7; i++) {
    $('.table0').append(`<div class="day day${i}"></div>`)
  }
  $('.table0').append('<div class="weeklyTotalDiv" id="weeklyTotal1"><p>Weekly Total:</p><p class="weeklyTotal"></p></div>')
  $('.table0').append('<div class="costOfWeeklyDiv" id="costOfWeekly1"><p>Cost of Weekly Pass:</p><p class="costOfWeekly"></p></div>')
  nameDays()
  $('.day').each(function(index){
    $(this).append(`<select class="ridesForDay" id="ride${index}" name="rideSelector" size="1">`)
  })
  for (j = 0; j < 12; j++) {
    $('.ridesForDay').append(`<option value="${j}">${j}</option>`)
  }
  $('.ridesForDay').append("<option value='more'>more</option>")*/
if (dayCount > 7){
  for(m = 0; m < 3; m++) {
    $('.tableContainer').append(`<div class="table${m} table"></div>`)

      for(i = 0; i < 7; i++) {
    $(`.table${m}`).append(`<div class="dayB"></div>`)
    }
   }
   for(m = 0; m < 2; m++) {
     $(`.table${m}`).append(`<div class="weeklyTotalDiv" id="weeklyTotal${m}"><p>Weekly Total:</p><p class="weeklyTotal"></p></div>`)
  $(`.table${m}`).append(`<div class="costOfWeeklyDiv" id="costOfWeekly${m}"><p>Cost of Weekly Pass:</p><p class="costOfWeekly">${sevenDayPass}</p></div>`)
}
$(`.table${m}`).append(`<div class="monthlyTotalDiv" id="monthlyTotal"><p>Montly Total:</p><p class="monthlyTotal"></p></div>`)
$(`.table${m}`).append(`<div class="costOfMonthlyDiv" id="costOfMonthly"><p>Cost of Monthly Pass:</p><p class="costOfMonthly">${thirtyDayPass}</p></div>`)

$('.dayB').each(function(index){
  $(this).addClass(`${index}`)
  $(this).attr("id",`${index}`)
  $(this).append(`<select class="ridesForDayB" id="ride${index}" name="rideSelector" size="1">`)
})
nameDays()
for (w = 0; w < 12; w++) {
    $('.ridesForDayB').append(`<option value="${w}">${w}</option>`)
  }
  if(oneDayPass != 0){
    $('.ridesForDayB').append(`<option value="12">One Day Pass</option>`)
  }
  if(threeDayPass != 0){
    $('.ridesForDayB').append(`<option value="13">Three Day Pass</option>`)
  }
  if(sevenDayPass != 0){
    $('.ridesForDayB').append(`<option value="14">Seven Day Pass</option>`)
  }
}

$('select').on('change', function () {
  $val = parseInt($(this).val())
  $(this).parent().find('.moneyDiv').remove()
  $(this).parent().find('.columnTotalDiv').remove()

  /*let $val = parseInt($(this).val())*/

    if ($val === 12 ){
      console.log('active')
      let div = $(this).parent()
      div.addClass('oneDay')
      dayPasses()
      div.append(`<div class="moneyDiv"><p class ="money decimal">${oneDayPass}</p>`)

    }
    else if ($val === 13){
      let div = $(this).parent()
      div.addClass('threeDay')
      dayPasses()
    div.append(`<div class="moneyDiv"><p class ="money decimal">${threeDayPass}</p></div>`)

    }
    else if ($val === 14){
      let div = $(this).parent()
      div.addClass('sevenDay')
      dayPasses()
      div.append(`<div class="moneyDiv"><p class ="money decimal">${sevenDayPass}</p></div>`)
    }
    else {
      let div = $(this).parent()
      if ($(this).parent().hasClass('threeDay')) {
        $(this).parent().removeClass('threeDay')
      }
      if ($(this).parent().hasClass('sevenDay')) {
        $(this).parent().removeClass('sevenDay')
      }
      for (k = 0; k < $val; k++){

        $(this).parent().append(`<div class="moneyDiv"><p class ="money decimal">${oneRide}</p><input class="transferB" type="checkbox" name="transferB" value="0.25">trans<input type="checkbox" class="express" name="express" value="3.00">exp</div>`)
     }
      }
      dayPasses()
  var column = $(this).parent()
  var dayTotal1 = columnTotal(column)
  weeklyTotal(column)
  monthlyTotal()
  column.append(`<div class="columnTotalDiv"><p>Total:</p><p class ="columnTotal">${dayTotal1}</p></div>`)
})
const columnTotal = function(column) {
  var dayTotal2 = 0
  var money = column.find('.moneyDiv')
  money.each(function(index){
    dayTotal2 += parseFloat($(this).find('.money').html())
  })
  var dayTotal3 = dayTotal2.toFixed(2)
  return dayTotal3
}
const dayPasses = function() {
  console.log("hello")
  dayArray.forEach(function(item){
    item = 0
  })
$('.dayB').each(function(index){
  if($(this).hasClass('threeDayS')) {
    $(this).removeClass('threeDayS')
  }
    if($(this).hasClass('sevenDayS')) {
    $(this).removeClass('sevenDayS')
  }
  if($(this).hasClass('oneDayS')) {
    $(this).removeClass('oneDayS')
  }
})
$('.dayB').each(function(index){
  if ($(this).hasClass('oneDay')) {
    $(this).addClass('oneDayS')
  }
  if ($(this).hasClass('threeDay')) {
    let day = parseInt($(this).attr('id'))
    for( i = day; i < (day + 3); i++){
      $(`#${i}`).addClass('threeDayS')
    }
  }
  if ($(this).hasClass('sevenDay')) {
     let day = parseInt($(this).attr('id'))
     for( i = day; i < (day + 7); i++){
      $(`#${i}`).addClass('sevenDayS')
     }
  }
})


}
const weeklyTotal = function(column){
  let div = column.parent().find('.weeklyTotalDiv')
  let weeklyTotal = 0
  var money = column.parent().find('.money')
    money.each(function() {
      weeklyTotal += parseFloat($(this).html())
    })
    let weeklyTotal2 = weeklyTotal.toFixed(2)
  div.find('.weeklyTotal').html(weeklyTotal2)
}
const monthlyTotal = function() {
  let monthly = 0
$('.money').each(function(){
  monthly += parseFloat($(this).html())
})
 let monthly2 = monthly.toFixed(2)
$('.monthlyTotal').html(monthly2)
}
/* got checkbox method from https://stackoverflow.com/questions/7031226/jquery-checkbox-change-and-click-event */
$('.transferB').change(function () {
  console.log('checked')
  if(this.checked) {
    console.log('checked is working')
    var currentV = 0
    var moneyP = $(this).parent().find('.money')
    currentV = (parseFloat(moneyP.html())).toFixed(2)
    currentV += transfer
    moneyP.html(currentV)
  }
  else {
    var currentV = 0
    var moneyP = $(this).parent().find('.money')
    currentV = (parseFloat(moneyP.html())).toFixed(2)
    currentV -= transfer
    moneyP.html(currentV)
  }
})
/*`<form><select class="ridesForDay" id="ride${index}" name="rideSelector" size="12"><option value="0">0</option></select></form>`)*/
