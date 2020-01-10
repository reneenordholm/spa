class ApplicationController < ActionController::API
    include ActionController::Cookies
    include ActionController::RequestForgeryProtection
  
    protect_from_forgery with: :exception

    # before_action :set_csrf_cookie

    # protected

    # def current_user
    #     Renee.find_by(id: session[:user_id])
    # end

    # def logged_in?
    #     !!current_user
    # end

    # def authenticate
    #     render json: {errors: "not authorized"} if !logged_in?
    # end

    # def set_csrf_cookie
    #     cookies["CSRF-TOKEN"] = form_authenticity_token
    # end
end
