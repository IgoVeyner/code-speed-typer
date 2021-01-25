class SetDefaultValueToUsersTableNameColumn < ActiveRecord::Migration[6.0]
  def up
    change_column :users, :name, :string, default: "anonymous"
  end

  def down
    change_column :users, :name, :string, default: nil
  end
end
