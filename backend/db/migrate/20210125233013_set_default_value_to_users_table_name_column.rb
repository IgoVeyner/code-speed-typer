class SetDefaultValueToUsersTableNameColumn < ActiveRecord::Migration[6.0]
  def up
    change_column :users, :name, :text, default: "anonymous"
  end

  def down
    change_column :users, :name, :text, default: nil
  end
end
