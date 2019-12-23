class ApplicationController < ActionController::API
    include ActionController::Cookies
    include ActionController::RequestForgeryProtection

    # skip_before_action :verify_authenticity_token
  
    protect_from_forgery with: :exception

    before_action :set_csrf_cookie

    private
    
      def set_csrf_cookie
        cookies["CSRF-TOKEN"] = form_authenticity_token
      end

    # private

    # def is_renee?
    #     Renee.find(session[:renee_id]) if session[:renee_id]
    # end
end
