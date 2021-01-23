Rails.application.routes.draw do

  get '/codes/random', to: 'codes#random', as: 'random'
  resources :codes, only: [:show]
  resources :scores, only: [:create, :update, :show]
  resources :users, only: [:create]
end
