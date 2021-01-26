class HighscoresController < ApplicationController
  def create
    highscore = Highscore.create(highscore_params)
    render json: HighscoreSerializer.new(highscore)
  end

  def update 
    if @highscore
      if @highscore.update(highscore_params)
        render json: HighscoreSerializer.new(@highscore)
      else
        render json: {error: @highscore.errors.full_messages, status: 400}, status: 400
      end
    else
      render json: {error: "Sorry, there is no highscore with that ID", status: 400}, status: 400
    end
  end

  private

  def find_highscore
    @highscore = Highscore.find_by_id(params[:id])
  end

  def highscore_params
    params.require(:highscore).permit(:score_id, :code_id)
  end
end
