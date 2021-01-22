class ScoresController < ApplicationController
  def create
    score = Score.create(score_params)
    render json: score
  end

  private

  def score_params
    params.require(:score).permit(:user_id)
  end
end
