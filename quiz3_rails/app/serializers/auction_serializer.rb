class AuctionSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :title,
    :details,
    :ends_on,
    :reserve_price,
    :created_at,
    :updated_at,
  )
    # To include associated models, use the same named
  # methods used for creating associations. You can rename
  # the association with "key" which is only going to show
  # in the rendered "json".
  belongs_to(:user, key: :author)
  has_many(:bids)
# To customize serialize for associated models, you
# can a define serializer within the current
# serializer.
class BidSerializer < ActiveModel::Serializer
  # This will be used to serialize the answers
  # from `has_many(:answers)`
  attributes :id, :bid, :reserve_price, :current_price, :previous_bids :created_at, :updated_at
    belongs_to(:user, key: :author)
end


end
