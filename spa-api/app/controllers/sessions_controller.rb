class SessionsController < ApplicationController
    def create
        @renee = Renee.find_by(email: params[:email])
   
        if !@renee.nil? && @renee.authenticate(params[:password])
            log_in(@renee)
            flash[:notice] = 'You are logged in'
            render :root
        else
            flash[:error] = 'Your username/password combo is incorrect.'
            render :root
        end
    end

    private

    def set_renee
        @renee = Renee.find_by(email: params[:email])
    end

end
