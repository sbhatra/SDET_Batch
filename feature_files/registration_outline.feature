@tag
Feature: Title of your feature
  I want to use this template for my feature file

  @student-outline
  Scenario Outline: TO verify whether application allows user to get registered as Student
    Given User should have launched the application
    When Click on Sign Up! link
    And Click on Courses icon for Student
    And Enter valid credential in first name "<First Name>" textbox
    And Enter valid credential in last name "<Last Name>" textbox
    And Enter valid credential in e-mail "<e-mail>" textbox
    And Enter valid credential in username "<username>" textbox
    And Enter valid credential in password "<password>" textbox
    And Enter valid credential in confirm password "<confirm password>" textbox
    And Enter valid credential in phone "<phone>" textbox
    And Selected Valid credentials from Language "<language>" list box
    And Click on Register button
    Then Validate the successful registration message "<validation>"
    And user logs out from the application
    And user close the browser

    Examples: 
      | First Name | Last Name | e-mail      | username | password | confirm password | phone | language | validation |
      | fname1     | lname1    | one@one.com | hello701   | one      | one              |   123 | English  | An e-mail has been sent to remind you of your login and password. |
      | fname1     | lname1    | one@one.com | hello702   | one      | one              |   123 | English  | An e-mail has been sent to remind you of your login and password. |
      | fname1     | lname1    | one@one.com | hello703   | one      | one              |   123 | English  | An e-mail has been sent to remind you of your login and password. |
      | fname1     | lname1    | one@one.com | hello704   | one      | one              |   123 | English  | An e-mail has been sent to remind you of your login and password. |

  @teacher-outline
  Scenario Outline: TO verify whether application allows user to get registered as Teacher
    Given User should have launched the application
    When Click on Sign Up! link
    And Click on Courses icon for Teacher
    And Enter valid credential in first name "<First Name>" textbox
    And Enter valid credential in last name "<Last Name>" textbox
    And Enter valid credential in e-mail "<e-mail>" textbox
    And Enter valid credential in username "<username>" textbox
    And Enter valid credential in password "<password>" textbox
    And Enter valid credential in confirm password "<confirm password>" textbox
    And Enter valid credential in phone "<phone>" textbox
    And Selected Valid credentials from Language "<language>" list box
    And Click on Register button
    Then Validate the successful registration message "<validation>"
    And user logs out from the application
    And user close the browser

    Examples: 
      | First Name | Last Name | e-mail      | username | password | confirm password | phone | language | validation |
      | fname1     | lname1    | one@one.com | hello201   | one      | one              |   123 | English  | An e-mail has been sent to remind you of your login and password. |
      | fname1     | lname1    | one@one.com | hello202   | one      | one              |   123 | English  | An e-mail has been sent to remind you of your login and password. |
      | fname1     | lname1    | one@one.com | hello203   | one      | one              |   123 | English  | An e-mail has been sent to remind you of your login and password. |
      | fname1     | lname1    | one@one.com | hello204   | one      | one              |   123 | English  | An e-mail has been sent to remind you of your login and password. |
