console.log('WORKING')
var dayCount = 8
var dayArray = []
var oneRideN= 3.50
var oneRide = oneRideN.toFixed(2)
var express= 3.00
const nameDays = function() {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  for (l = 0; l < 7; l++) {
    $(`#day${l}`).append(`<p class='daylabel'>${days[l]}</p>`)
  }
}
  for(i = 0; i < 7; i++) {
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
  $('.ridesForDay').append("<option value='more'>more</option>")
if (dayCount > 7){
  for(m = 1; m < 4; m++) {
    $('.tableContainer').append(`<div class="table${m} table"></div>`)

      for(i = 0; i < 7; i++) {
    $(`.table${m}`).append(`<div class="day day${i}"></div>`)
    }
     $(`.table${m}`).append(`<div class="weeklyTotalDiv" id="weeklyTotal${m}"><p>Weekly Total:</p><p class="weeklyTotal"></p></div>`)
  $(`.table${m}`).append(`<div class="costOfWeeklyDiv" id="costOfWeekly${m}"><p>Cost of Weekly Pass:</p><p class="costOfWeekly"></p></div>`)
  }

}
$('select').on('change', function () {
  $val = parseInt($(this).val())
  $(this).parent().find('.moneyDiv').remove()
  $(this).parent().find('.columnTotalDiv').remove()

  /*let $val = parseInt($(this).val())*/
  for (k = 0; k < $val; k++){
    $(this).parent().append(`<div class="moneyDiv"><p class ="money decimal">${oneRide}</p><input type="checkbox" name="transfer" value="0.25">trans<input type="checkbox" name="express" value="3.00">exp</div>`)
    }
  var column = $(this).parent()
  var dayTotal1 = columnTotal(column)
  weeklyTotal(column)
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

/*`<form><select class="ridesForDay" id="ride${index}" name="rideSelector" size="12"><option value="0">0</option></select></form>`)*/
