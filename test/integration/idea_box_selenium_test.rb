require 'test_helper'
require "selenium-webdriver"

class IdeaBoxSeleniumTest < ActionDispatch::IntegrationTest
  test "create a new idea" do
    driver = Selenium::WebDriver.for:firefox
    driver.navigate.to "http://localhost:3000"

    element = driver.find_element(:id, 'idea-title')
    element.send_keys "Making a new idea"
    driver.find_element(:id, 'create-idea').click

    assert driver.find_element(:id=>"all-ideas").text.include? "Making a new idea"
  end

  test "edit idea" do
    driver = Selenium::WebDriver.for:firefox
    driver.navigate.to "http://localhost:3000"

    element = driver.find_element(:class, "title#{Idea.first.id}")
    element.click
    element.send_keys "Editing a new idea"
    element.send_keys :enter


    assert driver.find_element(:id=>"all-ideas").text.include? "Editing a new idea"
  end
end
