class ScoresController < ApplicationController
  before_action :find_score, only: [:show, :update]

  def create
    score = Score.create(score_params)
    render json: score
  end

  def show
    if @score
      render json: ScoreSerializer.new(@score)
    else
      render json: {error: "Sorry, there is no score with that ID", status: 400}, status: 400
    end
  end

  def update
    if @score
      if @score.update(score_params)
        render json: ScoreSerializer.new(@score)
      else
        render json: {error: @score.errors.full_messages, status: 400}, status: 400
      end
    else
      render json: {error: "Sorry, there is no score with that ID", status: 400}, status: 400
    end
  end

  private

  def find_score
    @score = Score.find_by_id(params[:id])
  end

  def score_params
    params.require(:score).permit(:user_id, :code_id, :time, :strikes, :completed)
  end
end
