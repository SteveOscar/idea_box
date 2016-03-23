require 'test_helper'

class Api::V1::IdeasControllerTest < ActionController::TestCase
  test "#index" do
    get :index, format: :json

    ideas = JSON.parse(response.body)
    sample_idea = ideas.first

    assert_response :success
    assert_equal 2, ideas.count
    assert_equal sample_idea["title"], "Idea 1 Title"
    assert_equal sample_idea["body"], "Idea 1 Body"
    assert_equal sample_idea["quality"], 0
    assert sample_idea["created_at"]
    assert sample_idea["updated_at"]
  end

  test "#show" do
    id = Idea.last.id

    get :show, id: id, format: :json

    idea = JSON.parse(response.body)

    assert_response :success
    assert_equal id, idea["id"]
    assert_equal idea["title"], "Idea 1 Title"
    assert_equal idea["body"], "Idea 1 Body"
    assert_equal idea["quality"], 0
  end

  test "#destroy" do
    id = Idea.first.id
    start_idea_count = Idea.count

    delete :destroy, id: id, format: :json
    end_idea_count = Idea.count

    assert_response(204)
    assert end_idea_count < start_idea_count
  end

  test "#update" do
    id = Idea.first.id
    start_idea_title = Idea.first.title
    idea_params = {title: "truck"}

    patch :update, id: id, idea: idea_params, format: :json
    end_idea_title = Idea.first.title

    assert_response(200)
    assert end_idea_title != start_idea_title
    assert_equal end_idea_title, "truck"
  end

  test "#create" do
    start_idea_count = Idea.count
    idea_params = {title: "truck", body: "so fast"}
    post :create, idea: idea_params, format: :json

    end_idea_count = Idea.count

    assert_response(201)
    assert end_idea_count > start_idea_count
    assert_equal Idea.last.title, "truck"
  end

  test "#create with invalid params" do
    start_idea_count = Idea.count
    idea_params = {created_at: "truck", updated_at: "so fast", image_url: "www.example.com"}
    post :create, idea: idea_params, format: :json

    end_idea_count = Idea.count

    assert_equal end_idea_count, start_idea_count
  end
end
