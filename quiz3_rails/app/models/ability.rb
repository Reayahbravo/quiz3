class Ability
  include CanCan::Ability

  def initialize(user)

    user ||= User.new
    if user.admin?

      can :manage, :all
    else
      can :read, :all
    end

    can(:delete, Auction) do |auction|
      auction.user == user
    end

    can(:crud, Auction) do |auction|
      user == auction.user
    end

    can(:crud, Bid) do |bid|
      user == bid.user
    end
  end
end
