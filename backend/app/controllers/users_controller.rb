class UsersController < ApplicationController
  def create
    user = User.create(name: user_params)
    render json: user
  end

  private

  def user_params
    params.require(:username)
  end
end
