require 'test_helper'

class IdeaTest < ActiveSupport::TestCase
  test "idea creation" do
    start = Idea.count
    Idea.create(title: 'new idea', body: 'new body')
    finish = Idea.count

    refute start == finish
    assert_equal Idea.last.title, 'new idea'
  end

  test "idea creation with missing title" do
    start = Idea.count
    Idea.create(body: 'new body')
    finish = Idea.count

    assert start == finish
    refute_equal Idea.last.body, 'new idea'
  end

  test "idea creation with missing body" do
    start = Idea.count
    Idea.create(title: 'new title')
    finish = Idea.count

    assert start == finish
    refute_equal Idea.last.title, 'new title'
  end
end
