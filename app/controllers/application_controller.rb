class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def index
    @app_props = { name: "Stranger" }
  end

end
