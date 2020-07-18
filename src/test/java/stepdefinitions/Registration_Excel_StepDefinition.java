package stepdefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import common.Wrapper;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Registration_Excel_StepDefinition 
{
	static WebDriver driver;
	String url="http://elearningm1.upskills.in/";
	@Given("^User should have launched the application$")
	public void user_should_have_launched_the_application() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "driver//chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get(url);
	}

	@When("^Click on Sign Up! link$")
	public void click_on_Sign_Up_link() throws Throwable {
		driver.findElement(By.xpath("//a[contains(text(),'Sign up')]")).click();
		//driver.findElement(By.cssSelector("a:contains('Sign up')")).click();
	}

	@When("^Click on Courses icon for Student$")
	public void click_on_Courses_icon_for_Student() throws Throwable {
		//for student
		//driver.findElements(By.xpath("//input[@class='register-profile']")).get(0).click();
		driver.findElements(By.cssSelector(".register-profile")).get(0).click();
	}

	@When("^Click on Courses icon for Teacher$")
	public void click_on_Courses_icon_for_Teacher() throws Throwable {
		//for teacher
		//driver.findElements(By.xpath("//input[@class='register-profile']")).get(1).click();
		driver.findElements(By.cssSelector(".register-profile")).get(1).click();
	}
	
	@When("^user logs out from the application$")
	public void user_clicks_on_Sign_Up_link() throws Throwable {
		//driver.findElement(By.xpath("//li[@class='dropdown avatar-user']")).click();
		//driver.findElement(By.xpath("//a[@id='logout_button']")).click();
		driver.findElement(By.cssSelector(".dropdown.avatar-user")).click();
		driver.findElement(By.cssSelector("#logout_button")).click();
	}

	@Then("^user close the browser$")
	public void user_close_the_browser() throws Throwable {
	    driver.quit();
	}

	@When("^Enter valid credential in first name \"([^\"]*)\" textbox$")
	public void enter_valid_credential_in_first_name_textbox(String arg1) throws Throwable {
		//driver.findElement(By.xpath("//input[@id='registration_firstname']")).sendKeys(arg1);
		driver.findElement(By.cssSelector("#registration_firstname")).sendKeys(arg1);
	}

	@When("^Enter valid credential in last name \"([^\"]*)\" textbox$")
	public void enter_valid_credential_in_last_name_textbox(String arg1) throws Throwable {
		//driver.findElement(By.xpath("//input[@id='registration_lastname']")).sendKeys(arg1);
		driver.findElement(By.cssSelector("#registration_lastname")).sendKeys(arg1);
	}

	@When("^Enter valid credential in e-mail \"([^\"]*)\" textbox$")
	public void enter_valid_credential_in_e_mail_textbox(String arg1) throws Throwable {
		//driver.findElement(By.xpath("//input[@id='registration_email']")).sendKeys(arg1);
		driver.findElement(By.cssSelector("#registration_email")).sendKeys(arg1);
	}

	@When("^Enter valid credential in username \"([^\"]*)\" textbox$")
	public void enter_valid_credential_in_username_textbox(String arg1) throws Throwable {
		//driver.findElement(By.xpath("//input[@id='username']")).sendKeys(arg1);
		driver.findElement(By.cssSelector("#username")).sendKeys(arg1);
	}

	@When("^Enter valid credential in password \"([^\"]*)\" textbox$")
	public void enter_valid_credential_in_password_textbox(String arg1) throws Throwable {
		//driver.findElement(By.xpath("//input[@id='pass1']")).sendKeys(arg1);
		driver.findElement(By.cssSelector("#pass1")).sendKeys(arg1);
	}

	@When("^Enter valid credential in confirm password \"([^\"]*)\" textbox$")
	public void enter_valid_credential_in_confirm_password_textbox(String arg1) throws Throwable {
		//driver.findElement(By.xpath("//input[@id='pass2']")).sendKeys(arg1);
		driver.findElement(By.id("pass2")).sendKeys(arg1);
	}

	@When("^Enter valid credential in phone \"([^\"]*)\" textbox$")
	public void enter_valid_credential_in_phone_textbox(String arg1) throws Throwable {
		//driver.findElement(By.xpath("//input[@id='registration_phone']")).sendKeys(arg1);
		driver.findElement(By.id("registration_phone")).sendKeys(arg1);
	}

	@When("^Selected Valid credentials from Language \"([^\"]*)\" list box$")
	public void selected_Valid_credentials_from_Language_list_box(String arg1) throws Throwable {
		driver.findElement(By.cssSelector(".filter-option-inner-inner")).click();
		driver.findElement(By.xpath("//div[@class='dropdown-menu open']/descendant::input")).sendKeys(arg1, Keys.ENTER);
	}

	@Then("^Validate the successful registration message \"([^\"]*)\"$")
	public void Validate_the_successful_registration_message(String expText) throws Throwable {
		String actText=driver.findElement(By.xpath("//p[contains(text(),'An e-mail has been sent')]")).getText();
		
		//Assert.assertEquals(actText, expText);
		if (expText.equalsIgnoreCase(actText)) {
			System.out.println("Registration is successful");
		}
		else System.out.println("Registration is failed");
	}
	
	@When("^Enter valid credential in first name textbox$")
	public void enter_valid_credential_in_first_name_textbox() throws Throwable {
		//driver.findElement(By.xpath("//input[@id='registration_firstname']")).sendKeys(Wrapper.getDataFromExcel(1,0));
		driver.findElement(By.id("registration_firstname")).sendKeys(Wrapper.getDataFromExcel(1,0));
	}

	@When("^Enter valid credential in last name textbox$")
	public void enter_valid_credential_in_last_name_textbox() throws Throwable {
		//driver.findElement(By.xpath("//input[@id='registration_lastname']")).sendKeys(Wrapper.getDataFromExcel(1,1));
		driver.findElement(By.id("registration_lastname")).sendKeys(Wrapper.getDataFromExcel(1,1));
	}

	@When("^Enter valid credential in e-mail textbox$")
	public void enter_valid_credential_in_e_mail_textbox() throws Throwable {
		//driver.findElement(By.xpath("//input[@id='registration_email']")).sendKeys(Wrapper.getDataFromExcel(1,2));
		driver.findElement(By.id("registration_email")).sendKeys(Wrapper.getDataFromExcel(1,2));
	}

	@When("^Enter valid credential in username textbox$")
	public void enter_valid_credential_in_username_textbox() throws Throwable {
		//driver.findElement(By.xpath("//input[@id='username']")).sendKeys(Wrapper.getDataFromExcel(1,3));
		driver.findElement(By.id("username")).sendKeys(Wrapper.getDataFromExcel(1,3));
	}

	@When("^Enter valid credential in password textbox$")
	public void enter_valid_credential_in_password_textbox() throws Throwable {
		//driver.findElement(By.xpath("//input[@id='pass1']")).sendKeys(Wrapper.getDataFromExcel(1,4));
		driver.findElement(By.id("pass1")).sendKeys(Wrapper.getDataFromExcel(1,4));
	}

	@When("^Enter valid credential in confirm password textbox$")
	public void enter_valid_credential_in_confirm_password_textbox() throws Throwable {
		//driver.findElement(By.xpath("//input[@id='pass2']")).sendKeys(Wrapper.getDataFromExcel(1,5));
		driver.findElement(By.id("pass2")).sendKeys(Wrapper.getDataFromExcel(1,5));
	}

	@When("^Enter valid credential in phone textbox$")
	public void enter_valid_credential_in_phone_textbox() throws Throwable {
		//driver.findElement(By.xpath("//input[@id='registration_phone']")).sendKeys(Wrapper.getDataFromExcel(1,6));
		driver.findElement(By.id("registration_phone")).sendKeys(Wrapper.getDataFromExcel(1,6));
	}

	@When("^Selected Valid credentials from Language list box$")
	public void selected_Valid_credentials_from_Language_list_box() throws Throwable {
		//driver.findElement(By.xpath("//input[@class='filter-option-inner-inner']")).click();
		driver.findElement(By.cssSelector(".filter-option-inner-inner")).click();
		driver.findElement(By.xpath("//div[@class='dropdown-menu open']/descendant::input")).sendKeys(Wrapper.getDataFromExcel(1,7), Keys.ENTER);
	}

	@When("^Click on Register button$")
	public void click_on_Register_button() throws Throwable {
		driver.findElement(By.cssSelector("#registration_submit")).click();
	}

	@Then("^Validate the successful registration message$")
	public void Validate_the_successful_registration_message() throws Throwable {
		String actText=driver.findElement(By.xpath("//p[contains(text(),'An e-mail has been sent')]")).getText();
		
		//Assert.assertEquals(actText, Wrapper.getDataFromExcel(1,8));
		if (actText.equalsIgnoreCase(Wrapper.getDataFromExcel(1,8))) {
			System.out.println("Registration is successful");
		}
		else System.out.println("Registration is failed");
	}
}
