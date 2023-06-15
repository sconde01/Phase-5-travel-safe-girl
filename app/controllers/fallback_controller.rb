# Controller logic: fallback requests for React Router.
class FallbackController < ActionController::Base

  def index
    render file: 'public/index.html'
  end
  
end