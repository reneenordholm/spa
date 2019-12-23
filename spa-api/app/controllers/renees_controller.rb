class ReneesController < ApplicationController

    private

    def renee_params
        params.require(:renee).permit(:password, :email)
    end

end
