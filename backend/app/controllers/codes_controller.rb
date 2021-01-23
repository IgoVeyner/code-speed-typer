class CodesController < ApplicationController
  before_action :find_code, only: [:show]

  def show
    if @code
      render json: @code
    else
      render json: {error: "Sorry, there is no code with that ID", status: 400}, status: 400
    end
  end

  def random 
    count = Code.count
    num = rand(count)
    redirect_to code_path(num)
  end

  private

  def find_code
    @code = Code.find_by_id(params[:id])
  end
end
