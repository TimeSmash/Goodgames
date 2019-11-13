class GamesController < ApplicationController

    def show
        @game = Game.find(params[:id])
        render json: @game
    end

    #The way this is going to have to be set up is because the IGDB API is accessed from the front end,
    #when a user goes to add a game to their list, server will have to see if the game exists or not
    #in the back end. 
    #If a game already exists, then we make a review to link it and the user together (user has many games thru reviews)
    #If it doesn't exist, do a Game.create, as params[:id] is the idgb_id provided as an arg by the front end
    #Then after the game is created also create a Review for it that ties the user and game together

    #How to get user_id and how to pass that to backend?
    def does_game_exist
        # byebug
        #Look for a game that has an idgb_id == params[:id]
        if Game.find_by(idgb_id: params[:id]) == nil #if game with idgb_id doesn't exist(nil), make a game with that idgb_id.
            new_game = Game.create(idgb_id: params[:id])
            # Then make a blank review that user can later edit
            new_review = Review.create!(headline: "",content: "",stars: 0,user_id: 7, game_id: new_game.id)
            render json: {game_created: new_game}
        else
            # If the game exists, make a review with that user_id and game_id that has matching idgb_id
            new_review = Review.create(headline: "",content: "",stars: 0,user_id: 7, game_id: Game.find_by(idgb_id: params[:id]).id)
            render json: {game_already_exists: Game.find_by(idgb_id: params[:id])}
        end

    end
    #In case of emergency use this because it works
    # if Game.where(`id : #{params[:id]}`) == [] #if game does not exist, make a game with that id.
    #     render json: {error: game.where("id = 1")}
    # else
    #     render json: {result: Game.where(`id : #{params[:id]}`)}
    # end
    def recently_reviewed_games
        # if blablabla
        most_recent_three_reviews = Review.order('created_at DESC').limit(3)
        most_recent_three_game_ids = most_recent_three_reviews.map {|review| review.game_id}
        most_recent_three_idgb_game_ids = most_recent_three_game_ids.map{|game_id| Game.find(game_id).idgb_id}
        render json: {most_recent_three_games_with_idgb_id: most_recent_three_idgb_game_ids}
    end

end
