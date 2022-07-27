class LikesController < ApplicationController
  def create
    witch = Witch.find_or_create_by(like_params)
    like = Like.create!(witch_id: witch.id, user_id: session[:user_id])
    render json: like.witch, status: :created
  end

  def index
    user = User.find(session[:user_id])
    render json: user.witches
  end

  def destroy
    like = Like.find_by(witch_id: params[:id], user_id: session[:user_id])
    witch = like.witch
    like.destroy

    if witch.likes.length == 0
      witch.destroy
    end

    render json: witch
  end

  private

  def like_params
    params.permit(:type_of_witch, :name, :image, :description, :tokenID, :externalURL)
  end
end
