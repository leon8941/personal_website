class CreateWorkSkillSets < ActiveRecord::Migration[5.2]
  def change
    create_table :work_skill_sets do |t|
      t.integer :work_id
      t.integer :skill_set_id
      t.timestamps null: false
    end
  end
end
