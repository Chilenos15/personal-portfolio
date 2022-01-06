Rails.application.routes.draw do
  # no root route just in the namespace and resources
  # api routes, leads us to the controller
  namespace :api do
    resources :contacts
  end
  
end
