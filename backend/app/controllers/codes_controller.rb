class CodesController < ApplicationController
  before_action :find_code, only: [:show]

  def random 
    count = Code.count
    num = rand(count) + 1
    @code = find_code(num)

    if @code
      options = { include: [:highscores] }
      render json: CodeSerializer.new(@code, options)
    else
      render json: {error: "Sorry, there is no code with that ID", status: 400}, status: 400
    end
  end

  private

  def find_code(id)
    @code = Code.find_by_id(id)
  end
end
