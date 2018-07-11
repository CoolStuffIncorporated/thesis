/* What's the dealio with foreign keys and knex?
I'm wondering whether we should add a foreign key constraint,
or whether we should manually create these associations. */

/* TABLES */
/* users
 * posts
 * tags
 * posts_tags
 * media
 * media_tags
*/

// add friends table
// add cities table
// add countries table
exports.up = (knex, Promise) =>
  Promise.all([
    knex.schema.createTable("users", table => {
      table.increments("user_id").primary();
      table.string("username");
      table.string("password");
      table.string("name");
      table.string("email");
      table.string("bio");
      table.string("etag");
      table.string("image_key");
      table.string("version_id");
    }),
    knex.schema.createTable("blogs", table => {
      table.increments("blog_id").primary();
      table.string("title");
      table.string("content");
      table.timestamp("timestamp");
      table.integer("user_id");
    }),
    knex.schema.createTable("tags", table => {
      table.increments("tag_id").primary();
      table.string("tag_name");
    }),
    knex.schema.createTable("blogs_tags", table => {
      table.increments("blog_tags_id").primary();
      table.integer("tag_id");
      table.integer("blog_id");
    }),
    knex.schema.createTable("media", table => {
      table.increments("media_id").primary();
      table.integer("user_id");
      table.integer("country_id");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.string("image_url");
      // table.string("etag"); currently not using metadata to pull down photos
      // table.string("key"); currently not using metadata to pull down photos
    }),
    knex.schema.createTable("user_friends", table => {
      table.increments("user_friend_id").primary();
      table.integer("user_id");
      table.integer("friend_id"); // references user_id corresponding to friend
    }),
    knex.schema.createTable("countries", table => {
      table.increments("country_id").primary();
      table.string("country");
    }),
    knex.schema.createTable("favorite_destinations", table => {
      table.increments("favorite_destination_id").primary();
      table.integer("destination_id"); // references countries_id for purposes of mvp
      table.integer("user_id");
    }),
    knex.schema.createTable("visited_destinations", table => {
      table.increments("visited_destination_id").primary();
      table.integer("destination_id"); // references countries_id for purposes of mvp
      table.integer("user_id");
    }),
  ]);

exports.down = (knex, Promise) =>
  Promise.all([
    knex.schema.dropTableIfExists("users"),
    knex.schema.dropTableIfExists("blogs"),
    knex.schema.dropTableIfExists("tags"),
    knex.schema.dropTableIfExists("blogs_tags"),
    knex.schema.dropTableIfExists("media"),
    knex.schema.dropTableIfExists("media_tags"),
    knex.schema.dropTableIfExists("user_friends"),
    knex.schema.dropTableIfExists("countries"),
    knex.schema.dropTableIfExists("favorite_destinations"),
    knex.schema.dropTableIfExists("visited_destinations")
  ]);
