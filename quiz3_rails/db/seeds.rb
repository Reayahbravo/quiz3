PASSWORD = "supersecret"

Auction.delete_all
Bid.delete_all
User.delete_all

super_user = User.create(
  first_name: "Jon",
  last_name: "Snow",
  email: "js@winterfell.gov",
  password: PASSWORD,
  admin: true
)

10.times do
  full_name = Faker::SiliconValley.character.split(' ')
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name

  User.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
    password: PASSWORD
  )
end

users = User.all

puts Cowsay.say "Created #{users.count} users", :tux

100.times do
    a = Auction.create(
      title: Faker::Hacker.say_something_smart,
      details: Faker::HarryPotter.quote,
    #   reserve_price: Faker::Currency,
      user: users.sample,
    )
  
    if a.valid?
      rand(0..10).times do
        Bid.create(
          bid: Faker::Currency,
          Auction: a,
          user: users.sample
        )
      end
    end
  end

auctions = Auction.all
bids = Bid.all

puts Cowsay.say("Created #{auctions.count} auctions", :frogs)
puts Cowsay.say("Created #{bids.count} bids", :sheep)
# puts "Login with #{super_user.email} and password of '#{PASSWORD}'"AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?