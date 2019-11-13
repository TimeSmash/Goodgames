class RemoveEverythingFromGamesExceptIdgbId < ActiveRecord::Migration[5.2]
  def change
    remove_column :games, :name
    remove_column :games, :genres
    remove_column :games, :platforms
    remove_column :games, :esrb_ratings
    remove_column :games, :cover_image
    remove_column :games, :summary
    remove_column :games, :similar_games
  end
end
