class Work < ApplicationRecord
    has_many :work_skill_sets 
    has_many :skill_sets, through: :work_skill_sets
end