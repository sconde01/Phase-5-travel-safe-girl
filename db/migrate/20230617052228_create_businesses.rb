class CreateBusinesses < ActiveRecord::Migration[7.0]
  def change
    create_table :businesses do |t|
      t.string :image_url
      t.string :name
      t.string :category

      t.timestamps
    end
  end
end
