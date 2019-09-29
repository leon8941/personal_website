class AddMediumLinkToWorks < ActiveRecord::Migration[5.2]
  def change
    add_column :works, :medium_link, :string
  end
end
