Rails.application.routes.draw do
  resources :renees, only: [:index]
  resources :trades, only: [:create, :update, :destroy]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
