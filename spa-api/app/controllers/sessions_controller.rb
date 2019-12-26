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

    private

    def login(renee)
        session[:renee_id] = renee.id
    end

end
