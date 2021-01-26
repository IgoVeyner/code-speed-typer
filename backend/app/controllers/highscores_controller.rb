class HighscoresController < ApplicationController
  def create
    highscore = Highscore.create(highscore_params)
    render json: HighscoreSerializer(highscore)
  end

  private

  def highscore_params
    params.require(:highscore).permit(:score_id, :code_id)
  end
end
