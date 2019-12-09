class TradesController < ApplicationController
    def show
        trade = Trade.find(param[:id])
        render json: trade
    end

    
end
