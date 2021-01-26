Rails.application.routes.draw do

  resources :highscores
  get '/codes/random', to: 'codes#random', as: 'random'
  resources :codes, only: [:show]
  resources :scores, only: [:create, :update, :show]
  resources :users, only: [:create]
end
