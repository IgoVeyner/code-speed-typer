Rails.application.routes.draw do
  resources :scores, only: [:create, :update, :show]
  resources :users, only: [:create]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
