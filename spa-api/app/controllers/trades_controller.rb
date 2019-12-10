class TradesController < ApplicationController
    def index
        trade = Trade.all
        render json: trade, :except => [:created_at, :updated_at]
    end

    private

    def trade_params
        params.require(:trade).permit(:trade_type, :title, :description, :img)
    end


end
