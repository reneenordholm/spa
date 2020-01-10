class SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        renee = Renee.find_by(email: params[:email])
   
        if (renee && renee.authenticate(params[:password]))
            login(renee)
            render json: {renee: renee}
        else
            render json: {errors: "not authorized"}
        end
    end

    # def auth_check
    #     cookies["logged_in"] = logged_in?
    #     render json: {csrf_auth_token: form_authenticity_token}
    # end

    def destroy
        # authenticate
        session.clear
        render json: {messages: "logged out"}
    end

    private

    def login(renee)
        session[:renee_id] = renee.id
        # cookies["logged_in"] = true
    end

end
