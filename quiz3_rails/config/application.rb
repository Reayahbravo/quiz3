require_relative 'boot'

require 'rails/all'
require "active_model/railtie"
require "sprockets/railtie"

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Quiz3Rails
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
  
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins('localhost:3002', 'localhost:3001')
        # "origins" options specifies the domains that are allowed
        # to make cross-origin request to our Rails server
        resource(
          '/api/v1/*',
          headers: :any,
          credentials: true, # Allows cookies to be sent accross origins
          # or with `fetch`
          methods: [:get, :post, :delete, :patch, :put, :options]
        )
        # "resource" options specifies which urls we will be allowed
        # to perform CORS on. Above, we say that all urls that begin
        # with `/api/v1/` are allowed.
      end
    end
  end
end
