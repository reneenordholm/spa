class SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token

    # new login session
    def create
        renee = Renee.find_by(email: params[:email])
   
        if (renee && renee.authenticate(params[:password]))
            login(renee)
            render json: {renee: renee}
        else
            render json: {errors: "not authorized"}
        end
    end

    #close login session
    def destroy
        session.clear
        render json: {messages: "logged out"}
    end

    private

    # set session 
    def login(renee)
        session[:renee_id] = renee.id
    end

end
