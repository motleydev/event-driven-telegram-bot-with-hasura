let error = false
print("**** Going to start Mongo seed ****")

var admin = db.getSiblingDB("admin")
admin.auth("appsmith", "T6FUdsuV6CIVY")

let res = [
    db.createUser(
        {
            user: "appsmith",
            pwd: "T6FUdsuV6CIVY",
            roles: [{
                role: "root",
                db: "admin"
            }, "readWrite"]
        }
    )
]

printjson(res)

if (error) {
  print('Error occurred while inserting the records')
}
