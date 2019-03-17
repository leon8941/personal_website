module Types
  class SkillSetType < Types::BaseObject
    field :id, ID, null: false
    field :tech_description, String, null: false
    field :color_code, String, null: false
  end
end
