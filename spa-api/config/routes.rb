Rails.application.routes.draw do
  resources :trades, only: [:index, :update]
  resources :sessions, only: [:create]

  delete '/sessions', to: 'sessions#destroy'
  get '/auth-check', to: 'sessions#auth_check'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
