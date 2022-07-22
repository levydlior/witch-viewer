class User < ApplicationRecord
  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :password, presence: true
  validates :email, presence: true, email: true, uniqueness: true
  validates :avatar, presence: true
  validates :name, presence: true
  validates :last_name, presence: true
end
