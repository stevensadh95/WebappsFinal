
require 'sinatra'
require 'sinatra/reloader' if development?

get '/' do
end

# For the Ajax request
get '/name' do

  name = params["name"]

  #TODO: query database with name and return result (May have to be a JSON file or other format)
end
