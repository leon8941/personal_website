class ExperienceDescription < ApplicationRecord
    belongs_to :experience 

    default_scope { order(sorting: :asc) }
end