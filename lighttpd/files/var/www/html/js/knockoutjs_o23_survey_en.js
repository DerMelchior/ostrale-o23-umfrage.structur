const survey = new Survey.SurveyModel(json);
survey.onComplete.add((sender, options) => {
    console.log("Ball: "+JSON.stringify(sender.data, null, 3));
});
/*
ko.applyBindings({
    model: survey_en
}, document.getElementById("surveyElement_en"));
*/
