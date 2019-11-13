class AddIdgbIdToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :idgb_id, :integer
  end
end
