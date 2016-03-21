Rails.application.routes.draw do
  root 'ideas#home'

  namespace :api do
    namespace :v1, defaults: {format: :json} do
      resources :ideas, defaults: {format: :json}
    end
  end
end
