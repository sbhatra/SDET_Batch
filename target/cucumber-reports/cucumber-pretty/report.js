$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("registration_excel.feature");
formatter.feature({
  "line": 2,
  "name": "Sign up for new registration",
  "description": "I want to sign up as a Student and as a Teacher",
  "id": "sign-up-for-new-registration",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 24,
  "name": "TO verify whether application allows user to get registered as Teacher",
  "description": "",
  "id": "sign-up-for-new-registration;to-verify-whether-application-allows-user-to-get-registered-as-teacher",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@teacher-excel"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "User should have launched the application",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Click on Sign Up! link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "Click on Courses icon for Teacher",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enter valid credential in first name textbox",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Enter valid credential in last name textbox",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Enter valid credential in e-mail textbox",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "Enter valid credential in username textbox",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "Enter valid credential in password textbox",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Enter valid credential in confirm password textbox",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Enter valid credential in phone textbox",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Selected Valid credentials from Language list box",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Validate the successful registration message",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "user logs out from the application",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.user_should_have_launched_the_application()"
});
formatter.result({
  "duration": 12525593000,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.click_on_Sign_Up_link()"
});
formatter.result({
  "duration": 2228784500,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.click_on_Courses_icon_for_Teacher()"
});
formatter.result({
  "duration": 87655700,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_first_name_textbox()"
});
formatter.result({
  "duration": 917169900,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_last_name_textbox()"
});
formatter.result({
  "duration": 207259600,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_e_mail_textbox()"
});
formatter.result({
  "duration": 289128200,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_username_textbox()"
});
formatter.result({
  "duration": 152833200,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_password_textbox()"
});
formatter.result({
  "duration": 160233300,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_confirm_password_textbox()"
});
formatter.result({
  "duration": 149687500,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_phone_textbox()"
});
formatter.result({
  "duration": 149797600,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.selected_Valid_credentials_from_Language_list_box()"
});
formatter.result({
  "duration": 301008600,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.click_on_Register_button()"
});
formatter.result({
  "duration": 2394479300,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.Validate_the_successful_registration_message()"
});
formatter.result({
  "duration": 63110300,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.user_clicks_on_Sign_Up_link()"
});
formatter.result({
  "duration": 1329683200,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.user_close_the_browser()"
});
formatter.result({
  "duration": 730949700,
  "status": "passed"
});
});