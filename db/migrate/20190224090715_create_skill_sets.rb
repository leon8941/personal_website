class CreateSkillSets < ActiveRecord::Migration[5.2]
  def change
    create_table :skill_sets do |t|
      t.string :tech_description
      t.string :color_code
      t.timestamps null: false
    end
  end
end
