import { StylesManager } from 'survey-core';

const survey_en = new Survey.Model(json_en);
survey_en.StylesManager.applyTheme("bootstrap");
survey_en.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
});

$("#surveyElement_en").Survey({ model: survey_en });