Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    # /api...
    namespace :v1 do
      # /api/v1...
      resources :auctions do
        # resources :likes, shallow: true, only: [ :create, :destroy ]
      end
      resources :bids, only: [ :destroy ]
        # /api/v1/questions
      resource :session, only: [:create, :destroy]
        # /api/v1/session
      resources :users, only: [] do
          # /api/v1/users/current
      get :current, on: :collection
      end
    end

      match "*unmatched_route", to: "application#not_found", via: :all
  end

  namespace :admin do
  end
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :show]
  resources :auctions, only: [:create, :index, :show, :destroy]
  resources :bids, only: [:create]

get('/users/new', { to: 'users#new' })
post('/users', { to: 'users#create' })
get('/users/:id', { to: 'users#show' })
# post "/session", to: "sessions#create", as: :sessions
# delete "/session/:id", to: "sessions#destroy"

end
