Rails.application.routes.draw do
  resources :likes
  resources :games
  resources :genres
  resources :reviews
  resources :users, only: [:index, :create, :update, :destroy, :show]
  post 'does_game_exist/:id', to: 'games#does_game_exist'
  post 'does_review_exist', to: 'reviews#does_review_exist'
  patch '/reviews/edit_review/:id', to: 'reviews#edit_review'
  get '/reviews/user_reviews/:id', to: 'reviews#user_reviews'
  get '/recently_reviewed_games', to: 'games#recently_reviewed_games'
  get '/retrieve_user', to: 'auth#retrieve_user'
  post '/login', to: 'auth#create'
  # get 'does_game_exist/', to: 'games#does_game_exist', as: 'games'
 
  # A custom route example: Getting to the users/highlights page without show interference
  # By putting user_highlights's route above the resources route, we avoid interference from the users/:id route that points to show
  # the show functionality still works fine!

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
