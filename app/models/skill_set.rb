class SkillSet < ApplicationRecord
    has_one :work_skill_set
    has_one :work, through: :work_skill_set

    def to_s
        tech_description
    end
end