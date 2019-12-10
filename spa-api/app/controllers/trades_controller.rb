class TradesController < ApplicationController
    def index
        trade = Trade.all
        render json: trade, :except => [:created_at, :updated_at]
    end


end
