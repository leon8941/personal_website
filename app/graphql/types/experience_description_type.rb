module Types
  class ExperienceDescriptionType < Types::BaseObject
    field :id, ID, null: false
    field :description, String, null: true
    field :experience, ExperienceType, null: false
    field :sorting, Integer, null: true
  end
end
