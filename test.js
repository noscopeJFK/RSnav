//if its not breakfast time, click mains

if ($("#lblMealTimeName:contains('Lunch')").length || $("#lblMealTimeName:contains('Dinner')").length) {
 
 $("#ComponentGroupButton_33").click();
}

