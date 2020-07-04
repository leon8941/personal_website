class ApplicationController < ActionController::Base
    # protect_from_forgery with: :exception #May need to enable for Live environment
    protect_from_forgery with: :null_session

    def fallback_index_html
        render :file => 'public/index.html'
    end
end