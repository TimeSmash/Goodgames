class User < ApplicationRecord
    has_secure_password

    has_many :reviews
    has_many :games, through: :reviews
    has_many :likes
    has_many :genres, through: :user_genres

    def hey
        puts "HEY, I am #{self.name}"
    end

    # VALIDATIONS BELOW

    validates :name, :email, :birthday, presence: true
        
    validates :name, uniqueness: true 
    validates :name, length: {minimum: 3, too_short: "Your username must be at least 3 characters long."}
    validates :name, length: {maximum: 30, too_long: "Your username cannot be more than 30 characters long."}
    
    validates :email, uniqueness: true

    # validates_inclusion_of :birthday, :in => Date.new(1901)..Time.now.years_ago(21).to_date
end
 

# class Game < ApplicationRecord

#     has_many :reviews
#     has_many :users, through: :reviews

# end

# user1= User.create id: 1 name: "User1"
# game1 = Game.create id: 1name: "Game1"
# review1 = Review.create  id:1 headline: "Amazing" content:"Bunch of crap", user_id: 1, game_id: 1  

# When User adds game to list, they are given option to add review or not. If they choose to, they 
# put in all its crap like headline, content, stars, etc. and the review is given the user_id and game_id 
# as foreign keys. (POST). If they don't want to add a review at the moment, a review object is still created
# with all strings blank. Give review a published boolean to only show complete reviews