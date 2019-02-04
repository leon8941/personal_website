class CreateExperience < ActiveRecord::Migration[5.2]
  def change
    create_table :experiences do |t|
      t.string :year
      t.string :job_title
      t.string :company_name 
      t.timestamps null: false
    end
  end
end
