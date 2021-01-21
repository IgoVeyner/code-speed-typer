class UsersController < ApplicationController
  def create
    user = User.create(name: params[:username])
    render json: user
  end
end
