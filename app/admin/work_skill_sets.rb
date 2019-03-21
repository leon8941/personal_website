ActiveAdmin.register WorkSkillSet do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :work_id, :skill_set_id
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

    form do |f|
        f.inputs 'Details' do
            f.input :work_id, as: :select, :collection => Work.all, :label_method => :work
            f.input :skill_set_id, as: :select, :collection => SkillSet.all, :label_method => :skill_set
            
        end
        f.actions
    end

end
