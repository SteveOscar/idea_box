require 'test_helper'
require "selenium-webdriver"

class IdeaBoxSeleniumTest < ActionDispatch::IntegrationTest
  test "create a new idea" do
    driver = Selenium::WebDriver.for:firefox
    driver.navigate.to "http://localhost:3000"

    element = driver.find_element(:id, 'idea-title')
    element2 = driver.find_element(:id, 'idea-body')
    element.send_keys "Snow Day"
    element2.send_keys "Snow Day Body"
    driver.find_element(:id, 'create-idea').click

    assert driver.find_element(:id=>"all-ideas").text.include? "Snow Day"
  end

  test "edit idea" do
    driver = Selenium::WebDriver.for:firefox
    driver.navigate.to "http://localhost:3000"

    element = driver.find_element(:class, "title")
    element.click
    element.send_keys "Editing a new idea"
    element.send_keys :enter


    assert driver.find_element(:id=>"all-ideas").text.include? "Editing a new idea"
  end
end
