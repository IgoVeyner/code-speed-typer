class SetDefaultValueToScoresTableCompletedColumn < ActiveRecord::Migration[6.0]
  def up
    change_column :scores, :completed, :boolean, default: false
  end

  def down
    change_column :scores, :completed, :boolean, default: nil
  end
end
