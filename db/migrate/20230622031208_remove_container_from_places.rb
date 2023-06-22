class RemoveContainerFromPlaces < ActiveRecord::Migration[7.0]
  def change
    remove_reference :places, :business, null: false, foreign_key: true
  end
end
