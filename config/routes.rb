Rails.application.routes.draw do
  devise_for :users
  get 'static_pages/about'

  get 'static_pages/contact'

  root 'posts#index'
  resources :posts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
