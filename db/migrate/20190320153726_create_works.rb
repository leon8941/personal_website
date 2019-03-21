class CreateWorks < ActiveRecord::Migration[5.2]
  def change
    create_table :works do |t|
      t.string :title
      t.string :description
      t.string :github_link
      t.timestamps null: false
    end
  end
end
