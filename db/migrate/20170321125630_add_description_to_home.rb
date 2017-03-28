class AddDescriptionToHome < ActiveRecord::Migration[5.0]
  def change
    add_column :homes, :description, :text
  end
end
