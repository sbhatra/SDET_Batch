@tag
Feature: Sign up for new registration
  I want to sign up as a Student and as a Teacher

  @tag3
  Scenario: TO verify whether application allows user to get registered as Student
    Given User should have launched the application
    When Click on Sign Up! link
    And Click on Courses icon
    And Enter valid credential in first name textbox
    And Enter valid credential in last name textbox
    And Enter valid credential in e-mail textbox
    And Enter valid credential in username textbox
    And Enter valid credential in password textbox
    And Enter valid credential in confirm password textbox
    And Enter valid credential in phone textbox
    And Selected Valid credentials from Language list box
    And Click on Register button
    Then Varidate the successful registration message
		
		