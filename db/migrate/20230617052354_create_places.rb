class CreatePlaces < ActiveRecord::Migration[7.0]
  def change
    create_table :places do |t|
      t.string :image_url
      t.string :name
      t.string :location
      t.string :category
      t.text :description
      t.string :safety_features
      t.references :business, null: false, foreign_key: true

      t.timestamps
    end
  end
end
