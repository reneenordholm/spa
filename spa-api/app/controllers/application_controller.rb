class ApplicationController < ActionController::API

    def logged_in?
        log_in_error if !current_concierge
    end

    def log_in(renee)
        session[:renee_id] = renee.id
    end

    private

    def current_concierge
        Renee.find(session[:renee_id]) if session[:renee_id]
    end
end
