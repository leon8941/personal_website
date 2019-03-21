module Types
  class WorkType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: true
    field :description, String, null: true
    field :github_link, String, null: true
    field :skill_sets, [Types::SkillSetType], null: true
  end
end
