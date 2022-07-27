class ChangeWitchTokenIdType < ActiveRecord::Migration[6.1]
  def change
    change_column :witches, :tokenID, :string
  end
end
