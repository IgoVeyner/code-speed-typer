class SetDefaultValueToScoresTableStrikesColumn < ActiveRecord::Migration[6.0]
  def up
    change_column :scores, :strikes, :string, default: 0
  end

  def down
    change_column :scores, :strikes, :string, default: nil
  end
end
