class Experience < ApplicationRecord
    has_many :experience_descriptions, dependent: :destroy

    def to_s
        year + ' | ' + company_name + ' | ' + job_title
    end
end