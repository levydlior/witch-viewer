class WitchesController < ApplicationController


    def index
        render json: Witch.all
    end


end
