class CodesController < ApplicationController
  before_action :find_code, only:[:show, :update]

  def show
    if @code
      render json: @code
    else
      render json: {error: "Sorry, there is no code with that ID", status: 400}, status: 400
    end
  end

  private

  def find_code
    @code = Code.find_by_id(params[:id])
  end
end