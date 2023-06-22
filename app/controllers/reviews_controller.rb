class ReviewsController < ApplicationController
  before_action :find_review, only: [:update, :destroy, :show]
  skip_before_action :authorize, only: [:index]

  # GET /reviews ...instance method for if there are no reviews
  def index
    render json: Review.all
  end

  # GET /reviews/:id
  def show
    render json: @review  
  end

  # POST /reviews/:id
  def create
    review = current_user.reviews.create!(review_params)
    render json: review, status: :created
  end

  # PATCH /reviews:id
  def update
      if current_user.id == @review.user_id
        @review.update!(review_params)
        render json: @review
      else
        #[] keeps front end consistent
        render json: { errors: ["You are not authorized to update this review."] }, status: :unprocessable_entity
      end    
  end
  
  #DELETE
  def destroy
    @review.destroy
    head :no_content 
  end


  private
    def review_params
    params.permit(:review, :food_truck_id)
    end

    def find_review
      @review = Review.find_by(id: params[:id])
      # byebug
    end
end
