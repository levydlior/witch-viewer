class Like < ApplicationRecord
  belongs_to :witch
  belongs_to :user

  validates :witch_id, presence: true
  validates :user_id, presence: true
end
