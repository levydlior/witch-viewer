class CreateWitches < ActiveRecord::Migration[6.1]
  def change
    create_table :witches do |t|
      t.string :type
      t.string :name
      t.string :image
      t.string :description
      t.integer :tokenID
      t.string :externalURL

      t.timestamps
    end
  end
end
