class CreateTrades < ActiveRecord::Migration[6.0]
  def change
    create_table :trades do |t|
      t.string "type"
      t.integer "renee_id"
      t.string "description"
      t.string "img"
      t.timestamps
    end
  end
end
