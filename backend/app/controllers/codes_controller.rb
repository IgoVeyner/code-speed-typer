class CodesController < ApplicationController
  def random 
    code = Code.get_random()

    if code
      options = { include: [:highscores] }
      render json: CodeSerializer.new(code, options)
    else
      render json: {error: "Sorry, there is no code with that ID", status: 400}, status: 400
    end
  end
end
