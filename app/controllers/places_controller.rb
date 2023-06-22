class PlacesController < ApplicationController
  skip_before_action :authorize, only: [:index, :show, :reviews, :food_truck_reviews]

  def index
    render json: Place.all
  end
  
  def show
    place = Place.find_by(id: params[:id])
    render json: place
  end

  def create
    place = Place.create!(place_params)
    render json: place, status: :created
  end


  private

  def place_params
    params.permit(:name, :image_url, :location, :description, :category, :safety_features)
  end

end
