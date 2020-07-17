@tag
Feature: Sign up for new registration
  I want to sign up as a Student and as a Teacher

  @tag1
  Scenario: TO verify whether application allows user to get registered as Student
    Given User should have launched the application
    When Click on Sign Up! link
    And Click on Courses icon
    And Enter valid credential in first name "one" textbox
    And Enter valid credential in last name "one" textbox
    And Enter valid credential in e-mail "one@one.com" textbox
    And Enter valid credential in username "one7" textbox
    And Enter valid credential in password "one" textbox
    And Enter valid credential in confirm password "one" textbox
    And Enter valid credential in phone "123" textbox
    And Selected Valid credentials from Language "English" list box
    And Click on Register button
    Then Varidate the successful registration message "Registration"
		
		