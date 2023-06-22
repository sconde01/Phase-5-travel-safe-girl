class BusinessesController < ApplicationController
  skip_before_action :authorize, only: [:index, :show]

  def index
    render json: Business.all
  end

 # GET /businesses/:id
  def show
    render json: @business 
  end

  # POST /businesses/:id
  def create
    business = current_user.businesses.create!(business_params)
    render json: business, status: :created
  end

  private

  def business_params
    params.permit(:image_url, :name, :category)
  end

  def find_business
    @business = Business.find_by(id: params[:id])
    # byebug
  end


end
