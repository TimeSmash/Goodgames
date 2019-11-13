class AddIdgbSlugToGenre < ActiveRecord::Migration[5.2]
  def change
    add_column :genres, :idgb_slug, :string
  end
end
