require 'yaml'

class AuthController < ApplicationController
    
    # secret = YAML.load_file('./secret.yaml') 

    # Login fires this, params are user entered name and password 
    def create #LOGIN 
        # See if user exists by searching by name
        user = User.find_by(:name => params[:name])
        # If they do exist, see that their password matches as well
        # COmparing both password_digests
        if (user && user.authenticate(params[:password]))
            # make a token to pass to front end with encrypted user id
            token = JWT.encode({ user_id: user.id }, "secret")
            # This crap can be used for App.setState
            render json: { details: {id: user.id, name: user.name, reviews:user.reviews, games:user.games}, jwt: token }
        else
            render json: {invalid_message: "Invalid username/password combination. Please try again."}
        end
    end

    def retrieve_user     
        # byebug                     
        token = request.headers["Authorization"] 
        # Get the user id we previously encoded back 
        # byebug                       
        user_id = JWT.decode(token, "secret")[0]["user_id"]    
        user = User.find(user_id)                
        render json: {id: user.id, name: user.name, admin: false, reviews:user.reviews, games:user.games}       
    end 



    # def retrieve_user     
    #     # byebug           
    #     # See if user exists, if they do compare inputted password with user's password via authenticate  
    #     user = User.find_by(:name => params[:name])
    #     if (user && user.authenticate(params[:password]))
    #         # if user exists and password matches, decode token with secret 
    #         secret = YAML.load_file('./secret.yaml')             
    #         token = request.headers["Authorization"] 
    #     # Get the user id we previously encoded back 
    #     # byebug                       
    #     user_id = JWT.decode(token, "secret")[0]["user_id"]    
    #     # user = User.find(user_id)                
    #     render json: {user_id: user_id}       
    # end 



end