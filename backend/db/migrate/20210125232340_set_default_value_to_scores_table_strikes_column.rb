class SetDefaultValueToScoresTableStrikesColumn < ActiveRecord::Migration[6.0]
  def up
    change_column :scores, :strikes, :integer, default: 0
  end

  def down
    change_column :scores, :strikes, :integer, default: nil
  end
end
