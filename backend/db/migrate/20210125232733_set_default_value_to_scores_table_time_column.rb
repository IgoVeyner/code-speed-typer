class SetDefaultValueToScoresTableTimeColumn < ActiveRecord::Migration[6.0]
  def up
    change_column :scores, :time, :integer, default: 0
  end

  def down
    change_column :scores, :time, :integer, default: nil
  end
end
