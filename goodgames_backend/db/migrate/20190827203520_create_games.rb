class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.integer :idgb_id
      t.string :name
      t.string :genres
      t.string :platforms
      t.string :esrb_ratings
      t.string :cover_image
      t.string :summary
      t.string :similar_games

      t.timestamps
    end
  end
end
