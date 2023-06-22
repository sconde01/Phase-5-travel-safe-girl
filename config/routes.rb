Rails.application.routes.draw do
  resources :businesses, only: [:index, :show, :create]
  resources :reviews
  resources :places, only: [:index, :show, :create]
  resources :users, only: [:index]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  post "/signup", to: "users#create"
  get "/show-current-user", to: "users#show_current_user"



  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end
