class CreateRenees < ActiveRecord::Migration[6.0]
  def change
    create_table :renees do |t|

      t.timestamps
    end
  end
end
