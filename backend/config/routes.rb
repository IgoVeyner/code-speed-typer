Rails.application.routes.draw do

  get '/codes/random', to: 'codes#random', as: 'random'
  resources :scores, only: [:create, :update, :show]
  resources :users, only: [:create]
  resources :highscores, only: [:create, :update, :show]
end
