class TradesController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    # render all trades as json 
    def index
        trades = Trade.all
        render json: trades.to_json(:except => [:created_at, :updated_at])
    end

    # find trade and save
    def update
        trade = Trade.find_by(id: params[:id])
        trade.update(trade_params)

        if trade.save
            render json: {messages: "trade saved"}
        else
            render json: {errors: "trade not saved"}
        end
    end

    private

    def trade_params
        params.require(:trade).permit(:trade_type, :title, :description, :img)
    end


end
