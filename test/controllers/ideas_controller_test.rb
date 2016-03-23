require 'test_helper'

class IdeasControllerTest < ActionController::TestCase
  test "#home" do
    get :home
    assert_response(200)
  end

end
