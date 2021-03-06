module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    field :experiences, [ExperienceType], null: false,
      description: "Get all experiences"
    def experiences
      Experience.joins(:experience_descriptions).order('experiences.sorting ASC').distinct
    end

    field :skillSets, [SkillSetType], null: false,
      description: "Get all skill sets"
    def skill_sets
      SkillSet.all
    end

    field :works, [WorkType], null: false,
      description: "Get all works along with skill sets"
    def works
      Work.joins(:skill_sets).distinct
    end
  end
end
