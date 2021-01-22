class CreateScores < ActiveRecord::Migration[6.0]
  def change
    create_table :scores do |t|
      t.integer :time
      t.integer :strikes
      t.boolean :completed
      t.integer :user_id
      t.integer :code_id

      t.timestamps
    end
  end
end
