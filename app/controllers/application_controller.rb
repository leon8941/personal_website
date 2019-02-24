class ApplicationController < ActionController::Base
    # protect_from_forgery with: :exception #May need to enable for Live environment
    protect_from_forgery with: :null_session
end