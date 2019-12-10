class CreateRenees < ActiveRecord::Migration[6.0]
  def change
    create_table :renees do |t|
      t.string "password_digest"
      t.string "email"
      t.timestamps
    end
  end
end
