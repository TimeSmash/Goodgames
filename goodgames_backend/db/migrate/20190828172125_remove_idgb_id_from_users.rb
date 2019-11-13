class RemoveIdgbIdFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :idgb_id
  end
end
