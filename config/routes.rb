Rails.application.routes.draw do
  devise_for :users
  get 'static_pages/about'

  get 'static_pages/contact'

  get 'static_pages/ringtones'

  get 'static_pages/quotes'

  get 'static_pages/weather'
  
  root 'posts#index'
  resources :posts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
