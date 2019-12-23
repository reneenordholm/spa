Rails.application.routes.draw do
  resources :trades, only: [:index]
  resources :sessions, only: [:create]

  # post '/login', to: 'sessions#login'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
