class ScoresController < ApplicationController
  before_action :find_score, only: [:show]

  def create
    score = Score.create(score_params)
    render json: score
  end

  def show
    if @score
      render json: @score
    else
      render json: {error: "Sorry, there is no score with that ID", status: 400}, status: 400
    end
  end

  private

  def find_score
    @score = Score.find_by_id(params[:id])
  end

  def score_params
    params.require(:score).permit(:user_id)
  end
end
