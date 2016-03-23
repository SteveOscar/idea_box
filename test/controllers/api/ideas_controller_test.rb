require 'test_helper'

class Api::V1::IdeasControllerTest < ActionController::TestCase
  test "#index" do
    get :index, format: :json

    items = JSON.parse(response.body)
    sample_item = items.first

    assert_response :success
    assert_equal 2, items.count
    assert_equal sample_item["name"], "Heavy Cotton Pants"
    assert_equal sample_item["description"], "heavy when wet"
    assert sample_item["image_url"]
    refute sample_item["created_at"]
    refute sample_item["updated_at"]
  end

  test "#show" do
    id = Item.first.id

    get :show, id: id, format: :json

    items = JSON.parse(response.body)

    assert_response :success
    assert_equal 1, items["id"]
    assert_equal items["name"], "Heavy Cotton Pants"
    assert_equal items["description"], "heavy when wet"
    assert items["image_url"]
    refute items["created_at"]
    refute items["updated_at"]
  end

  test "#destroy" do
    id = Item.first.id
    start_item_count = Item.count

    delete :destroy, id: id, format: :json
    end_item_count = Item.count

    assert_response(204)
    assert end_item_count < start_item_count
  end

  test "#create" do
    start_item_count = Item.count
    item_params = {name: "truck", description: "so fast", image_url: "www.example.com"}
    post :create, item: item_params, format: :json

    end_item_count = Item.count

    assert_response(201)
    assert end_item_count > start_item_count
    assert_equal Item.last.name, "truck"
  end

  test "#create with invalid params" do
    start_item_count = Item.count
    item_params = {created_at: "truck", updated_at: "so fast", image_url: "www.example.com"}
    post :create, item: item_params, format: :json

    end_item_count = Item.count

    assert_equal end_item_count, start_item_count
  end
end
