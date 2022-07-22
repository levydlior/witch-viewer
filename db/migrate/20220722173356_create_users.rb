class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :email
      t.string :avatar
      t.string :name
      t.string :last_name

      t.timestamps
    end
  end
end
