const survey = new Survey.Model(json_de);
survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
});

# $("#surveyElement_de").Survey({ model: survey });
$("#surveyElement_de").PopupSurvey({ model: survey, isExpanded: true });