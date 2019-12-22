class ApplicationController < ActionController::API
    include ActionController::Cookies
    include ActionController::RequestForgeryProtection
  
    protect_from_forgery with: :exception

    # private

    # def is_renee?
    #     Renee.find(session[:renee_id]) if session[:renee_id]
    # end
end
