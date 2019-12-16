class TradesController < ApplicationController
    
    # render all trades as json 
    def index
        trades = Trade.all
        render json: trades.to_json(:except => [:created_at, :updated_at])
    end

    # private

    # def trade_params
    #     params.require(:trade).permit(:trade_type, :title, :description, :img)
    # end


end
