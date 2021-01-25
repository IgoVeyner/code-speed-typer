class CodesController < ApplicationController
  before_action :find_code, only: [:show]

  # might not need this, depending on how highscore sends its data
  def show
    if @code
      render json: @code
    else
      render json: {error: "Sorry, there is no code with that ID", status: 400}, status: 400
    end
  end

  def random 
    count = Code.count
    num = rand(count) + 1
    @code = find_code(num)

    if @code
      render json: CodeSerializer.new(@code)
    else
      render json: {error: "Sorry, there is no code with that ID", status: 400}, status: 400
    end
  end

  private

  def find_code(id)
    query = id ? id : params[:id]  
    @code = Code.find_by_id(query)
  end
end
