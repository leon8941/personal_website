ActiveAdmin.register ExperienceDescription do
    # See permitted parameters documentation:
    # https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
    #
    permit_params :experience_id, :description, :sorting
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
            f.input :experience_id, as: :select, :collection => Experience.all, :label_method => :year
            f.input :description
            f.input :sorting
        end
        f.actions
    end

end
