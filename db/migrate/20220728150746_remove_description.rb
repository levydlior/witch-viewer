class RemoveDescription < ActiveRecord::Migration[6.1]
  def change
    remove_column :witches, :description, :string

  end
end
