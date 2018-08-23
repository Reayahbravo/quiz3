class Bid < ApplicationRecord
  belongs_to :user
  belongs_to :auctions

  validates :title, presence: true

  validates(
    :bid,
    presence: {
      numericality: {
        greater_than_or_equal_to: 0
      }
    )

  validates(
    :reserve_price,
    numericality: {
      greater_than_or_equal_to: 0
    }
  )

    validates(
      :current_price,
      numericality: {
        greater_than_or_equal_to: 0
      }
    )

    validates(
      :previous_bids,
      numericality: {
        greater_than_or_equal_to: 0
      }
      timestamp: timestamp
    )
end
