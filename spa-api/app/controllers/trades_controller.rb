class TradesController < ApplicationController
    
    # render all trades as json 
    def index
        trades = Trade.all
        render json: trades.to_json(:except => [:created_at, :updated_at])
    end

    def update
        if logged_in?
            trade = Trade.find_by(id: params[:id])
            trade.update(trade_params)

            if trade.save
                render json: {errors: "trade saved"}
            else
                render json: {errors: "trade not saved"}
            end
        else
            render json: {errors: "login to continue"}
        end
    end

    private

    def trade_params
        params.require(:trade).permit(:trade_type, :title, :description, :img)
    end


end
