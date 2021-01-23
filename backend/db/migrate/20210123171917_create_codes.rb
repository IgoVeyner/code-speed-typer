class CreateCodes < ActiveRecord::Migration[6.0]
  def change
    create_table :codes do |t|
      t.string :name
      t.string :line

      t.timestamps
    end
  end
end
