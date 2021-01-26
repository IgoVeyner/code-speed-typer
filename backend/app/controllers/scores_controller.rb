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
        check_highscore()
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

  def check_highscore
    code = Code.find_by_id(@score.code_id)

    if code.highscores == []
      code.highscores << Highscore.create(code_id: code.id, score_id: @score.id)
    else
      # check if the current score is better than the current highscore
      # update appropriately 
    end
  end
end
