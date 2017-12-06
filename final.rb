
require 'sinatra'
require 'sinatra/reloader' if development?

get '/' do
end

# For the Ajax request
get '/name' do

  name = params["name"]
  
  if name == "steve"
  list = [1,2,3,4,5,6]
  
  else
  list = [10,9,8,7,6,5]
  #TODO: query database with name and return result (May have to be a JSON file or other format)
end
