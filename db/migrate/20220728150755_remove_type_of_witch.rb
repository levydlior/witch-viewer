class RemoveTypeOfWitch < ActiveRecord::Migration[6.1]
  def change
    remove_column :witches, :type_of_witch, :string
  end
end
