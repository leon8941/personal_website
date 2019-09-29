class ChangeColumnTypeDescFromStringToText < ActiveRecord::Migration[5.2]
  def change
    change_column :works, :description, :text
  end
end
