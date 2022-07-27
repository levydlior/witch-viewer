class RenameWitchColumn < ActiveRecord::Migration[6.1]
  def change
    rename_column :witches, :type, :type_of_witch
  end
end
