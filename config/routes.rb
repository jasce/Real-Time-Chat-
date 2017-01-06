Rails.application.routes.draw do
  get 'home/index'

  devise_for :users
  root 'home#index'
  resources :conversations, only: [:create] do
    member do
      post :close
    end
    
  end



  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
