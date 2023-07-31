class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  before_action :authorize

  def current_user
    @current_user = User.find_by(id: session[:user_id])
  end

  private
  def authorize
    @current_user = User.find_by(id: session[:user_id])
    render json: { errors: ["Not authorized. Please Login."] }, status: :unauthorized unless @current_user
  end

  def render_not_found_response
    render json: { errors:  ["Not found"] }, status: :not_found
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

end

#   def current_user
#     User.find_by(id: session[:user_id])
#   end

#   def logged_in
#     !!session[:user_id] # two bangs for boolean value true ("Bang Bang! you're a boolean now!"")
#   end

#   private
#   #authorize: if someone is logged_in, then they are authorized to access, if not error
#   def authorize
#     render json: { errors: ["Not authorized. Please Login."] }, status: 
#     :unauthorized unless logged_in
#   end

#   def render_not_found_response
#     render json: { errors:  ["Not found"] }, status: :not_found
#   end

#   def render_unprocessable_entity_response(exception)
#     render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
#   end


# end
