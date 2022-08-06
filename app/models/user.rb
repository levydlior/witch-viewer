class User < ApplicationRecord
  has_secure_password

  
  has_many :likes, dependent: :destroy
  has_many :witches, through: :likes

  validates :username, presence: true, uniqueness: true
  validates :password, presence: true
  validates :email, email: true, uniqueness: true
end
