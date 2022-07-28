class RemoveExternalUrl < ActiveRecord::Migration[6.1]
  def change
    remove_column :witches, :externalURL, :string
  end
end
