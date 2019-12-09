class CreateTrades < ActiveRecord::Migration[6.0]
  def change
    create_table :trades do |t|
      t.string "trade_type"
      t.string "description"
      t.string "img"
      t.string "title"

      t.timestamps
    end
  end
end
