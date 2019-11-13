class ReviewsController < ApplicationController

    # Schema of a review
    # t.string "headline"
    # t.string "content"
    # t.integer "stars"
    # t.bigint "user_id"
    # t.bigint "game_id"

    def  index
        @reviews = Review.all
        render json: @reviews
    end

    def show
        @review = Review.find(params[:id])
        render json: @review
    end

    def does_review_exist
        # byebug
        # PARAMS
        # "user_id"=>44, 
        # "game_id"=>414, 
        # "controller"=>"reviews", "action"=>"does_review_exist", "review"=>{"user_id"=>44, "game_id"=>414}} 
        # byebug
        @user = User.find(params[:user_id])
        @game_to_edit = Game.find_by(idgb_id: params[:game_id])
        @review = @user.reviews.find_by(game_id: @game_to_edit.id)
        if @review  
            render json: {message: "It exists.", reviewToEdit: @review}
        else 
            render json: {message: "It does not exist."}
        end
    end

    def user_reviews
        # byebug
        @user = User.find(params[:id])
        render json: @user.reviews
    end

    def edit_review
        # byebug
        @review = Review.find(params[:id])
        @review.update(headline: params[:headline], content: params[:content], stars: params[:stars])
        render json: {message: "SUCCESS"}
    end

    def create 
        # byebug
        # PARAMS:
            # <ActionController::Parameters 
                # {"headline"=>"", 
                #     "content"=>"", 
                #     "stars"=>0, 
                #     "user_id"=>40, 
                #     "game_id"=>2136, 
                #     "controller"=>"reviews", "action"=>"create", "review"=>{"headline"=>"", "content"=>"", "stars"=>0, "user_id"=>40, "game_id"=>2136}} permitted: false>
          #  (byebug) Game.find(2136)
        
        #   Does a game with this idgb_id exist?
        if Game.find_by(idgb_id: params[:game_id]) #if game exists in database... 
            # Make a review. Its contents will be blank
            @review = Review.create!(
                headline: params[:headline], 
                content: params[:content], 
                stars: params[:stars], 
                user_id: params[:user_id], 
                game_id: Game.find_by(idgb_id: params[:game_id]).id
             )
        else #if game doesn't exist in database
            # Then create that game and setits idgb_id to the game_id given
            newGame = Game.create(idgb_id: params[:game_id])
            # byebug
            # Then make a blank review to tie to it
            @review = Review.create!(
                headline: params[:headline], 
                content: params[:content], 
                stars: params[:stars], 
                user_id: params[:user_id], 
                game_id: Game.find_by(idgb_id: params[:game_id]).id
             )
        end
    end

end
