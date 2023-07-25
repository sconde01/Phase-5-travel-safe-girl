class RemoveCategoryFromBusinesses < ActiveRecord::Migration[7.0]
  def change
    remove_column :businesses, :category, :string
  end
end
