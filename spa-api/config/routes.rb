Rails.application.routes.draw do
  resources :trades, only: [:show, :create, :update, :destroy]

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
