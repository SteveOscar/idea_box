class Api::V1::IdeasController < Api::V1::BaseController
  respond_to :json

  def index
    respond_with Idea.all
  end

  def show
    respond_with Idea.find(params[:id])
  end

  def create
    respond_with Idea.create(item_params), location: nil
  end

  def update
    @idea = Idea.find(params["id"]).update(idea_params)
    respond_with @idea, json: @idea
  end

  def destroy
    respond_with Idea.find(params[:id]).delete, location: nil
  end

  private

  def idea_params
    params.require(:idea).permit(:id, :title, :body, :quality)
  end
end
