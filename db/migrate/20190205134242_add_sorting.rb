class AddSorting < ActiveRecord::Migration[5.2]
  def change
    add_column :experiences, :sorting, :integer
    add_column :experience_descriptions, :sorting, :integer
  end
end
