# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# *********************  GAMES  *********************  

    Game.create(idgb_id:1)

# *********************  GENRES  *********************  

# t.string "name"
#     t.integer "idgb_id"
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#     t.string "idgb_slug"

# Genre.create(name: "Point-and-click",idgb_id: 2, idgb_slug: "point-and-click")
# Genre.create(name: "Fighting",idgb_id: 4, idgb_slug: "fighting")
# Genre.create(name: "Shooter",idgb_id: 5, idgb_slug: "shooter")
# Genre.create(name: "Music",idgb_id: 7, idgb_slug: "music")
# Genre.create(name: "Platform",idgb_id: 8, idgb_slug: "platform")
# Genre.create(name: "Puzzle",idgb_id: 9, idgb_slug: "puzzle")
# Genre.create(name: "Racing",idgb_id: 10, idgb_slug: "racing")
# Genre.create(name: "Real Time Strategy (RTS)",idgb_id: 11, idgb_slug: "real-time-strategy-rts")
# Genre.create(name: "Role-playing (RPG)",idgb_id: 12, idgb_slug: "role-playing-rpg")
# Genre.create(name: "Simulator",idgb_id: 13, idgb_slug: "simulator")
# Genre.create(name: "Sport",idgb_id: 14, idgb_slug: "sport")
# Genre.create(name: "Strategy",idgb_id: 15, idgb_slug: "strategy")
# Genre.create(name: "Turn-based strategy (TBS)",idgb_id: 16, idgb_slug: "turn-based-strategy-tbs")
# Genre.create(name: "Tactical",idgb_id: 24, idgb_slug: "tactical")
# Genre.create(name: "Hack and slash/Beat 'em up",idgb_id: 25, idgb_slug: "hack-and-slash-beat-em-up")
# Genre.create(name: "Quiz/Trivia",idgb_id: 26, idgb_slug: "quiz-trivia")
# Genre.create(name: "Pinball",idgb_id: 30, idgb_slug: "pinball")
# Genre.create(name: "Adventure",idgb_id: 31, idgb_slug: "adventure")
# Genre.create(name: "Indie",idgb_id: 32, idgb_slug: "indie")
# Genre.create(name: "Arcade",idgb_id: 33, idgb_slug: "arcade")

# ******************************************************************************

User.destroy_all
# Review.destroy_all
# Game.destroy_all