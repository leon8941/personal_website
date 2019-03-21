module Types
  class WorkSkillSetType < Types::BaseObject
    field :id, ID, null: false
    field :skillSet, SkillSetType, null: false
  end
end
