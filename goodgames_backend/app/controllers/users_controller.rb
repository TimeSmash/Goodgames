require 'yaml'

class UsersController < ApplicationController
        
    def index 
        @users = User.all
        render json: @users
    end

    
    

    def show
      @user = User.find(params[:id])
      render json: @user
    end

  def create
    # secret = YAML.load_file('./secret.yaml')
    # byebug
    @user = User.create!(user_params)
    if @user.valid?
    #   @user.save
    # encode the user's id 
      token = JWT.encode({user_id: @user.id}, "secret")
      # Let's only return the user's name and email and encrypted pssword for now, also send up token (encrypted user id)
      render json: {user: { id: @user.id, name: @user.name, email: @user.email, password: @user.password_digest}, jwt: token}
    else
      render json: { error: 'failed to create user' }
    end
  end

    def update
    
    end
    
    def destroy
    
    end

    private
    def user_params
        params.require(:user).permit(:name, :email, :birthday, :password, :genres)
    end

end
