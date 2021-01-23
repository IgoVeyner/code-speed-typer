class CodesController < ApplicationController
  def show
    if @code
      render json: @code
    else
      render json: {error: "Sorry, there is no code with that ID", status: 400}, status: 400
    end
  end
end
