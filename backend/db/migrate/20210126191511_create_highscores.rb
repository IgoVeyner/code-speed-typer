class CreateHighscores < ActiveRecord::Migration[6.0]
  def change
    create_table :highscores do |t|
      t.integer :score_id
      t.integer :code_id

      t.timestamps
    end
  end
end
