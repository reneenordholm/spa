class TradesController < ApplicationController
    def show
        trade = Trade.find(params[:id])
        render json: trade
    end


end
