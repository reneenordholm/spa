Rails.application.routes.draw do

  # initial render of all trades, route update request from fetch
  resources :trades, only: [:index, :update]

  # route new login session
  resources :sessions, only: [:create]

  # route delete from fetch
  delete '/sessions', to: 'sessions#destroy'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
