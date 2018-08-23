class Auction < ApplicationRecord
  belongs_to :user
  has_many :kittens, dependent: :destroy
  validates :title, presence: true
  validates(
    :details,     
    presence: {
      message: "must be given"
    },
    length: {
      minimum: 10,
      maximum: 2048
    }
  )
  
  validates(
    :ends_on, 
    presence: {
      timestamp: timestamp
    }
  
  validates(
    reserve_price: {
      numericality: {
      greater_than_or_equal_to: 0
    }
  )
end
