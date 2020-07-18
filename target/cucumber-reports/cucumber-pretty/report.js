$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("registration_outline.feature");
formatter.feature({
  "line": 2,
  "name": "Title of your feature",
  "description": "I want to use this template for my feature file",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "TO verify whether application allows user to get registered as Student",
  "description": "",
  "id": "title-of-your-feature;to-verify-whether-application-allows-user-to-get-registered-as-student",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@student-outline"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User should have launched the application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Click on Sign Up! link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Courses icon for Student",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter valid credential in first name \"\u003cFirst Name\u003e\" textbox",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter valid credential in last name \"\u003cLast Name\u003e\" textbox",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter valid credential in e-mail \"\u003ce-mail\u003e\" textbox",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enter valid credential in username \"\u003cusername\u003e\" textbox",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Enter valid credential in password \"\u003cpassword\u003e\" textbox",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enter valid credential in confirm password \"\u003cconfirm password\u003e\" textbox",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter valid credential in phone \"\u003cphone\u003e\" textbox",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Selected Valid credentials from Language \"\u003clanguage\u003e\" list box",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate the successful registration message \"\u003cvalidation\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user logs out from the application",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "title-of-your-feature;to-verify-whether-application-allows-user-to-get-registered-as-student;",
  "rows": [
    {
      "cells": [
        "First Name",
        "Last Name",
        "e-mail",
        "username",
        "password",
        "confirm password",
        "phone",
        "language",
        "validation"
      ],
      "line": 24,
      "id": "title-of-your-feature;to-verify-whether-application-allows-user-to-get-registered-as-student;;1"
    },
    {
      "cells": [
        "fname1",
        "lname1",
        "one@one.com",
        "hello501",
        "one",
        "one",
        "123",
        "English",
        "An e-mail has been sent to remind you of your login and password."
      ],
      "line": 25,
      "id": "title-of-your-feature;to-verify-whether-application-allows-user-to-get-registered-as-student;;2"
    },
    {
      "cells": [
        "fname1",
        "lname1",
        "one@one.com",
        "hello502",
        "one",
        "one",
        "123",
        "English",
        "An e-mail has been sent to remind you of your login and password."
      ],
      "line": 26,
      "id": "title-of-your-feature;to-verify-whether-application-allows-user-to-get-registered-as-student;;3"
    },
    {
      "cells": [
        "fname1",
        "lname1",
        "one@one.com",
        "hello503",
        "one",
        "one",
        "123",
        "English",
        "An e-mail has been sent to remind you of your login and password."
      ],
      "line": 27,
      "id": "title-of-your-feature;to-verify-whether-application-allows-user-to-get-registered-as-student;;4"
    },
    {
      "cells": [
        "fname1",
        "lname1",
        "one@one.com",
        "hello504",
        "one",
        "one",
        "123",
        "English",
        "An e-mail has been sent to remind you of your login and password."
      ],
      "line": 28,
      "id": "title-of-your-feature;to-verify-whether-application-allows-user-to-get-registered-as-student;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "TO verify whether application allows user to get registered as Student",
  "description": "",
  "id": "title-of-your-feature;to-verify-whether-application-allows-user-to-get-registered-as-student;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 5,
      "name": "@student-outline"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User should have launched the application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Click on Sign Up! link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Courses icon for Student",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter valid credential in first name \"fname1\" textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter valid credential in last name \"lname1\" textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter valid credential in e-mail \"one@one.com\" textbox",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enter valid credential in username \"hello501\" textbox",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Enter valid credential in password \"one\" textbox",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enter valid credential in confirm password \"one\" textbox",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter valid credential in phone \"123\" textbox",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Selected Valid credentials from Language \"English\" list box",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate the successful registration message \"An e-mail has been sent to remind you of your login and password.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user logs out from the application",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.user_should_have_launched_the_application()"
});
formatter.result({
  "duration": 13816754100,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.click_on_Sign_Up_link()"
});
formatter.result({
  "duration": 4219397500,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.click_on_Courses_icon_for_Student()"
});
formatter.result({
  "duration": 70966200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fname1",
      "offset": 38
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_first_name_textbox(String)"
});
formatter.result({
  "duration": 118241200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lname1",
      "offset": 37
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_last_name_textbox(String)"
});
formatter.result({
  "duration": 107761400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "one@one.com",
      "offset": 34
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_e_mail_textbox(String)"
});
formatter.result({
  "duration": 158186900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hello501",
      "offset": 36
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_username_textbox(String)"
});
formatter.result({
  "duration": 101345600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "one",
      "offset": 36
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_password_textbox(String)"
});
formatter.result({
  "duration": 88759000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "one",
      "offset": 44
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_confirm_password_textbox(String)"
});
formatter.result({
  "duration": 84075300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 33
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_phone_textbox(String)"
});
formatter.result({
  "duration": 79655500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "English",
      "offset": 42
    }
  ],
  "location": "Registration_Excel_StepDefinition.selected_Valid_credentials_from_Language_list_box(String)"
});
formatter.result({
  "duration": 262506400,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.click_on_Register_button()"
});
formatter.result({
  "duration": 2360983500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An e-mail has been sent to remind you of your login and password.",
      "offset": 46
    }
  ],
  "location": "Registration_Excel_StepDefinition.Validate_the_successful_registration_message(String)"
});
formatter.result({
  "duration": 36000200,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.user_clicks_on_Sign_Up_link()"
});
formatter.result({
  "duration": 1315920200,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.user_close_the_browser()"
});
formatter.result({
  "duration": 747825700,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "TO verify whether application allows user to get registered as Student",
  "description": "",
  "id": "title-of-your-feature;to-verify-whether-application-allows-user-to-get-registered-as-student;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 5,
      "name": "@student-outline"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User should have launched the application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Click on Sign Up! link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Courses icon for Student",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter valid credential in first name \"fname1\" textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter valid credential in last name \"lname1\" textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter valid credential in e-mail \"one@one.com\" textbox",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enter valid credential in username \"hello502\" textbox",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Enter valid credential in password \"one\" textbox",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enter valid credential in confirm password \"one\" textbox",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter valid credential in phone \"123\" textbox",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Selected Valid credentials from Language \"English\" list box",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate the successful registration message \"An e-mail has been sent to remind you of your login and password.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user logs out from the application",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.user_should_have_launched_the_application()"
});
formatter.result({
  "duration": 13042880400,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.click_on_Sign_Up_link()"
});
formatter.result({
  "duration": 4052742700,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.click_on_Courses_icon_for_Student()"
});
formatter.result({
  "duration": 79461600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fname1",
      "offset": 38
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_first_name_textbox(String)"
});
formatter.result({
  "duration": 102913700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lname1",
      "offset": 37
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_last_name_textbox(String)"
});
formatter.result({
  "duration": 114828600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "one@one.com",
      "offset": 34
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_e_mail_textbox(String)"
});
formatter.result({
  "duration": 169531400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hello502",
      "offset": 36
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_username_textbox(String)"
});
formatter.result({
  "duration": 98292600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "one",
      "offset": 36
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_password_textbox(String)"
});
formatter.result({
  "duration": 93929300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "one",
      "offset": 44
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_confirm_password_textbox(String)"
});
formatter.result({
  "duration": 79298900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 33
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_phone_textbox(String)"
});
formatter.result({
  "duration": 76271500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "English",
      "offset": 42
    }
  ],
  "location": "Registration_Excel_StepDefinition.selected_Valid_credentials_from_Language_list_box(String)"
});
formatter.result({
  "duration": 249903800,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.click_on_Register_button()"
});
formatter.result({
  "duration": 2530524700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An e-mail has been sent to remind you of your login and password.",
      "offset": 46
    }
  ],
  "location": "Registration_Excel_StepDefinition.Validate_the_successful_registration_message(String)"
});
formatter.result({
  "duration": 45384900,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.user_clicks_on_Sign_Up_link()"
});
formatter.result({
  "duration": 1250085100,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.user_close_the_browser()"
});
formatter.result({
  "duration": 650942200,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "TO verify whether application allows user to get registered as Student",
  "description": "",
  "id": "title-of-your-feature;to-verify-whether-application-allows-user-to-get-registered-as-student;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 5,
      "name": "@student-outline"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User should have launched the application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Click on Sign Up! link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Courses icon for Student",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter valid credential in first name \"fname1\" textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter valid credential in last name \"lname1\" textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter valid credential in e-mail \"one@one.com\" textbox",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enter valid credential in username \"hello503\" textbox",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Enter valid credential in password \"one\" textbox",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enter valid credential in confirm password \"one\" textbox",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter valid credential in phone \"123\" textbox",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Selected Valid credentials from Language \"English\" list box",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate the successful registration message \"An e-mail has been sent to remind you of your login and password.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user logs out from the application",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.user_should_have_launched_the_application()"
});
formatter.result({
  "duration": 12625144400,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.click_on_Sign_Up_link()"
});
formatter.result({
  "duration": 4161840200,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.click_on_Courses_icon_for_Student()"
});
formatter.result({
  "duration": 81600200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fname1",
      "offset": 38
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_first_name_textbox(String)"
});
formatter.result({
  "duration": 135371100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lname1",
      "offset": 37
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_last_name_textbox(String)"
});
formatter.result({
  "duration": 120901500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "one@one.com",
      "offset": 34
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_e_mail_textbox(String)"
});
formatter.result({
  "duration": 145624700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hello503",
      "offset": 36
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_username_textbox(String)"
});
formatter.result({
  "duration": 110440300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "one",
      "offset": 36
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_password_textbox(String)"
});
formatter.result({
  "duration": 97692800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "one",
      "offset": 44
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_confirm_password_textbox(String)"
});
formatter.result({
  "duration": 103241300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 33
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_phone_textbox(String)"
});
formatter.result({
  "duration": 252618500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "English",
      "offset": 42
    }
  ],
  "location": "Registration_Excel_StepDefinition.selected_Valid_credentials_from_Language_list_box(String)"
});
formatter.result({
  "duration": 306494400,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.click_on_Register_button()"
});
formatter.result({
  "duration": 2498283400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An e-mail has been sent to remind you of your login and password.",
      "offset": 46
    }
  ],
  "location": "Registration_Excel_StepDefinition.Validate_the_successful_registration_message(String)"
});
formatter.result({
  "duration": 45913500,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.user_clicks_on_Sign_Up_link()"
});
formatter.result({
  "duration": 1360495900,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.user_close_the_browser()"
});
formatter.result({
  "duration": 766502400,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "TO verify whether application allows user to get registered as Student",
  "description": "",
  "id": "title-of-your-feature;to-verify-whether-application-allows-user-to-get-registered-as-student;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@tag"
    },
    {
      "line": 5,
      "name": "@student-outline"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User should have launched the application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Click on Sign Up! link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click on Courses icon for Student",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter valid credential in first name \"fname1\" textbox",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter valid credential in last name \"lname1\" textbox",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter valid credential in e-mail \"one@one.com\" textbox",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Enter valid credential in username \"hello504\" textbox",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Enter valid credential in password \"one\" textbox",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Enter valid credential in confirm password \"one\" textbox",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Enter valid credential in phone \"123\" textbox",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Selected Valid credentials from Language \"English\" list box",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate the successful registration message \"An e-mail has been sent to remind you of your login and password.\"",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "user logs out from the application",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.user_should_have_launched_the_application()"
});
formatter.result({
  "duration": 13816488100,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.click_on_Sign_Up_link()"
});
formatter.result({
  "duration": 4468615800,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.click_on_Courses_icon_for_Student()"
});
formatter.result({
  "duration": 81587900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fname1",
      "offset": 38
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_first_name_textbox(String)"
});
formatter.result({
  "duration": 129073600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lname1",
      "offset": 37
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_last_name_textbox(String)"
});
formatter.result({
  "duration": 97663600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "one@one.com",
      "offset": 34
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_e_mail_textbox(String)"
});
formatter.result({
  "duration": 108989700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hello504",
      "offset": 36
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_username_textbox(String)"
});
formatter.result({
  "duration": 101297700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "one",
      "offset": 36
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_password_textbox(String)"
});
formatter.result({
  "duration": 91705900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "one",
      "offset": 44
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_confirm_password_textbox(String)"
});
formatter.result({
  "duration": 83261400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 33
    }
  ],
  "location": "Registration_Excel_StepDefinition.enter_valid_credential_in_phone_textbox(String)"
});
formatter.result({
  "duration": 114566500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "English",
      "offset": 42
    }
  ],
  "location": "Registration_Excel_StepDefinition.selected_Valid_credentials_from_Language_list_box(String)"
});
formatter.result({
  "duration": 280700600,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.click_on_Register_button()"
});
formatter.result({
  "duration": 2462464400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An e-mail has been sent to remind you of your login and password.",
      "offset": 46
    }
  ],
  "location": "Registration_Excel_StepDefinition.Validate_the_successful_registration_message(String)"
});
formatter.result({
  "duration": 36282100,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.user_clicks_on_Sign_Up_link()"
});
formatter.result({
  "duration": 1228768200,
  "status": "passed"
});
formatter.match({
  "location": "Registration_Excel_StepDefinition.user_close_the_browser()"
});
formatter.result({
  "duration": 760479700,
  "status": "passed"
});
});