class BusinessesController < ApplicationController
  skip_before_action :authorize, only: [:index, :show]
  before_action :find_business, only: [:show]

  def index
    render json: Business.all
  end

 # GET /businesses/:id
  def show
    render json: @business 
  end

  # POST /businesses/:id
  # def create
  #   business = current_user.businesses.create!(business_params)
  #   render json: business, status: :created
  # end

  private

  def business_params
    params.permit(:image_url, :name)
  end

  def find_business
    @business = Business.find_by(id: params[:id])
     # Remember that you can add additional logic here, for example, if the business is not found, you can handle it accordingly
     render json: { errors: ["Business not found"] }, status: :not_found unless @business
  end


end
