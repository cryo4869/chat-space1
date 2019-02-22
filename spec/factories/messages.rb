FactoryBot.define do
  factory :message do
    content {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/public/IMG_6216.JPG")}
    user
    group
  end
end
