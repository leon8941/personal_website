module Types
  class ExperienceType < Types::BaseObject
    field :year, String, null: false
    field :job_title, String, null: false
    field :company_name, String, null: false
    field :experience_descriptions, [Types::ExperienceDescriptionType], null: true
    field :sorting, Integer, null: true
  end
end
