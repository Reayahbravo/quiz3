class CreateBids < ActiveRecord::Migration[5.2]
  def change
    create_table :bids do |t|
      t.string :title
      t.integer :bid
      t.integer :reserve_price
      t.integer :current_price
      t.integer :previous_bids
      t.references :auctions, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
