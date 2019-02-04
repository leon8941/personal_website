class CreateExperienceDescriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :experience_descriptions do |t|
      t.integer :experience_id
      t.string :description
      t.timestamps null: false
    end
  end
end
